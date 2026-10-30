# Prompt: Modernize the Mazda 2 (DL/DJ 2014–2019) Service Manual viewer

Copy everything below the line into a new Claude Code session opened in this folder.

---

You are modernizing an offline, static HTML service manual for the Mazda 2 (DL/DJ, 2014–2019). Rebuild the whole user experience and interface so it feels like a fast, modern documentation app. Add full-text search and make the wiring and illustration diagrams much easier to use. Everything must keep working **offline** by opening a local file or running a simple static server, with **no backend**.

## What exists today (look it over before changing anything)

- **Entry point:** `Start here.htm` is an HTML 4 page built from nested `<frameset>`s:
  - a top menu (`esicont/menu/pu_esi_menu.html`)
  - a section switcher (`esicont/menu/pu_srvc_menu.html`)
  - a left table of contents (`esicont/srvc/html/left_menu_S01.html` etc.)
  - a `main` content frame
  - It forces `IE=EmulateIE7`.
- **Sections:** S01, S02, S04, S05, S08, S20, S21 (plus S98/S99 defaults). Each section has a `left_menu_SXX.html` and `esicont/menu/default_SXX.html`. Section lists are hard-coded in JS arrays in `pu_srvc_menu.html`.
- **Table of contents:** a tree of `node_SXX_NNNN.html` pages (~363) driven by `esicont/esi_common/toc.js`, `toc_ie4.css` and plus/minus PNG icons. Leaf pages point to procedures.
- **Content:**
  - ~3,770 PDFs in `esicont/srvc/pdf/` (`id*.pdf`), which hold most of the procedure content.
  - More PDFs in `esicont/engine/{A27,A32}/pdf`, `esicont/mission/{B38,B46,B47}/pdf` and `esicont/srvc/html/print/pdf`.
  - HTML general-info pages: `GI_*.html`, `TECHNICAL_QUICK_GUIDE.html`, `2014Mazda2_OASIS.html`.
- **Wiring diagrams (EWD):** `esicont/srvc/html/MZ2UK*.html`.
  - Diagram data is SVG, both alongside each page and under `*_7Csvg/circuit/*.svg`.
  - Data maps: `js/connectorMAP_UK.js`, `circuitMAP_UK.js`, `indexMAP_UK.js`, `connector2circuitMAP_UK.js`, `locationMAP_UK.js`, `voltageMAP_UK.js`, `voltagelinkMAP_UK.js`, `currentflowMAP_UK.js`.
  - Current-flow animations: `js/flow/*_flow.js` using CreateJS 2015.
  - Viewer libraries: jQuery, jquery.panzoom, split-pane and jQuery UI.
  - `*_GO.html` files are redirect stubs that open the diagram in a new window.
- **Images:** ~12k PNGs and ~2.2k SVGs.
- **Scraper leftovers:** files in `esicont/menu/` such as `gtm.js`, `google.tagmanager.debugui2.queue`, `kickstarter.com`, `youtube.com`, `a.post`, `ul.nav`, and stray `*.BAK` / `Descr.WD3` / `default.htm` files throughout.

**Map how pages, the TOC, PDFs and diagrams link together before writing code.** Write that map down briefly in `docs/ARCHITECTURE.md`.

## Hard rules

1. **Never edit or delete the original content files.** That means the PDFs, the SVG/PNG diagrams, and the `*MAP_UK.js` data. Build the new app *on top of* them, reading them as source data. Removing scraper junk and tracking scripts is fine, but list every file you remove.
2. **Offline-first:**
   - No CDNs, no analytics, no network calls.
   - Bundle all dependencies locally, pinned to exact versions.
   - It must work from `file://`, or ship a one-command local server, such as `npx serve` or a tiny bundled script, and document it.
3. **Keep the old viewer reachable** (for example at `legacy.html`) until the new one fully replaces it.
4. Work in small, reviewable commits on a feature branch, not on `main`.

## Goals

### 1. Modern app shell (replace the framesets)

- A single-page app with:
  - a top bar: logo/title, global search box, section switcher, theme toggle
  - a collapsible sidebar TOC
  - a content area
  - an optional right-hand "On this page" or details panel
- Every page gets a deep-linkable URL, using hash or history routing, so the browser's back/forward buttons and bookmarks work.
- Breadcrumbs that show the path through the TOC tree.
- Responsive layout that works on phone and tablet in the garage:
  - the sidebar becomes a drawer
  - tap targets are at least 44px
- Light and dark mode that follows the system setting, plus a manual toggle.
- A clean type scale, consistent spacing, and design tokens as CSS custom properties. Keep it high-contrast and readable in a dim workshop.
- **Accessibility:**
  - semantic HTML and keyboard navigation for the whole TOC tree (arrow keys, Enter, Home/End)
  - visible focus rings and ARIA tree roles
  - WCAG AA contrast
- Recently viewed pages and pinned/favourite pages, stored in `localStorage`.
- Keyboard shortcuts, with a `?` help overlay:
  - `/` or `Ctrl+K` for search
  - `[` and `]` for previous/next page
  - `t` to toggle the TOC

### 2. Table of contents

