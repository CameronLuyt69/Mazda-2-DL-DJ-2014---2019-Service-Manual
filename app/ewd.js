// Interactive wiring diagram viewer. Reads the original SVGs and wiring data
// maps; adds pan/zoom, wire tracing, connector details, fault-code
// highlights, find-in-diagram, a colour legend and the current-flow animation.
import { $, $$, esc, icon, gestures, isDark, store, toast } from './util.js';
import { data, hrefToHash } from './data.js';

const BASE = 'esicont/srvc/html/';
const SVGNS = 'http://www.w3.org/2000/svg';

// Wire colours used in the diagrams, with the codes from the manual's own
// legend (GI_ABB.html, which uses the same fills).
const WIRE_COLORS = {
  '#000000': ['B', 'Black', ''],
  '#6D4C33': ['BR', 'Brown', '6 2'],
  '#33FF00': ['G', 'Green', '1 2'],
  '#999999': ['GY', 'Gray', '8 2 1 2'],
  '#007FFF': ['L', 'Blue', '4 2'],
  '#99FF7F': ['LG', 'Light green', '1 2 4 2'],
  '#FF7F00': ['O', 'Orange', '2 2'],
  '#FFB3FF': ['P', 'Pink', '6 2 1 2 1 2'],
  '#FF0000': ['R', 'Red', ''],
  '#CCFFFF': ['SB', 'Sky blue', '3 1'],
  '#CB7F2E': ['BE', 'Beige', '5 1 1 1'],
  '#7F1AFF': ['V', 'Violet', '2 1'],
  '#FFFFFF': ['W', 'White', ''],
  '#FFFF00': ['Y', 'Yellow', '6 3'],
};

const fmtCode = (p) => (/^[PBCU][0-9A-F]{6}$/.test(p) ? `${p.slice(0, 5)}:${p.slice(5)}` : p);

