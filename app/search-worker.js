// Runs search off the main thread. Loads the prebuilt index first so search is
// ready quickly, then loads page text in the background for result snippets.
import MiniSearch from './vendor/minisearch.mjs';
import { INDEX_OPTIONS, SYNONYMS, normalizeQuery, isCodeQuery } from './search-config.mjs';

let index = null;
let meta = null;
let texts = null;
const ready = (async () => {
  const [idx, m] = await Promise.all([
    fetch('data/search-index.json').then((r) => r.text()),
    fetch('data/search-meta.json').then((r) => r.json()),
  ]);
  index = MiniSearch.loadJSON(idx, INDEX_OPTIONS);
  meta = m;
  postMessage({ type: 'ready', count: meta.length });
  fetch('data/search-text.json')
    .then((r) => r.json())
    .then((t) => {
      texts = t;
      postMessage({ type: 'texts' });
    })
    .catch(() => {});
})();

const escHtml = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function snippet(text, terms, len = 220) {
  if (!text) return '';
  const re = terms.length ? new RegExp(terms.map(reEsc).join('|'), 'i') : null;
  const m = re && re.exec(text);
  let start = m ? Math.max(0, m.index - 70) : 0;
  if (start > 0) start = text.indexOf(' ', start) + 1 || start;
  let s = text.slice(start, start + len);
  const cut = s.lastIndexOf(' ');
  if (start + len < text.length && cut > len * 0.7) s = s.slice(0, cut);
  s = escHtml(s);
  if (terms.length) s = s.replace(new RegExp(`(${terms.map((t) => reEsc(escHtml(t))).join('|')})`, 'gi'), '<mark>$1</mark>');
  return (start > 0 ? '… ' : '') + s + (start + len < text.length ? ' …' : '');
}

// Each word with a synonym becomes "word OR synonym".
function expand(query, combineWith) {
  return {
    combineWith,
    queries: query.split(' ').map((w) => {
      const syn = SYNONYMS[w.toLowerCase()];
      return syn ? { combineWith: 'OR', queries: [w, syn] } : w;
    }),
  };
}

function run({ q, sections, kinds, limit = 50 }) {
  const query = normalizeQuery(q);
  if (!query) return { total: 0, items: [], kinds: {}, sections: {} };
  const code = isCodeQuery(query);
  const opts = {
    boost: { t: 3, codes: 6, b: 0.4 },
    prefix: (term) => term.length > 1,
    fuzzy: (term) => (term.length > 4 && !/\d/.test(term) ? 0.2 : false),
    boostDocument: (id) => {
      const k = meta[id][3];
      if (code) return k === 'dtc' ? 2 : k === 'wiring' ? 1.3 : 1;
      return k === 'connector' || k === 'wiring' ? 0.9 : 1;
    },
  };
  let res = index.search(expand(query, 'AND'), opts);
  if (res.length < 3 && query.includes(' ')) res = index.search(expand(query, 'OR'), opts);

  const kindCounts = {};
  const sectionCounts = {};
  const filtered = [];
  for (const r of res) {
    const [, , s, k] = meta[r.id];
    const okSection = !sections?.length || sections.includes(s);
    const okKind = !kinds?.length || kinds.includes(k);
    if (okSection) kindCounts[k] = (kindCounts[k] || 0) + 1;
    if (okKind) sectionCounts[s] = (sectionCounts[s] || 0) + 1;
    if (okSection && okKind) filtered.push(r);
  }
  const terms = [...new Set(res.slice(0, 1).flatMap((r) => r.terms).concat(query.split(' ')))].filter((t) => t.length > 1);
  return {
    total: filtered.length,
    kinds: kindCounts,
    sections: sectionCounts,
    terms,
    items: filtered.slice(0, limit).map((r) => {
      const [t, b, s, k, h] = meta[r.id];
      return { id: r.id, t, b, s, k, h, terms: r.terms, snip: texts ? snippet(texts[r.id], r.terms) : '' };
    }),
  };
}

onmessage = async (e) => {
  const { id, req } = e.data;
  await ready;
  postMessage({ type: 'result', id, res: run(req) });
};
