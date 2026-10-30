export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ESC[c]);

export const icon = (name, cls = '') => `<svg class="${cls}" aria-hidden="true"><use href="app/icons.svg#${name}"/></svg>`;

export const KIND_LABEL = {
  procedure: 'Procedure',
  dtc: 'DTC',
  spec: 'Spec',
  wiring: 'Wiring',
  connector: 'Connector',
  description: 'Description',
  info: 'General info',
};
export const KIND_ICON = {
  procedure: 'wrench',
  dtc: 'alert',
  spec: 'table',
  wiring: 'bolt',
  connector: 'plug',
  description: 'book',
  info: 'info',
};

// localStorage can be missing or throw (private mode, blocked storage).
export const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v == null ? fallback : JSON.parse(v);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  },
};

export function debounce(fn, ms) {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), ms);
  };
}

let toastTimer;
export function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

export function isDark() {
  const t = document.documentElement.dataset.theme;
  if (t) return t === 'dark';
  return matchMedia('(prefers-color-scheme: dark)').matches;
}

// Wraps occurrences of `terms` inside text nodes of `root` with <mark>.
export function highlightTerms(root, terms, cls = 'q-hit', max = 400) {
  const words = [...new Set(terms.map((t) => t.trim()).filter((t) => t.length > 1))];
  if (!words.length) return [];
  const re = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const doc = root.ownerDocument || document;
  const walker = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.parentNode && !/^(SCRIPT|STYLE|MARK|TITLE)$/.test(n.parentNode.nodeName) && re.test(n.nodeValue)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT,
  });
  const nodes = [];
  while (walker.nextNode() && nodes.length < max) nodes.push(walker.currentNode);
  const marks = [];
  for (const node of nodes) {
    const frag = doc.createDocumentFragment();
    let last = 0;
    const s = node.nodeValue;
    re.lastIndex = 0;
    for (const m of s.matchAll(re)) {
      if (m.index > last) frag.append(s.slice(last, m.index));
      const mark = doc.createElement('mark');
      mark.className = cls;
      mark.textContent = m[0];
      frag.append(mark);
      marks.push(mark);
      last = m.index + m[0].length;
    }
    frag.append(s.slice(last));
    node.replaceWith(frag);
  }
  return marks;
}

// Pointer/wheel gestures shared by the diagram viewer and the image lightbox.
// Calls onPan(dx, dy) in screen px and onZoom(factor, clientX, clientY).
export function gestures(el, { onPan, onZoom, onTap }) {
  const pts = new Map();
  let lastDist = 0;
  let moved = 0;
  let downAt = null;

  el.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      if (e.ctrlKey || !e.shiftKey) onZoom(Math.exp(-delta * 0.0015), e.clientX, e.clientY);
      else onPan(-e.deltaY, 0);
    },
    { passive: false },
  );
  el.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    moved = 0;
    downAt = { x: e.clientX, y: e.clientY, target: e.target };
    if (pts.size === 2) lastDist = dist();
  });
  el.addEventListener('pointermove', (e) => {
    const p = pts.get(e.pointerId);
    if (!p) return;
    const dx = e.clientX - p.x;
    const dy = e.clientY - p.y;
    moved += Math.abs(dx) + Math.abs(dy);
    if (moved > 4 && !el.hasPointerCapture(e.pointerId)) el.setPointerCapture(e.pointerId);
    if (pts.size === 1) {
      if (moved > 4) {
        el.classList.add('dragging');
        onPan(dx, dy);
      }
    } else if (pts.size === 2) {
      p.x = e.clientX;
      p.y = e.clientY;
      const d = dist();
      const c = center();
      if (lastDist) onZoom(d / lastDist, c.x, c.y);
      onPan(dx / 2, dy / 2);
      lastDist = d;
      return;
    }
    p.x = e.clientX;
    p.y = e.clientY;
  });
  const up = (e) => {
    if (!pts.has(e.pointerId)) return;
    pts.delete(e.pointerId);
    el.classList.remove('dragging');
    if (pts.size < 2) lastDist = 0;
    if (moved <= 4 && downAt && onTap && e.type === 'pointerup') onTap(downAt.target, e);
  };
  el.addEventListener('pointerup', up);
  el.addEventListener('pointercancel', up);
  el.addEventListener('dblclick', (e) => onZoom(e.shiftKey ? 0.5 : 2, e.clientX, e.clientY));

  function dist() {
    const [a, b] = [...pts.values()];
    return Math.hypot(a.x - b.x, a.y - b.y);
  }
  function center() {
    const [a, b] = [...pts.values()];
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  }
}
