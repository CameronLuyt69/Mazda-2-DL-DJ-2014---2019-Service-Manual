// Loads the generated TOC and wiring data and indexes it for navigation.

export const data = {
  sections: [], // [{ id, label, icon, c }]
  nodes: new Map(), // nodeId -> node; node = { id, t, h?, c?, parent, section }
  byHref: new Map(), // data href ("p:...", "e:key[:hl]") -> nodeId
  leaves: new Map(), // sectionId -> [nodeId] in reading order
  ewd: null, // { circuits, connectors }
  fileToCircuit: new Map(), // "MZ2UKS0112_1" -> "0112-1"
};

export async function loadData() {
  const [toc, ewd] = await Promise.all([
    fetch('app/data/toc.json').then((r) => r.json()),
    fetch('app/data/ewd.json').then((r) => r.json()),
  ]);
  data.ewd = ewd;
  for (const [key, c] of Object.entries(ewd.circuits)) data.fileToCircuit.set(c.f.replace(/\.svg$/, ''), key);

  toc.forEach((sec, si) => {
    const leaves = [];
    const code = (sec.code = sec.id);
    const walk = (node, id, parent) => {
      node.id = id;
      node.parent = parent;
      node.section = code;
      data.nodes.set(id, node);
      if (node.c) node.c.forEach((child, i) => walk(child, `${id}.${i}`, id));
      else if (node.h) {
        leaves.push(id);
        if (!data.byHref.has(node.h)) data.byHref.set(node.h, id);
        // Also register the plain circuit for DTC-highlight entries.
        const e = node.h.match(/^e:([^:]+)/);
        if (e && !data.byHref.has(`e:${e[1]}`)) data.byHref.set(`e:${e[1]}`, id);
      }
    };
    walk(sec, String(si), null);
    sec.t = sec.label;
    data.leaves.set(code, leaves);
    data.sections.push(sec);
  });
}

export const getNode = (id) => data.nodes.get(id);
export const sectionById = (code) => data.sections.find((s) => s.code === code);

export function ancestors(id) {
  const out = [];
  let n = getNode(id);
  while (n) {
    out.unshift(n);
    n = n.parent != null ? getNode(n.parent) : null;
  }
  return out;
}

// ------------------------------------------------------------------ routes
// Data hrefs (from the build) <-> app hash routes.
export function hrefToHash(h, extra = {}) {
  const [kind, ...rest] = h.split(':');
  const params = new URLSearchParams();
  let path;
  if (kind === 'p') path = `#/p/${rest.join(':')}`;
  else if (kind === 'f') path = `#/f/${rest.join(':')}`;
  else if (kind === 'e') {
    const [key, hl, cn] = rest;
    path = `#/e/${key}`;
    if (hl) params.set('hl', hl);
    if (cn) params.set('cn', cn);
  } else path = '#/';
  for (const [k, v] of Object.entries(extra)) if (v) params.set(k, v);
  const qs = params.toString();
  return qs ? `${path}?${qs}` : path;
}

export function parseHash(hash = location.hash) {
  const raw = hash.replace(/^#\/?/, '');
  const qi = raw.indexOf('?');
  const pathPart = qi >= 0 ? raw.slice(0, qi) : raw;
  const params = new URLSearchParams(qi >= 0 ? raw.slice(qi + 1) : '');
  const [view, ...rest] = pathPart.split('/');
  const arg = decodeURIComponent(rest.join('/'));
  return { view: view || 'home', arg, params };
}

// The data href the current route corresponds to (for TOC lookups).
export function routeHref(route) {
  if (route.view === 'p') return `p:${route.arg}`;
  if (route.view === 'f') return `f:${route.arg}`;
  if (route.view === 'e') {
    const hl = route.params.get('hl');
    return `e:${route.arg}${hl ? ':' + hl : ''}`;
  }
  return null;
}

// Converts a link found inside an original manual page into an app hash.
export function legacyUrlToHash(url) {
  const base = new URL('.', location.href);
  if (url.origin !== location.origin || !url.pathname.startsWith(base.pathname)) return null;
  const rel = decodeURIComponent(url.pathname.slice(base.pathname.length));
  const file = rel.split('/').pop();
  const anchor = url.hash ? url.hash.slice(1) : '';
  const go = file.match(/^(MZ2UKS[0-9A-Z]+_[0-9A-Za-z]+?)(?:_([PBCU][0-9A-F]{6}))?(?:_GO)?\.html$/);
  if (go && data.fileToCircuit.has(go[1])) return hrefToHash(`e:${data.fileToCircuit.get(go[1])}${go[2] ? ':' + go[2] : ''}`);
  if (/\.pdf$/i.test(file)) return `#/f/${rel}`;
  if (/\.html?$/i.test(file)) return hrefToHash(`p:${rel.replace(/_GO\.html$/, '.html')}`, { a: anchor });
  return null;
}
