// Builds the data files the modern viewer reads from the original manual files.
// The original content is only read, never modified.
//
// Outputs (app/data/):
//   toc.json          table of contents for every section
//   ewd.json          wiring-diagram metadata (circuits, connectors, locations, flows)
//   search-index.json prebuilt MiniSearch index
//   search-meta.json  per-document title, breadcrumb, section, kind and route
//   search-text.json  per-document plain text, used for result snippets
//
// Usage: node scripts/build-data.mjs

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import MiniSearch from '../app/vendor/minisearch.mjs';
import { INDEX_OPTIONS } from '../app/search-config.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'app', 'data');
const EWD_DIR = 'esicont/srvc/html';

export const SECTIONS = [
  { id: 'S01', label: 'Workshop Manual', dir: 'esicont/srvc/html', menu: 'left_menu_S01.html', icon: 'wrench' },
  { id: 'S04', label: 'Wiring Diagram', dir: 'esicont/srvc/html', menu: 'left_menu_S04.html', icon: 'bolt' },
  { id: 'S02', label: 'Technical Guide', dir: 'esicont/srvc/html', menu: 'left_menu_S02.html', icon: 'book' },
  { id: 'S21', label: 'Technical Quick Guide', dir: 'esicont/srvc/html', menu: 'left_menu_S21.html', icon: 'zap' },
  { id: 'A27', label: 'SKYACTIV-G 1.3/1.5/2.0/2.5 Engine', dir: 'esicont/engine/A27/html', menu: 'left_menu_A27.html', icon: 'engine' },
  { id: 'A32', label: 'SKYACTIV-D 1.5 Engine', dir: 'esicont/engine/A32/html', menu: 'left_menu_A32.html', icon: 'engine' },
  { id: 'B47', label: 'F65M-R, F66M-R Manual Transmission', dir: 'esicont/mission/B47/html', menu: 'left_menu_B47.html', icon: 'gear' },
  { id: 'B46', label: 'CW6A-EL Automatic Transmission', dir: 'esicont/mission/B46/html', menu: 'left_menu_B46.html', icon: 'gear' },
  { id: 'B38', label: 'EW6A(X)-EL, FW6A(X)-EL Automatic Transmission', dir: 'esicont/mission/B38/html', menu: 'left_menu_B38.html', icon: 'gear' },
  { id: 'S05', label: 'Bodyshop Manual', dir: 'esicont/srvc/html', menu: 'left_menu_S05.html', icon: 'car' },
  { id: 'S08', label: 'Technical Data', dir: 'esicont/srvc/html', menu: 'left_menu_S08.html', icon: 'table' },
  { id: 'S20', label: 'Maintenance and Care', dir: 'esicont/srvc/html', menu: 'left_menu_S20.html', icon: 'drop' },
];

const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8').replace(/^﻿/, '');
const exists = (rel) => fs.existsSync(path.join(ROOT, rel));

const ENTITIES = { nbsp: ' ', amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", deg: '°', plusmn: '±', times: '×', micro: 'µ', middot: '·' };
export function decode(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&([a-z]+);/gi, (m, n) => ENTITIES[n.toLowerCase()] ?? m);
}
const clean = (s) => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
const attr = (attrs, name) => (attrs.match(new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, 'i')) || [])[1];

// Evaluates one of the original `var xMAP = {...};` data files.
function loadMap(rel, name) {
  const ctx = {};
  vm.runInNewContext(`${read(rel)};this.__r = ${name};`, ctx);
  return ctx.__r;
}

// ---------------------------------------------------------------- wiring data
const circuitMAP = loadMap(`${EWD_DIR}/js/circuitMAP_UK.js`, 'circuitMAP');
const indexMAP = loadMap(`${EWD_DIR}/js/indexMAP_UK.js`, 'indexMAP');
const connector2circuitMAP = loadMap(`${EWD_DIR}/js/connector2circuitMAP_UK.js`, 'connector2circuitMAP');
const locationMAP = loadMap(`${EWD_DIR}/js/locationMAP_UK.js`, 'locationMAP');
const voltageMAP = loadMap(`${EWD_DIR}/js/voltageMAP_UK.js`, 'voltageMAP');
const currentflowMAP = loadMap(`${EWD_DIR}/js/currentflowMAP_UK.js`, 'currentflowMAP');

const fileToCircuit = {};
for (const [key, v] of Object.entries(circuitMAP)) fileToCircuit[v.filename.replace(/\.svg$/, '')] = key;

const circuits = {};
for (const [key, v] of Object.entries(circuitMAP)) {
  if (!exists(`${EWD_DIR}/svg/circuit/${v.filename}`)) continue;
  const flow = currentflowMAP[v.filename];
  circuits[key] = { f: v.filename, n: v.linkname, ...(flow && exists(`${EWD_DIR}/${flow}`) ? { flow } : {}) };
}

