import { $, $$, esc, icon, store, debounce, toast, isDark, highlightTerms, gestures, KIND_LABEL, KIND_ICON } from './util.js';
import { data, loadData, getNode, sectionById, ancestors, hrefToHash, parseHash, routeHref, legacyUrlToHash } from './data.js';
import { search, warmSearch, onSearchState, searchState } from './search.js';

const view = $('#view');
const crumbsEl = $('#crumbs');
const actionsEl = $('#viewbar-actions');
const tocEl = $('#toc');
const sectionSelect = $('#section-select');

const state = {
  section: store.get('section', 'S01'),
  route: null,
  nodeId: null,
  cleanup: null,
};

// ================================================================= theme
function applyTheme() {
  document.documentElement.classList.toggle('is-dark', isDark());
  const frame = $('.page-frame');
  frame?.contentDocument?.documentElement.classList.toggle('dark', isDark());
  window.dispatchEvent(new Event('themechange'));
}
function toggleTheme() {
  const next = isDark() ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  store.set('theme', next);
  applyTheme();
}
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

// ================================================================= favourites + recent
const favs = () => store.get('favs', []);
const recent = () => store.get('recent', []);
const isFav = (hash) => favs().some((f) => f.hash === hash);
function toggleFav(entry) {
  const list = favs();
  const i = list.findIndex((f) => f.hash === entry.hash);
  if (i >= 0) list.splice(i, 1);
  else list.unshift(entry);
  store.set('favs', list.slice(0, 100));
  toast(i >= 0 ? 'Removed from favourites' : 'Added to favourites');
  return i < 0;
}
function pushRecent(entry) {
  const list = recent().filter((r) => r.hash !== entry.hash);
  list.unshift({ ...entry, at: Date.now() });
  store.set('recent', list.slice(0, 30));
}
const currentEntry = () => {
  const node = state.nodeId && getNode(state.nodeId);
  const crumbs = node ? ancestors(node.id).slice(0, -1).map((n) => n.t) : [];
  return {
    hash: location.hash.replace(/[?&]q=[^&]*/, '').replace(/\?$/, ''),
    t: state.title || node?.t || 'Page',
    b: crumbs.join(' › '),
    k: state.route.view,
  };
};

// ================================================================= sections + TOC
function renderSectionSelect() {
  sectionSelect.innerHTML = data.sections
    .map((s) => `<option value="${s.code}">${esc(s.label)} (${data.leaves.get(s.code).length})</option>`)
    .join('');
  sectionSelect.value = state.section;
  sectionSelect.addEventListener('change', () => {
    setSection(sectionSelect.value);
    $('#toc-filter').value = '';
    renderTree();
    tocEl.querySelector('.toc-row')?.focus();
  });
}

function setSection(code) {
  if (!sectionById(code)) return;
  state.section = code;
  sectionSelect.value = code;
  store.set('section', code);
}

function rowHtml(node, level, pos, size) {
  const common = `role="treeitem" aria-level="${level}" aria-posinset="${pos}" aria-setsize="${size}" tabindex="-1" data-id="${node.id}"`;
  if (node.c) {
    return `<li role="none"><button class="toc-row is-folder" ${common} aria-expanded="false">${icon('chevron-right', 'tw')}<span>${esc(node.t)}</span></button></li>`;
  }
  return `<li role="none"><a class="toc-row" ${common} href="${hrefToHash(node.h)}"><span class="leaf-dot"></span><span>${esc(node.t)}</span></a></li>`;
}

function renderChildren(node, level) {
  return `<ul role="${level === 1 ? 'none' : 'group'}">${node.c.map((c, i) => rowHtml(c, level, i + 1, node.c.length)).join('')}</ul>`;
}

function renderTree() {
  const sec = sectionById(state.section);
  tocEl.innerHTML = renderChildren(sec, 1);
  const first = tocEl.querySelector('.toc-row');
  if (first) first.tabIndex = 0;
  markCurrent();
}

function expand(row, open = true) {
  if (!row || !row.classList.contains('is-folder')) return;
  const li = row.parentElement;
  if (open && !li.querySelector('ul')) {
    const node = getNode(row.dataset.id);
    li.insertAdjacentHTML('beforeend', renderChildren(node, +row.getAttribute('aria-level') + 1));
  }
  row.setAttribute('aria-expanded', String(open));
  const ul = li.querySelector('ul');
  if (ul) ul.hidden = !open;
}

function revealInTree(nodeId, scroll = true) {
  const node = getNode(nodeId);
  if (!node) return;
  if (node.section !== state.section || $('#toc-filter').value) {
    setSection(node.section);
    $('#toc-filter').value = '';
    renderTree();
  }
  for (const a of ancestors(nodeId).slice(1, -1)) expand(tocEl.querySelector(`[data-id="${a.id}"]`), true);
  markCurrent();
  const row = tocEl.querySelector(`[data-id="${nodeId}"]`);
  if (row && scroll) row.scrollIntoView({ block: 'nearest' });
}

