// Shared by scripts/build-data.mjs (prebuilds the index) and the search worker
// (loads it). Index options must match on both sides.

export const INDEX_OPTIONS = {
  idField: 'id',
  fields: ['t', 'codes', 'b', 'x'],
};

// "P0031:00", "p0031-00" and "P0031 00" all become the indexed code "P003100".
export function normalizeQuery(q) {
  return q
    .trim()
    .replace(/\b([bcpu][0-9a-f]{4})[:\-\s]?([0-9a-f]{2})\b/gi, (_, a, b) => `${a}${b}`.toUpperCase())
    .replace(/\s+/g, ' ');
}

// Everyday names mapped to the terms the manual uses; a query word matches
// either form.
export const SYNONYMS = {
  alternator: 'generator',
  ecu: 'pcm',
  ecm: 'pcm',
  aircon: 'a/c',
  ac: 'a/c',
  o2: 'oxygen',
  lambda: 'a/f',
  headlamp: 'headlight',
  indicator: 'turn',
  blinker: 'turn',
  gearbox: 'transaxle',
  transmission: 'transaxle',
  tranny: 'transaxle',
  cambelt: 'timing',
  tyre: 'tire',
  tyres: 'tire',
  bonnet: 'hood',
  boot: 'liftgate',
  windscreen: 'windshield',
  immobiliser: 'immobilizer',
};

export const isCodeQuery = (q) => /^[bcpu][0-9a-f]{4}([0-9a-f]{2})?$/i.test(q.trim());