const connectors = {};
for (const [id, name] of Object.entries(indexMAP)) {
  const svg = `MZ2UKC${id.replace('-', '_')}.svg`;
  connectors[id] = {
    n: name,
    ...(exists(`${EWD_DIR}/svg/connector/${svg}`) ? { svg } : {}),
    c: (connector2circuitMAP[id] || '').split('|').filter((k) => circuits[k]),
    loc: (locationMAP[id] || '').split(':').filter(Boolean),
    ...(voltageMAP[id] ? { v: voltageMAP[id] } : {}),
  };
}

// --------------------------------------------------------------------- TOC
// Turns a legacy TOC href into an app route.
function route(dir, href) {
  const base = href.split('#')[0];
  let m;
  if ((m = base.match(/^(MZ2UKS[0-9A-Z]+_[0-9A-Za-z]+?)(?:_([PBCU][0-9A-F]{6}))?_GO\.html$/))) {
    const key = fileToCircuit[m[1]];
    if (key) return `e:${key}${m[2] ? ':' + m[2] : ''}`;
  }
  if (/\.pdf$/i.test(base)) return `f:${dir}/${base}`;
  const target = base.replace(/_GO\.html$/, '.html');
  return `p:${dir}/${target}`;
}

const pageInfo = new Map(); // page path -> { section, crumbs }
const ewdEntries = []; // { key, hl, title, crumbs }

function parseList(dir, file, crumbs, section, seen) {
  if (seen.has(file) || !exists(`${dir}/${file}`)) return [];
  seen.add(file);
  const html = read(`${dir}/${file}`);
  const out = [];
  for (const li of html.matchAll(/<LI([^>]*)>([\s\S]*?)<\/LI>/gi)) {
    const a = li[2].match(/<A\b([^>]*)>([\s\S]*?)<\/A>/i);
    if (!a) continue;
    const href = attr(a[1], 'href');
    const title = clean(attr(a[1], 'title') || a[2]);
    if (!href) continue;
    if (/class\s*=\s*"?kid/i.test(li[1]) || /^node_/i.test(href)) {
      const c = parseList(dir, href, [...crumbs, title], section, seen);
      if (c.length) out.push({ t: title, c });
    } else {
      const h = route(dir, href);
      out.push({ t: title, h });
      if (h.startsWith('p:') && !pageInfo.has(h.slice(2))) pageInfo.set(h.slice(2), { section: section.id, crumbs });
      if (h.startsWith('e:')) {
        const [, key, hl] = h.split(':');
        ewdEntries.push({ key, hl, title, crumbs, section: section.id });
      }
    }
  }
  return out;
}

const toc = SECTIONS.map((s) => ({
  id: s.id,
  label: s.label,
  icon: s.icon,
  c: parseList(s.dir, s.menu, [s.label], s, new Set()),
}));

// ------------------------------------------------------------- search docs
const DTC_RE = /\b([BCPU][0-9A-F]{4})(?::?([0-9A-F]{2}))?\b/g;
function codesOf(text) {
  const set = new Set();
  for (const m of text.matchAll(DTC_RE)) {
    if (!/\d/.test(m[1].slice(1))) continue;
    set.add(m[1]);
    if (m[2]) set.add(m[1] + m[2]);
  }
  return [...set].join(' ');
}

function kindOf(title, file) {
  if (/^GI_|QUICK_GUIDE/i.test(file)) return 'info';
  if (/\bDTC\b|^DTC|TROUBLE CODE/i.test(title)) return 'dtc';
  if (/SPECIFICATION|TORQUE|TIGHTENING/i.test(title)) return 'spec';
  if (/REMOVAL|INSTALLATION|INSPECTION|REPLACEMENT|ADJUSTMENT|DISASSEMBLY|ASSEMBLY|PROCEDURE|SERVICE/i.test(title)) return 'procedure';
  if (/LOCATION INDEX|CONSTRUCTION|DESCRIPTION|FUNCTION|OUTLINE|STRUCTURAL VIEW|SYSTEM WIRING/i.test(title)) return 'description';
  return 'procedure';
}