function markCurrent() {
  tocEl.querySelectorAll('[aria-current]').forEach((r) => r.removeAttribute('aria-current'));
  const row = state.nodeId && tocEl.querySelector(`[data-id="${state.nodeId}"]`);
  if (row) {
    row.setAttribute('aria-current', 'page');
    tocEl.querySelectorAll('.toc-row[tabindex="0"]').forEach((r) => (r.tabIndex = -1));
    row.tabIndex = 0;
  }
}

const visibleRows = () => $$('.toc-row', tocEl).filter((r) => r.offsetParent !== null);
function focusRow(row) {
  if (!row) return;
  tocEl.querySelectorAll('.toc-row[tabindex="0"]').forEach((r) => (r.tabIndex = -1));
  row.tabIndex = 0;
  row.focus();
}

tocEl.addEventListener('click', (e) => {
  const row = e.target.closest('.toc-row');
  if (!row) return;
  if (row.classList.contains('is-folder')) expand(row, row.getAttribute('aria-expanded') !== 'true');
  else closeDrawer();
});

tocEl.addEventListener('keydown', (e) => {
  const row = e.target.closest('.toc-row');
  if (!row) return;
  const rows = visibleRows();
  const i = rows.indexOf(row);
  const folder = row.classList.contains('is-folder');
  const open = row.getAttribute('aria-expanded') === 'true';
  let handled = true;
  switch (e.key) {
    case 'ArrowDown':
      focusRow(rows[i + 1]);
      break;
    case 'ArrowUp':
      focusRow(rows[i - 1]);
      break;
    case 'Home':
      focusRow(rows[0]);
      break;
    case 'End':
      focusRow(rows[rows.length - 1]);
      break;
    case 'ArrowRight':
      if (folder && !open) expand(row, true);
      else if (folder) focusRow(rows[i + 1]);
      break;
    case 'ArrowLeft': {
      if (folder && open) expand(row, false);
      else {
        const parent = row.parentElement.parentElement.closest('li')?.querySelector(':scope > .toc-row');
        focusRow(parent);
      }
      break;
    }
    default:
      handled = false;
  }
  if (handled) e.preventDefault();
});

// Filter: flat list of matching entries in the current section.
const runFilter = debounce(() => {
  const q = $('#toc-filter').value.trim().toLowerCase();
  if (!q) return renderTree();
  const words = q.split(/\s+/);
  const sec = sectionById(state.section);
  const hits = [];
  const walk = (n, trail) => {
    for (const c of n.c) {
      const t = c.t.toLowerCase();
      if (words.every((w) => t.includes(w)) && hits.length < 300) hits.push({ c, trail });
      if (c.c) walk(c, [...trail, c.t]);
    }
  };
  walk(sec, []);
  if (!hits.length) {
    tocEl.innerHTML = `<div class="toc-empty">No entries in ${esc(sec.label)} match “${esc(q)}”.<br><br><button class="btn sm" id="toc-filter-search">${icon('search')} Search the whole manual</button></div>`;
    $('#toc-filter-search').onclick = () => openPalette($('#toc-filter').value);
    return;
  }
  const re = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  tocEl.innerHTML = `<ul class="toc-filter-results" role="none">${hits
    .map(({ c, trail }, i) => {
      const label = esc(c.t).replace(re, '<mark>$1</mark>');
      const attrs = `role="treeitem" aria-level="1" aria-posinset="${i + 1}" aria-setsize="${hits.length}" tabindex="${i ? -1 : 0}" data-id="${c.id}"`;
      const crumb = trail.length ? `<span class="crumb">${esc(trail.slice(-2).join(' › '))}</span>` : '';
      return c.c
        ? `<li role="none"><button class="toc-row" ${attrs} data-reveal="1">${crumb}<span>${label} ›</span></button></li>`
        : `<li role="none"><a class="toc-row" ${attrs} href="${hrefToHash(c.h)}">${crumb}<span>${label}</span></a></li>`;
    })
    .join('')}</ul>`;
  markCurrent();
}, 120);
$('#toc-filter').addEventListener('input', runFilter);
$('#toc-filter').addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    focusRow(tocEl.querySelector('.toc-row'));
  }
  if (e.key === 'Escape') {
    e.target.value = '';
    renderTree();
  }
});
tocEl.addEventListener('click', (e) => {
  const r = e.target.closest('[data-reveal]');
  if (!r) return;
  const id = r.dataset.id;
  $('#toc-filter').value = '';
  renderTree();
  for (const a of ancestors(id).slice(1)) expand(tocEl.querySelector(`[data-id="${a.id}"]`), true);
  focusRow(tocEl.querySelector(`[data-id="${id}"]`));
});