- Build the full TOC tree for every section into one generated JSON file by parsing the existing `left_menu_SXX.html` and `node_SXX_*.html` files with a build script.
- Use a fast virtualized tree with expand/collapse, "expand to current page", and a filter box that narrows the tree as you type.
- Show the section (Engine, Suspension, Driveline/Axle, Brakes, …) with clear icons.

### 3. Search (the main new feature)

- **Build step:** write a Node script (`scripts/build-index.mjs`) that extracts text from:
  - all HTML pages
  - all PDFs, using `pdfjs-dist` or `pdf-parse`
  - SVG `<text>` labels in the wiring diagrams
  - connector and circuit names from the `*MAP_UK.js` files
- Output a static search index, chunked if it is large, with a client-side engine such as **MiniSearch**, **FlexSearch** or **Pagefind**. Pick one and justify it in `docs/ARCHITECTURE.md` against index size and offline use.
- **Search UI:**
  - instant results as you type, in a command palette (`Ctrl+K`) and on a full results page
  - results grouped by type: procedures, specs/torques, wiring diagrams, connectors, DTCs, general info
  - matched terms highlighted, with a snippet and the TOC breadcrumb for each result
  - fuzzy matching and prefix search
  - filters by section, content type, and engine/transmission (A27, A32, B38, B46, B47)
- **Smart queries:**
  - DTC codes (e.g. `P0300`, `B13C316`) jump straight to the matching procedure or diagram.
  - Connector IDs and part names find matching diagrams and highlight the connector.
  - Torque specs show up for queries like "torque wheel nut".
- Opening a PDF result jumps to the matching page and highlights the hit, using a bundled PDF.js viewer rather than the browser's default viewer.

### 4. Diagrams and wiring diagrams

- **Replace the jQuery panzoom viewer** with a modern SVG viewer:
  - smooth wheel and pinch zoom, drag to pan
  - fit to width or fit to screen, plus 100% / reset
  - a minimap
  - full-screen mode
  - touch-friendly on tablets
- **Interactive circuits:** use the existing `circuitMAP`, `connectorMAP` and `connector2circuitMAP` data so that:
  - hovering or tapping a wire highlights the whole circuit and dims the rest
  - clicking a connector opens a side panel with its pinout, location (`locationMAP`), mating connectors and linked circuits, plus a link to the location image
  - voltage values (`voltageMAP`) and current-flow paths (`currentflowMAP`) can be toggled on as overlays
- **Current-flow animations:** keep them working, but run them in the new viewer with play, pause and step controls. Port them off the 2015 CreateJS build if that can be done cleanly; otherwise isolate it.
- **Search inside a diagram:** find a component, connector or wire colour and zoom to it with a highlight.
- **Open diagrams in the app, not new windows:** replace the `*_GO.html` redirect stubs, with an "open in new tab" option.
- **Illustrations (PNG/SVG):**
  - a click-to-zoom lightbox with pan and zoom
  - next/previous through the figures on a page
  - crisp rendering on high-DPI screens
- **Wire colour readability:** a legend for wire colour abbreviations, and an optional colour-blind-friendly mode that adds pattern or label cues.
- **Printing:** a print-friendly stylesheet so a diagram or procedure prints cleanly on A4, and a "print current view" option for a zoomed region.

### 5. PDF procedures

- Show procedures in the app with an embedded, bundled PDF.js viewer that has:
  - page thumbnails
  - search within the document
  - zoom, and a dark-mode-friendly page background
  - a download button
- Where a procedure spans several PDFs, link them with next/previous navigation.

### 6. Performance and quality

- First load under 1 second on a local machine. Load the TOC, search index and diagrams lazily.
- No layout shift, and smooth 60fps pan and zoom on diagrams.
- Use a lightweight stack: vanilla TypeScript with Vite, or Preact or Svelte. Don't use a heavy framework unless you can justify it.
- Run ESLint and Prettier, and add a few Playwright smoke tests:
  - the app loads
  - the TOC navigates
  - search finds a known DTC
  - a wiring diagram opens, zooms and highlights a circuit
  - a PDF opens at the matched page
- Keep the build output in `dist/`, plus a top-level `index.html` that replaces `Start here.htm` as the entry point.

## Deliverables

1. The new app (source in `app/`, build output in `dist/`) and build scripts in `scripts/`.
2. `docs/ARCHITECTURE.md`, covering how the content is wired, how the index is built, and the library choices.
3. `README.md`, covering how to open, build, rebuild the search index, and run the tests.
4. A list of removed scraper and tracking files.
5. Before/after screenshots of the shell, search, a wiring diagram and a PDF procedure, in `docs/screenshots/`.

## Working approach

1. **Explore and document** the current structure and link graph. Confirm what each `*MAP_UK.js` file contains and how the TOC leaf nodes point to PDFs and EWD pages.
2. **Build data extraction:** TOC JSON, then the search index. Check that the counts match the source, e.g. the number of PDFs indexed versus the number on disk.
3. **App shell and TOC navigation.**
4. **Search UI.**
5. **Diagram viewer and wiring interactivity.**
6. **PDF viewer integration.**
7. **Polish:** accessibility, mobile, dark mode, print, tests and docs.

After each step, run the app in a browser and verify it works before moving on. Report anything you could not get working, rather than hiding it.