function pageText(html) {
  return clean(
    html
      .replace(/<(script|style|head)\b[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<p class="servinfo-title(-id)?"[\s\S]*?<\/p>/gi, ' ')
      .replace(/<div class="figure-caption">[\s\S]*?<\/div>/gi, ' '),
  );
}

const docs = [];
const sectionLabel = Object.fromEntries(SECTIONS.map((s) => [s.id, s.label]));
const dirSection = { 'esicont/srvc/html': 'S01' };
for (const s of SECTIONS) dirSection[s.dir] ??= s.id;

let pageCount = 0;
for (const dir of [...new Set(SECTIONS.map((s) => s.dir))]) {
  for (const file of fs.readdirSync(path.join(ROOT, dir))) {
    if (!/^(id[0-9a-z]+|GI_(?!HOME)[A-Z]+|TECHNICAL_QUICK_GUIDE)\.html$/i.test(file)) continue;
    const rel = `${dir}/${file}`;
    const html = read(rel);
    const title = clean((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || file);
    const info = pageInfo.get(rel) || { section: dirSection[dir], crumbs: [sectionLabel[dirSection[dir]]] };
    const text = pageText(html.replace(/<title>[\s\S]*?<\/title>/i, ''));
    docs.push({
      id: docs.length,
      t: title,
      b: info.crumbs.join(' › '),
      s: info.section,
      k: kindOf(title, file),
      h: `p:${rel}`,
      codes: codesOf(title),
      x: text,
    });
    pageCount++;
  }
}

// Wiring diagrams: one doc per circuit, carrying every label drawn on it.
for (const [key, c] of Object.entries(circuits)) {
  const svg = read(`${EWD_DIR}/svg/circuit/${c.f}`);
  const labels = new Set();
  for (const m of svg.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/gi)) {
    const t = clean(m[1]);
    if (t && t.length > 1) labels.add(t);
  }
  const conns = Object.entries(connectors).filter(([, v]) => v.c.includes(key));
  docs.push({
    id: docs.length,
    t: c.n,
    b: `Wiring Diagram › ${key}`,
    s: 'S04',
    k: 'wiring',
    h: `e:${key}`,
    codes: key,
    x: [...conns.map(([id, v]) => `${id} ${v.n}`), ...labels].join(' · '),
  });
}

// DTC-specific wiring highlights from the wiring TOC (e.g. ..._P003100).
const seenHl = new Set();
for (const e of ewdEntries) {
  if (!e.hl || seenHl.has(e.key + e.hl)) continue;
  seenHl.add(e.key + e.hl);
  const code = `${e.hl.slice(0, 5)}:${e.hl.slice(5)}`;
  docs.push({
    id: docs.length,
    t: `DTC ${code} wiring — ${e.title.replace(/_[PBCU][0-9A-F]{6}$/, '')}`,
    b: e.crumbs.join(' › '),
    s: 'S04',
    k: 'wiring',
    h: `e:${e.key}:${e.hl}`,
    codes: `${e.hl.slice(0, 5)} ${e.hl} ${e.key}`,
    x: '',
  });
}

for (const [id, v] of Object.entries(connectors)) {
  if (!v.c.length) continue;
  docs.push({
    id: docs.length,
    t: `${v.n} (${id})`,
    b: `Wiring Diagram › Connectors`,
    s: 'S04',
    k: 'connector',
    h: `e:${v.c[0]}::${id}`,
    codes: id,
    x: `Connector ${id} ${v.n}. Used in ${v.c.map((k) => `${k} ${circuits[k].n}`).join(', ')}`,
  });
}

// -------------------------------------------------------------------- write
fs.mkdirSync(OUT, { recursive: true });
const write = (name, data) => {
  const s = JSON.stringify(data);
  fs.writeFileSync(path.join(OUT, name), s);
  console.log(`${name.padEnd(18)} ${(s.length / 1024 / 1024).toFixed(2)} MB`);
};

const countLeaves = (n) => (n.c ? n.c.reduce((a, c) => a + countLeaves(c), 0) : 1);
write('toc.json', toc);
write('ewd.json', { circuits, connectors });
const index = new MiniSearch(INDEX_OPTIONS);
index.addAll(docs);
write('search-index.json', index);
write('search-meta.json', docs.map(({ t, b, s, k, h }) => [t, b, s, k, h]));
write('search-text.json', docs.map((d) => d.x));

console.log('\nTOC entries per section:');
for (const s of toc) console.log(`  ${s.id} ${s.label.padEnd(48)} ${countLeaves(s)}`);
const linkedPages = [...pageInfo.keys()];
const missing = linkedPages.filter((p) => !exists(p));
console.log(`\nContent pages indexed:   ${pageCount}`);
console.log(`Pages linked from TOC:   ${linkedPages.length} (${missing.length} missing on disk)`);
if (missing.length) console.log('  e.g.', missing.slice(0, 5).join(', '));
console.log(`Wiring circuits:         ${Object.keys(circuits).length} / ${Object.keys(circuitMAP).length} in circuitMAP`);
console.log(`DTC wiring highlights:   ${seenHl.size}`);
console.log(`Connectors:              ${Object.keys(connectors).length}`);
console.log(`Search documents:        ${docs.length}`);