// ================================================================= drawer (mobile) + sidebar toggle
function openDrawer() {
  document.body.classList.add('drawer-open');
  $('#scrim').hidden = false;
  $('#btn-menu').setAttribute('aria-expanded', 'true');
  (tocEl.querySelector('[aria-current]') || tocEl.querySelector('.toc-row'))?.focus();
}
function closeDrawer() {
  document.body.classList.remove('drawer-open');
  $('#scrim').hidden = true;
  $('#btn-menu').setAttribute('aria-expanded', 'false');
}
function toggleToc() {
  if (matchMedia('(max-width: 860px)').matches) {
    document.body.classList.contains('drawer-open') ? closeDrawer() : openDrawer();
  } else {
    document.body.classList.toggle('toc-hidden');
    store.set('tocHidden', document.body.classList.contains('toc-hidden'));
  }
}
$('#btn-menu').onclick = toggleToc;
$('#btn-toc').onclick = toggleToc;
$('#scrim').onclick = closeDrawer;
if (store.get('tocHidden', false)) document.body.classList.add('toc-hidden');

// ================================================================= breadcrumbs + view bar
function setCrumbs(items) {
  const parts = [`<a href="#/" aria-label="Home">${icon('home')}</a>`];
  items.forEach((it, i) => {
    parts.push(icon('chevron-right', 'sep'));
    const last = i === items.length - 1;
    if (it.id && !last) parts.push(`<a href="#" data-crumb="${it.id}" title="${esc(it.t)}">${esc(it.t)}</a>`);
    else parts.push(`<span class="${last ? 'current' : ''}" title="${esc(it.t)}" ${last ? 'aria-current="page"' : ''}>${esc(it.t)}</span>`);
  });
  crumbsEl.innerHTML = parts.join('');
  $('#viewbar').classList.remove('is-empty');
}
crumbsEl.addEventListener('click', (e) => {
  const a = e.target.closest('[data-crumb]');
  if (!a) return;
  e.preventDefault();
  const id = a.dataset.crumb;
  const node = getNode(id);
  if (!node) return;
  if (document.body.classList.contains('toc-hidden')) toggleToc();
  setSection(node.section);
  $('#toc-filter').value = '';
  renderTree();
  for (const n of ancestors(id).slice(1)) expand(tocEl.querySelector(`[data-id="${n.id}"]`), true);
  const row = tocEl.querySelector(`[data-id="${id}"]`);
  row?.scrollIntoView({ block: 'center' });
  focusRow(row);
  if (matchMedia('(max-width: 860px)').matches) openDrawer();
});

function favButton() {
  const entry = currentEntry();
  const on = isFav(entry.hash);
  return `<button class="icon-btn" id="btn-fav" aria-pressed="${on}" aria-label="Favourite (F)" title="Favourite (F)">${icon('star')}</button>`;
}
function bindFav() {
  const b = $('#btn-fav');
  if (!b) return;
  b.onclick = () => b.setAttribute('aria-pressed', String(toggleFav(currentEntry())));
}

// ================================================================= router
function nodeForRoute(route) {
  const h = routeHref(route);
  if (!h) return null;
  return data.byHref.get(h) ?? (route.view === 'e' ? data.byHref.get(`e:${route.arg}`) : null) ?? null;
}

async function router() {
  const route = parseHash();
  state.route = route;
  state.cleanup?.();
  state.cleanup = null;
  state.title = null;
  state.nodeId = nodeForRoute(route);
  actionsEl.innerHTML = '';
  if (state.nodeId) revealInTree(state.nodeId);
  else markCurrent();
  closePalette();

  switch (route.view) {
    case 'p':
      renderPage(route);
      break;
    case 'f':
      renderPdf(route);
      break;
    case 'e':
      await renderEwdRoute(route);
      break;
    case 'search':
      renderResults(route);
      break;
    default:
      renderHome();
  }
  if (route.view !== 'home' && route.view !== 'search') pushRecent(currentEntry());
}

function crumbsForNode(extraTitle) {
  if (state.nodeId) {
    const list = ancestors(state.nodeId).map((n) => ({ id: n.id, t: n.t }));
    if (extraTitle && extraTitle !== list[list.length - 1].t) list.push({ t: extraTitle });
    return list;
  }
  return extraTitle ? [{ t: extraTitle }] : [];
}

function pagerLinks() {
  const node = state.nodeId && getNode(state.nodeId);
  if (!node) return {};
  const leaves = data.leaves.get(node.section);
  const i = leaves.indexOf(node.id);
  return { prev: getNode(leaves[i - 1]), next: getNode(leaves[i + 1]) };
}
function go(node) {
  if (node?.h) location.hash = hrefToHash(node.h);
}