export function renderEwd(view, { key, hl, cn, q, openLightbox }) {
  const circuit = data.ewd.circuits[key];
  const ac = new AbortController();
  const sig = { signal: ac.signal };
  const prefs = store.get('ewdPrefs', { panel: true, invert: false, patterns: false });
  // On phones the panel covers the diagram, so it opens only on demand.
  if (window.innerWidth <= 860) prefs.panel = false;

  view.innerHTML = `<div class="ewd" id="ewd">
    <div class="ewd-toolbar" role="toolbar" aria-label="Diagram tools">
      <div class="ewd-title" title="${esc(circuit.n)}">${esc(circuit.n.replace(/\s*\[[^\]]+\]$/, ''))}<small>${esc(key)}</small></div>
      <div class="ewd-find">${icon('search')}<input id="ewd-find" type="search" placeholder="Find in diagram" aria-label="Find in diagram" autocomplete="off"/><span class="count" id="ewd-find-count"></span></div>
      <span class="sep"></span>
      <button class="icon-btn" data-a="out" title="Zoom out (−)" aria-label="Zoom out">${icon('zoom-out')}</button>
      <button class="icon-btn" data-a="fit" title="Fit to screen (0)" aria-label="Fit to screen">${icon('fit')}</button>
      <button class="icon-btn" data-a="width" title="Fit to width" aria-label="Fit to width">${icon('one')}</button>
      <button class="icon-btn" data-a="in" title="Zoom in (+)" aria-label="Zoom in">${icon('zoom-in')}</button>
      <span class="sep"></span>
      ${circuit.flow ? `<button class="icon-btn" data-a="flow" title="Current flow animation" aria-label="Current flow animation">${icon('play')}</button>` : ''}
      <button class="icon-btn" data-a="patterns" aria-pressed="${prefs.patterns}" title="Colour-blind wire patterns" aria-label="Colour-blind wire patterns">${icon('swatch')}</button>
      <button class="icon-btn" data-a="invert" aria-pressed="${prefs.invert}" title="Dark diagram" aria-label="Dark diagram">${icon('moon')}</button>
      <button class="icon-btn" data-a="full" title="Full screen" aria-label="Full screen">${icon('fullscreen')}</button>
      <button class="icon-btn" data-a="print" title="Print current view" aria-label="Print current view">${icon('print')}</button>
      <button class="icon-btn" data-a="panel" aria-pressed="${prefs.panel}" title="Details panel" aria-label="Details panel">${icon('sidebar')}</button>
    </div>
    <div class="ewd-body">
      <div class="ewd-canvas" id="ewd-canvas" tabindex="0" aria-label="Wiring diagram. Use plus and minus to zoom, arrow keys to pan.">
        <div class="loading"><div class="spinner"></div></div>
        <div class="ewd-hint" id="ewd-hint">Click a wire to trace it · click a connector for pinout and location · scroll to zoom, drag to pan</div>
        <div class="minimap" id="minimap" aria-hidden="true"><img alt="" src="${BASE}svg/circuit/${circuit.f}"/><svg id="mm-svg" preserveAspectRatio="none"><rect class="mm-view"/></svg></div>
      </div>
      <aside class="ewd-panel" id="ewd-panel" ${prefs.panel ? '' : 'hidden'} aria-label="Diagram details"></aside>
    </div>
  </div>`;

  const root = $('#ewd', view);
  const canvas = $('#ewd-canvas', view);
  const panel = $('#ewd-panel', view);
  const mm = $('#minimap', view);
  canvas.classList.toggle('invert', prefs.invert);

  let svg;
  let content;
  let overlay;
  let vb0;
  const vb = { x: 0, y: 0, s: 1 }; // top-left in svg units, screen px per svg unit
  let fitS = 1;
  let wires = [];
  let selection = null; // { type, id }
  let findHits = [];
  let findIdx = 0;

  // ------------------------------------------------------------ load
  fetch(`${BASE}svg/circuit/${circuit.f}`, sig)
    .then((r) => r.text())
    .then((text) => {
      const clean = text.replace(/<!DOCTYPE[\s\S]*?\]>/, '').replace(/&ns_\w+;/g, 'http://ns.adobe.com/x');
      const doc = new DOMParser().parseFromString(clean, 'image/svg+xml');
      if (doc.querySelector('parsererror')) throw new Error('Diagram could not be parsed');
      svg = document.importNode(doc.documentElement, true);
      const v = (svg.getAttribute('viewBox') || `0 0 ${parseFloat(svg.getAttribute('width'))} ${parseFloat(svg.getAttribute('height'))}`)
        .split(/[\s,]+/)
        .map(Number);
      vb0 = { x: v[0], y: v[1], w: v[2], h: v[3] };
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      svg.removeAttribute('enable-background');
      svg.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', circuit.n);
      content = document.createElementNS(SVGNS, 'g');
      content.setAttribute('class', 'ewd-content');
      while (svg.firstChild) content.append(svg.firstChild);
      overlay = document.createElementNS(SVGNS, 'g');
      overlay.setAttribute('class', 'ewd-overlay');
      svg.append(content, overlay);
      $('.loading', canvas)?.remove();
      canvas.prepend(svg);
      $('#mm-svg', view).setAttribute('viewBox', `${vb0.x} ${vb0.y} ${vb0.w} ${vb0.h}`);
      setup();
      fit();
      if (hl) selectHighlight(hl, true);
      else if (cn) selectConnector(cn, true);
      if (q) {
        $('#ewd-find', view).value = q;
        runFind(q);
      }
      if (!hl && !cn) renderInfoPanel();
    })
    .catch((err) => {
      if (err.name === 'AbortError') return;
      canvas.innerHTML = `<p class="empty-note" style="margin:24px">Could not load this diagram: ${esc(err.message)}</p>`;
    });

  // ------------------------------------------------------------ view box
  function apply() {
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    svg.setAttribute('viewBox', `${vb.x} ${vb.y} ${W / vb.s} ${H / vb.s}`);
    const r = $('.mm-view', mm);
    r.setAttribute('x', vb.x);
    r.setAttribute('y', vb.y);
    r.setAttribute('width', W / vb.s);
    r.setAttribute('height', H / vb.s);
  }
  function fit(mode = 'all') {
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    fitS = Math.min(W / vb0.w, H / vb0.h) * 0.96;
    vb.s = mode === 'width' ? (W / vb0.w) * 0.98 : fitS;
    vb.x = vb0.x + vb0.w / 2 - W / vb.s / 2;
    vb.y = mode === 'width' ? vb0.y - 8 / vb.s : vb0.y + vb0.h / 2 - H / vb.s / 2;
    apply();
  }
  function zoomAt(f, cx, cy) {
    const r = canvas.getBoundingClientRect();
    const px = cx - r.left;
    const py = cy - r.top;
    const ns = Math.min(Math.max(vb.s * f, fitS * 0.5), fitS * 60);
    const sx = vb.x + px / vb.s;
    const sy = vb.y + py / vb.s;
    vb.s = ns;
    vb.x = sx - px / ns;
    vb.y = sy - py / ns;
    apply();
  }
  const zoomCenter = (f) => {
    const r = canvas.getBoundingClientRect();
    zoomAt(f, r.left + r.width / 2, r.top + r.height / 2);
  };
  function zoomTo(box, maxScale = 6) {
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    const pad = 40;
    const s = Math.min((W - pad * 2) / Math.max(box.w, 1), (H - pad * 2) / Math.max(box.h, 1), fitS * maxScale);
    vb.s = Math.max(s, fitS);
    vb.x = box.x + box.w / 2 - W / vb.s / 2;
    vb.y = box.y + box.h / 2 - H / vb.s / 2;
    apply();
  }
  // Bounding box of an element in root svg units.
  function bbox(el) {
    const r = el.getBoundingClientRect();
    const c = canvas.getBoundingClientRect();
    return { x: vb.x + (r.left - c.left) / vb.s, y: vb.y + (r.top - c.top) / vb.s, w: r.width / vb.s, h: r.height / vb.s };
  }
  function unionBox(els) {
    const bs = els.map(bbox).filter((b) => b.w || b.h);
    if (!bs.length) return null;
    const x = Math.min(...bs.map((b) => b.x));
    const y = Math.min(...bs.map((b) => b.y));
    return { x, y, w: Math.max(...bs.map((b) => b.x + b.w)) - x, h: Math.max(...bs.map((b) => b.y + b.h)) - y };
  }

  new ResizeObserver(() => svg && apply()).observe(canvas);
  gestures(canvas, {
    onPan: (dx, dy) => {
      vb.x -= dx / vb.s;
      vb.y -= dy / vb.s;
      apply();
    },
    onZoom: zoomAt,
    onTap: (target) => onTap(target),
  });
  canvas.addEventListener('dblclick', (e) => e.preventDefault());
  canvas.addEventListener(
    'keydown',
    (e) => {
      const step = 60 / vb.s;
      const k = e.key;
      if (k === '+' || k === '=') zoomCenter(1.4);
      else if (k === '-') zoomCenter(1 / 1.4);
      else if (k === '0') fit();
      else if (k === 'ArrowLeft') vb.x -= step;
      else if (k === 'ArrowRight') vb.x += step;
      else if (k === 'ArrowUp') vb.y -= step;
      else if (k === 'ArrowDown') vb.y += step;
      else if (k === 'Escape') clearSelection();
      else return;
      e.preventDefault();
      apply();
    },
    sig,
  );
  // Minimap: click or drag to move the view.
  const mmMove = (e) => {
    const r = mm.getBoundingClientRect();
    const sx = vb0.x + ((e.clientX - r.left) / r.width) * vb0.w;
    const sy = vb0.y + ((e.clientY - r.top) / r.height) * vb0.h;
    vb.x = sx - canvas.clientWidth / vb.s / 2;
    vb.y = sy - canvas.clientHeight / vb.s / 2;
    apply();
  };
  mm.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    mm.setPointerCapture(e.pointerId);
    mmMove(e);
    mm.onpointermove = mmMove;
  });
  mm.addEventListener('pointerup', () => (mm.onpointermove = null));
  mm.addEventListener('wheel', (e) => e.stopPropagation());

  // ------------------------------------------------------------ interactive layers
  function setup() {
    // Connector hotspots and links to other diagrams (LINK layer).
    $$('[id="connector"] > g[id^="CR-"]', content).forEach((g) => {
      g.classList.add('hit-conn');
      g.dataset.hit = 'conn';
      g.dataset.ids = g.id.slice(3).split(':CR-').join('|');
      $$('*', g).forEach((el) => el.setAttribute('pointer-events', 'all'));
    });
    $$('[id="circuit"] > g[id^="CR-"]', content).forEach((g) => {
      g.classList.add('hit-link');
      g.dataset.hit = 'link';
      g.dataset.ids = g.id.slice(3).split(':CR-').join('|');
      $$('*', g).forEach((el) => el.setAttribute('pointer-events', 'all'));
      const t = document.createElementNS(SVGNS, 'title');
      t.textContent = g.dataset.ids
        .split('|')
        .map((k) => data.ewd.circuits[k]?.n || k)
        .join('\n');
      g.prepend(t);
    });
    // Fault-code highlight groups are shown only when selected.
    const hlLayer = $('[id="HIGHLIGHT"]', content);
    if (hlLayer) hlLayer.style.display = 'none';

    // Wires: build geometry for tracing and add generous hit areas.
    const iro = $('[id="IRO"]', content);
    if (iro) {
      const hitLayer = document.createElementNS(SVGNS, 'g');
      hitLayer.setAttribute('class', 'wire-hits');
      $$('line, polyline, path', iro).forEach((el, i) => {
        const pts = pointsOf(el);
        if (pts.length < 2) return;
        const color = (el.getAttribute('stroke') || '').toUpperCase();
        if (el.hasAttribute('stroke-dasharray')) el.dataset.origDash = el.getAttribute('stroke-dasharray');
        wires.push({ el, pts, color, i });
        const hit = el.cloneNode();
        hit.removeAttribute('stroke-dasharray');
        hit.setAttribute('class', 'wirehit');
        hit.dataset.hit = 'wire';
        hit.dataset.i = String(wires.length - 1);
        hitLayer.append(hit);
      });
      // Wire hit lines are thin, so they sit on top: clicks inside a connector
      // or link box but off a wire still reach the box underneath.
      content.append(hitLayer);
    }
    applyPatterns(prefs.patterns);
  }

  function pointsOf(el) {
    const tag = el.tagName.toLowerCase();
    if (tag === 'line') return [[+el.getAttribute('x1'), +el.getAttribute('y1')], [+el.getAttribute('x2'), +el.getAttribute('y2')]];
    if (tag === 'polyline' || tag === 'polygon') {
      const n = (el.getAttribute('points') || '').trim().split(/[\s,]+/).map(Number);
      const pts = [];
      for (let i = 0; i + 1 < n.length; i += 2) pts.push([n[i], n[i + 1]]);
      return pts;
    }
    if (tag === 'path') {
      // Sample along the path so curves and arcs are covered too.
      try {
        const len = el.getTotalLength();
        const n = Math.min(40, Math.max(2, Math.ceil(len / 6)));
        return Array.from({ length: n + 1 }, (_, i) => {
          const p = el.getPointAtLength((len * i) / n);
          return [p.x, p.y];
        });
      } catch {
        return [];
      }
    }
    return [];
  }

  // Distance from point p to segment ab.
  function distSeg(p, a, b) {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const l2 = dx * dx + dy * dy;
    let t = l2 ? ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l2 : 0;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
  }
  function touches(w1, w2, tol = 0.9) {
    const ends = (w) => [w.pts[0], w.pts[w.pts.length - 1]];
    for (const p of ends(w1)) for (let i = 0; i + 1 < w2.pts.length; i++) if (distSeg(p, w2.pts[i], w2.pts[i + 1]) < tol) return true;
    for (const p of ends(w2)) for (let i = 0; i + 1 < w1.pts.length; i++) if (distSeg(p, w1.pts[i], w1.pts[i + 1]) < tol) return true;
    return false;
  }
  // All wire segments electrically joined to wire i (via shared ends and T-junctions).
  function traceFrom(i) {
    const seen = new Set([i]);
    const queue = [i];
    while (queue.length) {
      const w = wires[queue.shift()];
      wires.forEach((o, j) => {
        if (!seen.has(j) && touches(w, o)) {
          seen.add(j);
          queue.push(j);
        }
      });
    }
    return [...seen].map((j) => wires[j]);
  }

  // ------------------------------------------------------------ selection
  function clearSelection(keepPanel) {
    selection = null;
    svg?.classList.remove('dimmed');
    if (overlay) overlay.replaceChildren();
    $$('.hit-conn.sel', content || canvas).forEach((g) => g.classList.remove('sel'));
    if (!keepPanel) renderInfoPanel();
  }
  function showTrace(els, { flow = true } = {}) {
    overlay.replaceChildren();
    const g = document.createElementNS(SVGNS, 'g');
    g.setAttribute('class', `trace${flow ? ' flow' : ''}`);
    for (const el of els) {
      const c = el.cloneNode(true);
      c.removeAttribute?.('id');
      g.append(c);
    }
    overlay.append(g);
    svg.classList.add('dimmed');
  }

  function onTap(target) {
    const hit = target.closest?.('[data-hit]');
    if (!hit) {
      if (selection) clearSelection();
      return;
    }
    const kind = hit.dataset.hit;
    if (kind === 'wire') selectWire(+hit.dataset.i);
    else if (kind === 'conn') {
      const ids = hit.dataset.ids.split('|');
      selectConnector(ids[0], false, hit, ids);
    } else if (kind === 'link') {
      const ids = hit.dataset.ids.split('|').filter((k) => data.ewd.circuits[k]);
      if (ids.length === 1) location.hash = hrefToHash(`e:${ids[0]}`);
      else if (ids.length) renderLinksPanel(ids);
    }
  }

  function selectWire(i) {
    const set = traceFrom(i);
    selection = { type: 'wire', id: i };
    showTrace(set.map((w) => w.el));
    const colors = [...new Set(set.map((w) => w.color))];
    showPanel(`
      <div class="panel-head"><div><h3>Wire trace</h3><div class="muted">${set.length} connected segment${set.length === 1 ? '' : 's'}</div></div>
        <button class="icon-btn" data-p="clear" aria-label="Clear">${icon('x')}</button></div>
      <h4>Wire colours in this circuit</h4>
      <div class="legend">${colors.map(legendItem).join('')}</div>
      <p class="muted" style="margin-top:16px">The trace follows connected wire segments, including splices and pass-through pins. Press <kbd>Esc</kbd> or click empty space to clear.</p>
      <button class="btn sm" data-p="zoomsel">${icon('target')} Zoom to trace</button>`);
  }

  function selectConnector(id, zoom, hitEl, ids) {
    clearSelection(true);
    const g = hitEl || $$('.hit-conn', content).find((x) => x.dataset.ids.split('|').includes(id));
    if (g) {
      g.classList.add('sel');
      if (zoom) zoomTo(bbox(g), 4);
    }
    selection = { type: 'conn', id };
    renderConnectorPanel(id, ids);
  }

  function selectHighlight(p, zoom) {
    const grp = $(`[id="HIGHLIGHT"] > [id="${p}"]`, content);
    if (!grp) {
      toast(`Fault code ${fmtCode(p)} has no highlight on this diagram`);
      renderInfoPanel();
      return;
    }
    clearSelection(true);
    selection = { type: 'hl', id: p };
    showTrace([...grp.children], { flow: true });
    if (zoom) {
      const box = unionBox($$('.trace > *', overlay));
      if (box) zoomTo(box, 3);
    }
    renderInfoPanel();
  }

  // ------------------------------------------------------------ panels
  function showPanel(html) {
    panel.innerHTML = html;
    if (panel.hidden) togglePanel(true);
  }
  function togglePanel(on = panel.hidden) {
    panel.hidden = !on;
    prefs.panel = on;
    if (window.innerWidth > 860) store.set('ewdPrefs', prefs);
    $('[data-a="panel"]', root).setAttribute('aria-pressed', String(on));
    requestAnimationFrame(() => svg && apply());
  }

  function legendItem(hex) {
    const [code, name, dash] = WIRE_COLORS[hex] || ['?', hex, ''];
    const style = prefs.patterns && dash ? `background:repeating-linear-gradient(90deg, ${hex} 0 4px, transparent 4px 6px)` : `background:${hex}`;
    return `<span><i style="${style}"></i><b>${code}</b>${esc(name)}</span>`;
  }

  function renderInfoPanel() {
    if (!svg) return;
    const conns = Object.entries(data.ewd.connectors).filter(([, v]) => v.c.includes(key));
    const hls = $$('[id="HIGHLIGHT"] > g[id]', content).map((g) => g.id);
    const links = [...new Set($$('.hit-link', content).flatMap((g) => g.dataset.ids.split('|')))].filter((k) => data.ewd.circuits[k] && k !== key);
    const colors = [...new Set(wires.map((w) => w.color))].sort((a, b) => (WIRE_COLORS[a]?.[0] || '').localeCompare(WIRE_COLORS[b]?.[0] || ''));
    panel.innerHTML = `
      <h3>${esc(circuit.n)}</h3>
      <div class="muted">Diagram ${esc(key)}</div>
      ${
        hls.length
          ? `<h4>Fault code circuits (${hls.length})</h4>
        <ul class="panel-links">${hls
          .map((p) => `<li><button data-hl="${p}" class="${selection?.id === p ? 'active' : ''}"><span class="code">${fmtCode(p)}</span><span style="margin-left:auto" class="muted">highlight</span></button></li>`)
          .join('')}</ul>
        ${selection?.type === 'hl' ? `<p style="margin:8px 0 0"><a class="btn sm" href="#/search?q=${encodeURIComponent(selection.id.slice(0, 5))}">${icon('search')} Find ${fmtCode(selection.id)} procedure</a></p>` : ''}`
          : ''
      }
      ${
        conns.length
          ? `<h4>Connectors (${conns.length})</h4><ul class="panel-links">${conns
              .map(([id, v]) => `<li><button data-cn="${esc(id)}"><span class="code">${esc(id)}</span><span>${esc(v.n)}</span></button></li>`)
              .join('')}</ul>`
          : ''
      }
      ${
        links.length
          ? `<h4>Related diagrams</h4><ul class="panel-links">${links
              .map((k) => `<li><a href="${hrefToHash(`e:${k}`)}">${icon('bolt')}<span>${esc(data.ewd.circuits[k].n)}</span></a></li>`)
              .join('')}</ul>`
          : ''
      }
      ${colors.length ? `<h4>Wire colours</h4><div class="legend">${colors.map(legendItem).join('')}</div>` : ''}
      <h4>Original viewer</h4>
      <ul class="panel-links"><li><a href="${BASE}${circuit.f.replace('.svg', '.html')}" target="_blank" rel="noopener">${icon('external')}<span>Open in legacy wiring viewer</span></a></li></ul>`;
  }

  function renderLinksPanel(ids) {
    showPanel(`<div class="panel-head"><div><h3>Continues on</h3><div class="muted">This wire continues on ${ids.length} diagrams</div></div>
      <button class="icon-btn" data-p="clear" aria-label="Close">${icon('x')}</button></div>
      <ul class="panel-links" style="margin-top:12px">${ids.map((k) => `<li><a href="${hrefToHash(`e:${k}`)}">${icon('bolt')}<span>${esc(data.ewd.circuits[k].n)}</span></a></li>`).join('')}</ul>`);
  }

  function renderConnectorPanel(id, ids = [id]) {
    const info = data.ewd.connectors[id];
    const name = info?.n || (/^G\d/.test(id) ? 'Ground point' : /^C-\d/.test(id) ? 'Joint connector' : 'Connector');
    const others = (info?.c || []).filter((k) => k !== key);
    const loc = info?.loc || [];
    showPanel(`
      <div class="panel-head"><div><h3>${esc(name)}</h3><div class="muted"><span class="code">${esc(id)}</span>${ids.length > 1 ? ` · also ${ids.slice(1).map(esc).join(', ')}` : ''}</div></div>
        <button class="icon-btn" data-p="clear" aria-label="Close">${icon('x')}</button></div>
      ${info?.svg ? `<h4>Connector face</h4><div class="panel-figure" data-zoom="${BASE}svg/connector/${info.svg}"><img alt="Connector ${esc(id)} pin layout" src="${BASE}svg/connector/${info.svg}"/></div>` : ''}
      ${loc.length ? `<h4>Location on vehicle</h4>${loc.map((f) => `<div class="panel-figure loc-figure" data-loc="${esc(f)}" style="margin-bottom:8px"><div class="spinner" style="margin:16px auto"></div></div>`).join('')}` : ''}
      ${info?.v ? `<h4>Terminal voltages</h4><ul class="panel-links"><li><a href="${hrefToHash(`p:${BASE}${info.v}`)}">${icon('zap')}<span>Terminal voltage table</span></a></li></ul>` : ''}
      ${others.length ? `<h4>Also appears in</h4><ul class="panel-links">${others.map((k) => `<li><a href="${hrefToHash(`e:${k}::${id}`)}">${icon('bolt')}<span>${esc(data.ewd.circuits[k]?.n || k)}</span></a></li>`).join('')}</ul>` : ''}
      <p style="margin-top:14px"><button class="btn sm" data-p="zoomsel">${icon('target')} Zoom to connector</button></p>`);
    // Location drawings are inlined so the connector's marker can blink.
    $$('[data-loc]', panel).forEach((box) => {
      fetch(`${BASE}svg/location/highlight/${box.dataset.loc}`, sig)
        .then((r) => r.text())
        .then((t) => {
          box.innerHTML = t.replace(/<\?xml[\s\S]*?\?>|<!DOCTYPE[\s\S]*?\]>|<!DOCTYPE[^>]*>/g, '').replace(/&ns_\w+;/g, 'http://ns.adobe.com/x');
          const s = $('svg', box);
          s?.removeAttribute('width');
          s?.removeAttribute('height');
          const mark = box.querySelector(`[id="LO-${CSS.escape(id)}"]`);
          if (mark) mark.classList.add('on');
          else box.insertAdjacentHTML('beforeend', '<div class="muted" style="padding:4px">Marker not shown on this view</div>');
        })
        .catch(() => (box.innerHTML = '<div class="muted">Location drawing unavailable</div>'));
      box.onclick = () => openLightbox([`${BASE}svg/location/highlight/${box.dataset.loc}`], 0);
    });
  }

  panel.addEventListener(
    'click',
    (e) => {
      const b = e.target.closest('[data-hl],[data-cn],[data-p],[data-zoom]');
      if (!b) return;
      if (b.dataset.hl) {
        if (selection?.id === b.dataset.hl) clearSelection();
        else selectHighlight(b.dataset.hl, true);
      } else if (b.dataset.cn) selectConnector(b.dataset.cn, true);
      else if (b.dataset.zoom) openLightbox([b.dataset.zoom], 0);
      else if (b.dataset.p === 'clear') clearSelection();
      else if (b.dataset.p === 'zoomsel') {
        const els = selection?.type === 'conn' ? $$('.hit-conn.sel', content) : $$('.trace > *', overlay);
        const box = unionBox(els);
        if (box) zoomTo(box, 4);
      }
    },
    sig,
  );

  // ------------------------------------------------------------ find in diagram
  function runFind(qs) {
    overlay && $$('.find-ring', overlay).forEach((r) => r.remove());
    findHits = [];
    findIdx = 0;
    const count = $('#ewd-find-count', view);
    const s = qs.trim().toLowerCase();
    if (!s || !svg) {
      count.textContent = '';
      return;
    }
    const texts = $$('text', content).filter((t) => t.textContent.toLowerCase().includes(s));
    const conns = $$('.hit-conn', content).filter((g) =>
      g.dataset.ids.split('|').some((id) => id.toLowerCase().includes(s) || (data.ewd.connectors[id]?.n || '').toLowerCase().includes(s)),
    );
    findHits = [...conns, ...texts];
    count.textContent = findHits.length ? `1/${findHits.length}` : '0';
    for (const el of findHits) {
      const b = bbox(el);
      const r = document.createElementNS(SVGNS, 'rect');
      r.setAttribute('class', 'find-ring');
      r.setAttribute('x', b.x - 2);
      r.setAttribute('y', b.y - 2);
      r.setAttribute('width', b.w + 4);
      r.setAttribute('height', b.h + 4);
      r.setAttribute('rx', 2);
      overlay.append(r);
    }
    if (findHits.length) focusFind(0);
  }
  function focusFind(i) {
    findIdx = (i + findHits.length) % findHits.length;
    $('#ewd-find-count', view).textContent = `${findIdx + 1}/${findHits.length}`;
    zoomTo(bbox(findHits[findIdx]), 5);
  }
  const findInput = $('#ewd-find', view);
  let findTimer;
  findInput.addEventListener('input', () => {
    clearTimeout(findTimer);
    findTimer = setTimeout(() => runFind(findInput.value), 160);
  });
  findInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && findHits.length) {
      e.preventDefault();
      focusFind(findIdx + (e.shiftKey ? -1 : 1));
    }
    if (e.key === 'Escape') {
      findInput.value = '';
      runFind('');
    }
  });

  // ------------------------------------------------------------ toolbar
  function applyPatterns(on) {
    for (const w of wires) {
      const dash = on ? WIRE_COLORS[w.color]?.[2] : '';
      if (dash) w.el.setAttribute('stroke-dasharray', dash);
      else if (w.el.dataset.origDash != null) w.el.setAttribute('stroke-dasharray', w.el.dataset.origDash);
      else w.el.removeAttribute('stroke-dasharray');
    }
  }
  $('.ewd-toolbar', root).addEventListener(
    'click',
    (e) => {
      const b = e.target.closest('[data-a]');
      if (!b || !svg) return;
      const a = b.dataset.a;
      if (a === 'in') zoomCenter(1.4);
      if (a === 'out') zoomCenter(1 / 1.4);
      if (a === 'fit') fit();
      if (a === 'width') fit('width');
      if (a === 'panel') togglePanel();
      if (a === 'invert') {
        prefs.invert = !prefs.invert;
        canvas.classList.toggle('invert', prefs.invert);
        b.setAttribute('aria-pressed', String(prefs.invert));
        store.set('ewdPrefs', prefs);
        if (prefs.invert && !isDark()) toast('Dark diagram applies when dark mode is on');
      }
      if (a === 'patterns') {
        prefs.patterns = !prefs.patterns;
        applyPatterns(prefs.patterns);
        b.setAttribute('aria-pressed', String(prefs.patterns));
        store.set('ewdPrefs', prefs);
        if (selection?.type !== 'wire' && selection?.type !== 'conn') renderInfoPanel();
        toast(prefs.patterns ? 'Wire colours now also shown as dash patterns' : 'Wire patterns off');
      }
      if (a === 'full') {
        if (document.fullscreenElement) document.exitFullscreen();
        else root.requestFullscreen?.();
      }
      if (a === 'print') window.print();
      if (a === 'flow') openFlow();
    },
    sig,
  );
  document.addEventListener('fullscreenchange', () => requestAnimationFrame(() => svg && apply()), sig);

  // ------------------------------------------------------------ current flow animation
  function openFlow() {
    const dlg = document.createElement('dialog');
    dlg.className = 'flow-dialog';
    dlg.innerHTML = `<div class="flow-bar"><strong>Current flow — ${esc(circuit.n)}</strong>
      <button class="icon-btn" data-f="pause" aria-label="Pause" title="Pause">${icon('pause')}</button>
      <button class="icon-btn" data-f="step" aria-label="Step one frame" title="Step one frame">${icon('step')}</button>
      <button class="icon-btn" data-f="close" aria-label="Close">${icon('x')}</button></div>
      <iframe title="Current flow animation" src="${BASE}${circuit.flow}"></iframe>`;
    document.body.append(dlg);
    dlg.showModal();
    const frame = $('iframe', dlg);
    const ticker = () => frame.contentWindow?.createjs?.Ticker;
    dlg.addEventListener('click', (e) => {
      const b = e.target.closest('[data-f]');
      if (!b) return;
      const t = ticker();
      if (b.dataset.f === 'close') dlg.close();
      if (!t) return;
      if (b.dataset.f === 'pause') {
        t.paused = !t.paused;
        b.innerHTML = icon(t.paused ? 'play' : 'pause');
        b.setAttribute('aria-label', t.paused ? 'Play' : 'Pause');
      }
      if (b.dataset.f === 'step') {
        t.paused = true;
        $('[data-f="pause"]', dlg).innerHTML = icon('play');
        const stage = frame.contentWindow.stage;
        if (stage) {
          stage.tickEnabled = true;
          stage.update({ paused: false, delta: 1000 / (t.framerate || 24) });
        }
      }
    });
    dlg.addEventListener('close', () => dlg.remove());
  }

  return () => {
    ac.abort();
    if (document.fullscreenElement) document.exitFullscreen?.();
  };
}
