// Main-thread client for the search worker.
let worker;
let seq = 0;
const pending = new Map();
const listeners = new Set();
export const searchState = { ready: false, texts: false, count: 0 };

function ensure() {
  if (worker) return;
  worker = new Worker(new URL('./search-worker.js', import.meta.url), { type: 'module' });
  worker.onmessage = (e) => {
    const m = e.data;
    if (m.type === 'ready') Object.assign(searchState, { ready: true, count: m.count });
    if (m.type === 'texts') searchState.texts = true;
    if (m.type === 'result') {
      pending.get(m.id)?.(m.res);
      pending.delete(m.id);
    }
    if (m.type !== 'result') listeners.forEach((fn) => fn(searchState));
  };
}

export const warmSearch = ensure;
export const onSearchState = (fn) => listeners.add(fn);

export function search(req) {
  ensure();
  const id = ++seq;
  return new Promise((resolve) => {
    pending.set(id, resolve);
    worker.postMessage({ id, req });
  });
}