// ================================================================= home
function renderHome() {
  document.title = 'Mazda2 Service Manual';
  $('#viewbar').classList.add('is-empty');
  crumbsEl.innerHTML = '';
  const sectionCards = data.sections
    .map(
      (s) => `<a class="card" href="#" data-section="${s.code}">
        <span class="card-icon">${icon(s.icon)}</span>
        <span><strong>${esc(s.label)}</strong><small>${data.leaves.get(s.code).length.toLocaleString()} topics</small></span></a>`,
    )
    .join('');
  const list = (items, empty) =>
    items.length
      ? `<ul class="link-list">${items
          .slice(0, 8)
          .map(
            (r) =>
              `<li><a href="${esc(r.hash)}">${icon(r.k === 'e' ? 'bolt' : r.k === 'f' ? 'file' : 'wrench')}<span><span>${esc(r.t)}</span><span class="meta">${esc(r.b || '')}</span></span></a></li>`,
          )
          .join('')}</ul>`
      : `<p class="empty-note">${empty}</p>`;
  const examples = ['P0300', 'B13C316', 'wheel nut torque', 'brake pad replacement', 'cooling fan relay', 'engine oil'];
  view.innerHTML = `<div class="home">
    <section class="hero">
      <h1>Mazda2 DL/DJ Service Manual</h1>
      <p>Workshop procedures, wiring diagrams, fault codes and specifications for 2014–2019 models. Works fully offline.</p>
      <button class="hero-search" id="hero-search">${icon('search')}<span>Search procedures, DTC codes, connectors…</span><kbd>Ctrl K</kbd></button>
      <div class="hero-chips">${examples.map((q) => `<button data-q="${esc(q)}">${esc(q)}</button>`).join('')}</div>
    </section>
    <div class="two-col">
      <div><h2>Recently viewed</h2>${list(recent(), 'Pages you open will appear here.')}</div>
      <div><h2>Favourites</h2>${list(favs(), 'Press <kbd>F</kbd> or the star on any page to pin it here.')}</div>
    </div>
    <h2>Manual sections</h2>
    <div class="cards">${sectionCards}</div>
  </div>`;
  $('#hero-search').onclick = () => openPalette();
  view.querySelectorAll('[data-q]').forEach((b) => (b.onclick = () => openPalette(b.dataset.q)));
  view.querySelectorAll('[data-section]').forEach(
    (a) =>
      (a.onclick = (e) => {
        e.preventDefault();
        setSection(a.dataset.section);
        $('#toc-filter').value = '';
        renderTree();
        if (document.body.classList.contains('toc-hidden')) toggleToc();
        if (matchMedia('(max-width: 860px)').matches) openDrawer();
        else focusRow(tocEl.querySelector('.toc-row'));
      }),
  );
}

// ================================================================= content page
function renderPage(route) {
  const path = route.arg;
  const q = route.params.get('q') || '';
  const anchor = route.params.get('a') || '';
  const node = state.nodeId && getNode(state.nodeId);
  setCrumbs(crumbsForNode(node ? null : path.split('/').pop()));
  const pdfPath = path.match(/^(.*)\/html\/(id[0-9a-z]+)\.html$/i);
  actionsEl.innerHTML = `${favButton()}
    <button class="icon-btn" id="btn-print" aria-label="Print page" title="Print page">${icon('print')}</button>
    ${pdfPath ? `<a class="icon-btn" id="btn-pdf" hidden href="${hrefToHash(`f:${pdfPath[1]}/pdf/${pdfPath[2]}.pdf`)}" aria-label="Open PDF version" title="Open PDF version">${icon('file')}</a>` : ''}
    <a class="icon-btn" href="${esc(path)}" target="_blank" rel="noopener" aria-label="Open original in new tab" title="Open original in new tab">${icon('external')}</a>`;
  bindFav();
  if (pdfPath) {
    fetch(`${pdfPath[1]}/pdf/${pdfPath[2]}.pdf`, { method: 'HEAD' })
      .then((r) => r.ok && ($('#btn-pdf') && ($('#btn-pdf').hidden = false)))
      .catch(() => {});
  }

  const { prev, next } = pagerLinks();
  view.innerHTML = `<div class="page-frame-wrap">
      <div class="loading"><div class="spinner"></div></div>
      <iframe class="page-frame" title="Manual page" src="${esc(path)}"></iframe>
      <aside class="page-aside" aria-label="Page tools">
        <div class="aside-section" id="otp"></div>
        ${
          prev || next
            ? `<div class="aside-section"><h3>Continue</h3><div class="pager">
          ${prev ? `<a href="${hrefToHash(prev.h)}"><small>‹ Previous</small>${esc(prev.t)}</a>` : ''}
          ${next ? `<a href="${hrefToHash(next.h)}"><small>Next ›</small>${esc(next.t)}</a>` : ''}</div></div>`
            : ''
        }
      </aside>
    </div>`;
  const frame = $('.page-frame', view);
  $('#btn-print').onclick = () => frame.contentWindow.print();
  frame.addEventListener('load', () => enhanceFrame(frame, { q, anchor }));
}

