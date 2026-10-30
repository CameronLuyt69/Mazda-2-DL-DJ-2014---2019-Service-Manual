// Smoke test: starts the local server and checks that the app, its data and
// every file the contents tree and wiring data point to are served.
// Usage: node scripts/smoke-test.mjs

import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8790 + Math.floor(Math.random() * 100);
const base = `http://127.0.0.1:${PORT}/`;

const server = spawn(process.execPath, ['serve.mjs', String(PORT)], { cwd: ROOT, env: { ...process.env, NO_OPEN: '1' } });
const failures = [];
const check = (ok, msg) => {
  if (!ok) failures.push(msg);
};

try {
  await new Promise((resolve, reject) => {
    server.stdout.on('data', (d) => d.toString().includes('running at') && resolve());
    server.on('exit', () => reject(new Error('server exited')));
    setTimeout(() => reject(new Error('server did not start')), 10000);
  });

  const head = async (rel) => (await fetch(base + rel.split('/').map(encodeURIComponent).join('/'), { method: 'HEAD' })).status;

  for (const f of ['index.html', 'app/main.js', 'app/ewd.js', 'app/search-worker.js', 'app/styles.css', 'app/content.css', 'app/icons.svg', 'app/vendor/minisearch.mjs', 'Start here.htm']) {
    check((await head(f)) === 200, `missing ${f}`);
  }

  const toc = await (await fetch(base + 'app/data/toc.json')).json();
  const ewd = await (await fetch(base + 'app/data/ewd.json')).json();
  const meta = await (await fetch(base + 'app/data/search-meta.json')).json();
  check(toc.length === 12, `expected 12 sections, got ${toc.length}`);
  check(Object.keys(ewd.circuits).length === 134, `expected 134 circuits, got ${Object.keys(ewd.circuits).length}`);
  check(meta.length > 5000, `search index looks small: ${meta.length} docs`);

  // Every page, PDF and diagram the contents tree links to must exist.
  const hrefs = new Set();
  const walk = (n) => (n.c ? n.c.forEach(walk) : n.h && hrefs.add(n.h));
  toc.forEach(walk);
  const targets = new Set();
  for (const h of hrefs) {
    const [kind, ...rest] = h.split(':');
    if (kind === 'p' || kind === 'f') targets.add(rest.join(':'));
    else if (kind === 'e') check(ewd.circuits[rest[0]], `TOC links unknown circuit ${rest[0]}`);
  }
  for (const c of Object.values(ewd.circuits)) {
    targets.add(`esicont/srvc/html/svg/circuit/${c.f}`);
    if (c.flow) targets.add(`esicont/srvc/html/${c.flow}`);
  }
  for (const c of Object.values(ewd.connectors)) {
    if (c.svg) targets.add(`esicont/srvc/html/svg/connector/${c.svg}`);
    for (const l of c.loc) targets.add(`esicont/srvc/html/svg/location/highlight/${l}`);
  }
  const list = [...targets];
  let missing = 0;
  for (let i = 0; i < list.length; i += 32) {
    const codes = await Promise.all(list.slice(i, i + 32).map(head));
    codes.forEach((code, j) => {
      if (code !== 200) {
        missing++;
        if (missing <= 10) failures.push(`not served (${code}): ${list[i + j]}`);
      }
    });
  }
  console.log(`Checked ${hrefs.size} contents links and ${list.length} files.`);
  if (missing > 10) failures.push(`…and ${missing - 10} more missing files`);
} catch (e) {
  failures.push(e.message);
} finally {
  server.kill();
}

if (failures.length) {
  console.error(`FAILED:\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log('All smoke checks passed.');