function enhanceFrame(frame, { q, anchor }) {
  $('.loading', view)?.remove();
  let doc;
  try {
    doc = frame.contentDocument;
  } catch {
    return;
  }
  if (!doc || !doc.body) return;
  const title = doc.title?.trim() || '';
  if (title && !/^GI_|WiringDiagrams/.test(title)) {
    state.title = title;
    document.title = `${title} · Mazda2 Service Manual`;
    if (!state.nodeId) setCrumbs([{ t: title }]);
    const r = recent();
    if (r[0] && r[0].hash === currentEntry().hash) {
      r[0].t = title;
      store.set('recent', r);
    }
  }
  const isManualPage = !!doc.querySelector('link[href*="mazda-css"]') || !!doc.querySelector('.servinfo-title');
  if (isManualPage) {
    const link = doc.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('app/content.css', location.href).href;
    doc.head.append(link);
    doc.documentElement.classList.toggle('dark', isDark());
    const meta = doc.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1';
    doc.head.append(meta);
  }

  // Links: keep navigation inside the app.
  doc.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (a) {
      const href = a.getAttribute('href');
      if (href.startsWith('#') || href.startsWith('javascript:')) return;
      const url = new URL(href, doc.baseURI);
      const hash = legacyUrlToHash(url);
      e.preventDefault();
      if (hash) {
        if (e.ctrlKey || e.metaKey || e.button === 1) window.open(hash, '_blank');
        else location.hash = hash;
      } else window.open(url.href, '_blank', 'noopener');
      return;
    }
    const img = e.target.closest('img');
    if (img && imgs.includes(img)) openLightbox(imgs.map((i) => i.src), imgs.indexOf(img));
  });
  doc.addEventListener('keydown', onKey);

  const imgs = [...doc.images].filter((i) => !/esi_common|\/button\//.test(i.src) && (i.naturalWidth > 40 || !i.complete));

  // "On this page" outline with scroll spy.
  const heads = [...doc.querySelectorAll('p.servinfosub-title, p.topic-title')];
  const otp = $('#otp');
  if (otp && heads.length > 1) {
    heads.forEach((h, i) => (h.id ||= `h-${i}`));
    otp.innerHTML = `<h3>On this page</h3>${heads
      .map((h) => `<a href="#" data-h="${h.id}" style="${h.classList.contains('topic-title') ? 'padding-left:20px' : ''}">${esc(h.textContent.trim())}</a>`)
      .join('')}`;
    otp.onclick = (e) => {
      const a = e.target.closest('[data-h]');
      if (!a) return;
      e.preventDefault();
      const el = doc.getElementById(a.dataset.h);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el?.classList.add('flash');
      setTimeout(() => el?.classList.remove('flash'), 1600);
    };
    const spy = () => {
      const y = 80;
      let cur = heads[0];
      for (const h of heads) if (h.getBoundingClientRect().top < y) cur = h;
      otp.querySelectorAll('a').forEach((a) => a.classList.toggle('active', a.dataset.h === cur.id));
    };
    doc.addEventListener('scroll', spy, { passive: true });
    spy();
  }

  // Search-term highlighting.
  if (q) {
    const terms = q.split(/\s+/).filter((t) => t.length > 1);
    const marks = highlightTerms(doc.body, terms);
    if (marks.length) {
      marks[0].classList.add('current');
      marks[0].scrollIntoView({ block: 'center' });
      toast(`${marks.length} match${marks.length === 1 ? '' : 'es'} for “${q}” highlighted`);
    }
  } else if (anchor) {
    const el = doc.getElementById(anchor) || doc.getElementsByName(anchor)[0];
    el?.scrollIntoView({ block: 'start' });
  }
  if (isManualPage) {
    // Wide tables scroll sideways instead of overflowing the page.
    doc.querySelectorAll('table.table-flame').forEach((t) => {
      if (t.parentElement.classList.contains('table-scroll')) return;
      const w = doc.createElement('div');
      w.className = 'table-scroll';
      t.replaceWith(w);
      w.append(t);
    });
  }
}

window.addEventListener('themechange', () => {
  $('.page-frame')?.contentDocument?.documentElement.classList.toggle('dark', isDark());
});

// ================================================================= PDF
function renderPdf(route) {
  const path = route.arg;
  setCrumbs(crumbsForNode(path.split('/').pop()));
  actionsEl.innerHTML = `${favButton()}<a class="icon-btn" href="${esc(path)}" download aria-label="Download PDF" title="Download PDF">${icon('arrow-up', '')}</a>
    <a class="icon-btn" href="${esc(path)}" target="_blank" rel="noopener" aria-label="Open in new tab" title="Open in new tab">${icon('external')}</a>`;
  $('[download]', actionsEl).querySelector('svg').style.transform = 'rotate(180deg)';
  bindFav();
  document.title = `${path.split('/').pop()} · Mazda2 Service Manual`;
  view.innerHTML = `<div class="page-frame-wrap"><iframe class="page-frame" title="PDF document" src="${esc(path)}#view=FitH"></iframe></div>`;
}

// ================================================================= wiring diagrams
async function renderEwdRoute(route) {
  const key = route.arg;
  const c = data.ewd.circuits[key];
  if (!c) {
    setCrumbs([{ t: 'Wiring diagram not found' }]);
    view.innerHTML = `<div class="home"><p class="empty-note">No wiring diagram “${esc(key)}”.</p></div>`;
    return;
  }
  state.title = c.n;
  document.title = `${c.n} · Mazda2 Service Manual`;
  setCrumbs(crumbsForNode(state.nodeId ? null : c.n));
  actionsEl.innerHTML = favButton();
  bindFav();
  const { renderEwd } = await import('./ewd.js');
  state.cleanup = renderEwd(view, {
    key,
    hl: route.params.get('hl'),
    cn: route.params.get('cn'),
    q: route.params.get('q'),
    openLightbox,
  });
}

// ================================================================= search results page
const KIND_ORDER = ['dtc', 'procedure', 'spec', 'wiring', 'connector', 'description', 'info'];

function resultHash(item, q) {
  return hrefToHash(item.h, item.h.startsWith('p:') ? { q } : {});
}

async function renderResults(route) {
  const q = route.params.get('q') || '';
  const kinds = (route.params.get('k') || '').split(',').filter(Boolean);
  const sections = (route.params.get('s') || '').split(',').filter(Boolean);
  document.title = `Search: ${q} · Mazda2 Service Manual`;
  setCrumbs([{ t: `Search results` }]);
  view.innerHTML = `<div class="results-page">
    <form class="results-search" id="results-form" role="search">${icon('search')}
      <input id="results-q" type="search" value="${esc(q)}" placeholder="Search the manual" autocomplete="off" aria-label="Search the manual"/>
      <button class="btn sm primary">Search</button></form>
    <div class="chips" id="kind-chips" aria-label="Filter by type"></div>
    <div class="chips" id="section-chips" aria-label="Filter by section"></div>
    <div class="result-count" id="result-count">Searching…</div>
    <div id="results"></div></div>`;
  const update = (patch) => {
    const p = new URLSearchParams(route.params);
    for (const [k, v] of Object.entries(patch)) v ? p.set(k, v) : p.delete(k);
    location.hash = `#/search?${p}`;
  };
  $('#results-form').onsubmit = (e) => {
    e.preventDefault();
    update({ q: $('#results-q').value.trim() });
  };
  if (!q) {
    $('#result-count').textContent = 'Type a search above.';
    return;
  }
  const res = await search({ q, kinds, sections, limit: 200 });
  const toggle = (list, v) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]).join(',');
  $('#kind-chips').innerHTML = KIND_ORDER.filter((k) => res.kinds[k] || kinds.includes(k))
    .map((k) => `<button class="chip" data-k="${k}" aria-pressed="${kinds.includes(k)}">${KIND_LABEL[k]}<span class="n">${res.kinds[k] || 0}</span></button>`)
    .join('');
  $('#section-chips').innerHTML = data.sections
    .filter((s) => res.sections[s.code] || sections.includes(s.code))
    .map((s) => `<button class="chip" data-s="${s.code}" aria-pressed="${sections.includes(s.code)}">${esc(s.label)}<span class="n">${res.sections[s.code] || 0}</span></button>`)
    .join('');
  $('#kind-chips').onclick = (e) => {
    const b = e.target.closest('[data-k]');
    if (b) update({ k: toggle(kinds, b.dataset.k) });
  };
  $('#section-chips').onclick = (e) => {
    const b = e.target.closest('[data-s]');
    if (b) update({ s: toggle(sections, b.dataset.s) });
  };
  $('#result-count').textContent = `${res.total.toLocaleString()} result${res.total === 1 ? '' : 's'} for “${q}”${res.total > 200 ? ' — showing the top 200' : ''}`;
  $('#results').innerHTML = res.items
    .map(
      (it) => `<a class="result" href="${resultHash(it, q)}">
        <div class="result-top"><span class="kind" data-k="${it.k}">${KIND_LABEL[it.k]}</span><span class="result-title">${esc(it.t)}</span></div>
        <div class="result-crumb">${esc(it.b)}</div>
        ${it.snip ? `<div class="result-snip">${it.snip}</div>` : ''}</a>`,
    )
    .join('');
}

// ================================================================= command palette
const palette = $('#palette');
const pq = $('#palette-q');
const presults = $('#palette-results');
let pItems = [];
let pSel = 0;
let pKinds = [];

function openPalette(initial) {
  warmSearch();
  if (!palette.open) palette.showModal();
  if (initial != null) pq.value = initial;
  pq.focus();
  pq.select();
  renderPaletteFilters();
  runPalette();
}
function closePalette() {
  if (palette.open) palette.close();
}
function renderPaletteFilters() {
  $('#palette-filters').innerHTML = KIND_ORDER.map(
    (k) => `<button class="chip" data-k="${k}" aria-pressed="${pKinds.includes(k)}">${KIND_LABEL[k]}</button>`,
  ).join('');
}
$('#palette-filters').onclick = (e) => {
  const b = e.target.closest('[data-k]');
  if (!b) return;
  const k = b.dataset.k;
  pKinds = pKinds.includes(k) ? pKinds.filter((x) => x !== k) : [...pKinds, k];
  b.setAttribute('aria-pressed', String(pKinds.includes(k)));
  runPalette();
  pq.focus();
};

const runPalette = debounce(async () => {
  const q = pq.value.trim();
  const status = $('#palette-status');
  if (!q) {
    const r = recent().slice(0, 8);
    pItems = r.map((x) => ({ hash: x.hash, t: x.t, b: x.b, k: x.k === 'e' ? 'wiring' : 'procedure' }));
    presults.innerHTML = r.length
      ? `<div class="palette-group">Recent</div>${pItems.map((it, i) => paletteItem(it, i)).join('')}`
      : `<div class="palette-empty">Search ${searchState.count ? searchState.count.toLocaleString() + ' ' : ''}topics, wiring diagrams and connectors.<br>Try a fault code like <b>P0300</b>, a part like <b>alternator</b>, or <b>wheel nut torque</b>.</div>`;
    pSel = 0;
    markSel();
    status.textContent = searchState.ready ? '' : 'Loading index…';
    return;
  }
  status.textContent = searchState.ready ? '' : 'Loading index…';
  const res = await search({ q, kinds: pKinds, limit: 40 });
  if (pq.value.trim() !== q) return;
  status.textContent = `${res.total.toLocaleString()} results`;
  // Group by type; groups ordered by their best-ranked result.
  const groups = new Map();
  for (const it of res.items) {
    if (!groups.has(it.k)) groups.set(it.k, []);
    if (groups.get(it.k).length < 7) groups.get(it.k).push({ ...it, hash: resultHash(it, q) });
  }
  pItems = [];
  let html = '';
  for (const [k, items] of groups) {
    html += `<div class="palette-group">${KIND_LABEL[k]}</div>`;
    for (const it of items) {
      html += paletteItem(it, pItems.length);
      pItems.push(it);
    }
  }
  if (res.total > pItems.length) {
    pItems.push({ hash: `#/search?q=${encodeURIComponent(q)}`, all: true });
    html += `<a class="palette-item" role="option" data-i="${pItems.length - 1}" href="#/search?q=${encodeURIComponent(q)}"><span class="pi-icon">${icon('list')}</span><span class="pi-body"><span class="pi-title">See all ${res.total.toLocaleString()} results</span></span></a>`;
  }
  presults.innerHTML = html || `<div class="palette-empty">No results for “${esc(q)}”. Check the spelling or try fewer words.</div>`;
  pSel = 0;
  markSel();
}, 70);

function paletteItem(it, i) {
  return `<a class="palette-item" role="option" id="pi-${i}" data-i="${i}" href="${esc(it.hash)}">
    <span class="pi-icon">${icon(KIND_ICON[it.k] || 'file')}</span>
    <span class="pi-body"><span class="pi-title">${esc(it.t)}</span><span class="pi-sub">${esc(it.b || '')}</span>${it.snip ? `<span class="pi-snip">${it.snip}</span>` : ''}</span></a>`;
}
function markSel() {
  presults.querySelectorAll('.palette-item').forEach((el) => el.setAttribute('aria-selected', String(+el.dataset.i === pSel)));
  const el = presults.querySelector(`[data-i="${pSel}"]`);
  el?.scrollIntoView({ block: 'nearest' });
  pq.setAttribute('aria-activedescendant', el?.id || '');
}
pq.addEventListener('input', runPalette);
pq.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (!pItems.length) return;
    pSel = (pSel + (e.key === 'ArrowDown' ? 1 : -1) + pItems.length) % pItems.length;
    markSel();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    const q = pq.value.trim();
    if (e.shiftKey && q) location.hash = `#/search?q=${encodeURIComponent(q)}`;
    else if (pItems[pSel]) location.hash = pItems[pSel].hash;
    closePalette();
  }
});
presults.addEventListener('click', () => setTimeout(closePalette));
palette.addEventListener('click', (e) => {
  if (e.target === palette) closePalette();
});
onSearchState(() => {
  if (palette.open) {
    $('#palette-status').textContent = searchState.ready ? '' : 'Loading index…';
    if (pq.value.trim()) runPalette();
  }
});

// ================================================================= lightbox
const lb = $('#lightbox');
const lbImg = $('#lightbox-img');
const lbStage = $('#lightbox-stage');
const lbState = { list: [], i: 0, s: 1, x: 0, y: 0 };

function openLightbox(list, i = 0) {
  lbState.list = list;
  lbState.i = i;
  lb.showModal();
  showLb();
}
function showLb() {
  const { list, i } = lbState;
  $('#lightbox-count').textContent = list.length > 1 ? `Figure ${i + 1} of ${list.length}` : '';
  $('[data-lb="prev"]', lb).hidden = list.length < 2;
  $('[data-lb="next"]', lb).hidden = list.length < 2;
  lbImg.onload = fitLb;
  lbImg.src = list[i];
  if (lbImg.complete) fitLb();
}
function applyLb() {
  lbImg.style.transform = `translate(${lbState.x}px, ${lbState.y}px) scale(${lbState.s})`;
}
function fitLb() {
  const w = lbImg.naturalWidth || 800;
  const h = lbImg.naturalHeight || 600;
  const vw = lbStage.clientWidth;
  const vh = lbStage.clientHeight;
  const s = Math.min((vw - 120) / w, (vh - 100) / h, 3);
  lbState.s = s;
  lbState.x = (vw - w * s) / 2;
  lbState.y = (vh - h * s) / 2 + 10;
  applyLb();
}
function zoomLb(f, cx, cy) {
  const r = lbStage.getBoundingClientRect();
  const px = cx - r.left;
  const py = cy - r.top;
  const ns = Math.min(Math.max(lbState.s * f, 0.1), 12);
  const k = ns / lbState.s;
  lbState.x = px - (px - lbState.x) * k;
  lbState.y = py - (py - lbState.y) * k;
  lbState.s = ns;
  applyLb();
}
gestures(lbStage, {
  onPan: (dx, dy) => {
    lbState.x += dx;
    lbState.y += dy;
    applyLb();
  },
  onZoom: zoomLb,
});
lb.addEventListener('click', (e) => {
  const b = e.target.closest('[data-lb]');
  if (!b) return;
  const r = lbStage.getBoundingClientRect();
  const a = b.dataset.lb;
  if (a === 'close') lb.close();
  if (a === 'fit') fitLb();
  if (a === 'in') zoomLb(1.4, r.left + r.width / 2, r.top + r.height / 2);
  if (a === 'out') zoomLb(1 / 1.4, r.left + r.width / 2, r.top + r.height / 2);
  if (a === 'prev' || a === 'next') {
    lbState.i = (lbState.i + (a === 'next' ? 1 : -1) + lbState.list.length) % lbState.list.length;
    showLb();
  }
});
lb.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') $('[data-lb="next"]', lb).click();
  if (e.key === 'ArrowLeft') $('[data-lb="prev"]', lb).click();
  if (e.key === '+' || e.key === '=') $('[data-lb="in"]', lb).click();
  if (e.key === '-') $('[data-lb="out"]', lb).click();
  if (e.key === '0') fitLb();
});

// ================================================================= keyboard shortcuts
let gPending = false;
function onKey(e) {
  const t = e.target;
  const typing = t.closest?.('input, textarea, select, [contenteditable="true"]');
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openPalette();
    return;
  }
  if (typing || e.ctrlKey || e.metaKey || e.altKey) return;
  if ($('dialog[open]')) return;
  const k = e.key;
  if (gPending) {
    gPending = false;
    if (k === 'h') location.hash = '#/';
    return;
  }
  const actions = {
    '/': () => openPalette(),
    '?': () => $('#help').showModal(),
    t: toggleToc,
    d: toggleTheme,
    f: () => $('#btn-fav')?.click(),
    g: () => (gPending = true),
    '[': () => go(pagerLinks().prev),
    ']': () => go(pagerLinks().next),
  };
  if (actions[k]) {
    e.preventDefault();
    actions[k]();
  }
}
document.addEventListener('keydown', onKey);

// ================================================================= init
$('#btn-search').onclick = () => openPalette();
$('#btn-theme').onclick = toggleTheme;
$('#btn-help').onclick = () => $('#help').showModal();

(async function init() {
  applyTheme();
  view.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  try {
    await loadData();
  } catch (err) {
    view.innerHTML = `<div class="home"><p class="empty-note">Could not load the manual data (${esc(err.message)}).<br>
      Start the manual with <b>Start Manual.bat</b> (or <code>node serve.mjs</code>) rather than opening the file directly, and run <code>node scripts/build-data.mjs</code> if <code>app/data/</code> is missing.</p></div>`;
    return;
  }
  if (!sectionById(state.section)) state.section = 'S01';
  renderSectionSelect();
  renderTree();
  window.addEventListener('hashchange', router);
  await router();
  // Warm the search index once the page is idle.
  setTimeout(warmSearch, 1500);
})();
