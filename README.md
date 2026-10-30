# Mazda2 (DL/DJ, 2014–2019) Service Manual — modern viewer

An offline, modern viewer for the Mazda2 DL/DJ service manual. It sits on top of the original manual files, which it reads but never edits.

## Opening the manual

You need [Node.js](https://nodejs.org) (any recent version). No other installs are needed.

- **Windows:** double-click **`Start Manual.bat`**.
- **Any system:** run this in this folder:

  ```bash
  node serve.mjs
  ```

The manual opens in your browser at `http://127.0.0.1:8080/`. If that port is busy, the next free one is used. Everything runs locally: there are no network calls, CDNs or analytics.

The original frame-based viewer is still available as **`Start here.htm`**, also linked at the bottom of the contents sidebar.

> Opening `index.html` straight from disk (`file://`) won't work, because browsers block the data loading it needs. Use the local server above.

## What's in it

- **Modern layout:**
  - collapsible contents sidebar with a filter
  - breadcrumbs, and previous/next topic
  - bookmarkable links for every page
  - light and dark mode
  - works on phones and tablets
- **Search the whole manual** (`Ctrl K` or `/`):
  - covers 4,053 pages, 134 wiring diagrams, 855 fault-code wiring highlights and 424 connectors
  - instant results grouped by type, with highlighted snippets
  - filter by type and manual section on the full results page
  - fault codes work in any format: `P0031`, `P0031:00`, `B13C316`
  - common words map to the manual's terms: alternator → generator, ECU → PCM, gearbox → transaxle, bonnet, tyre…
  - your search terms are highlighted on the page you open
- **Manual pages:**
  - restyled for readability: larger type, styled warnings/cautions/notes, readable tables
  - an "On this page" outline
  - click any figure to zoom and pan it, with next/previous figure
  - print, open the PDF version, favourite
- **Wiring diagrams:**
  - smooth zoom (wheel or pinch) and drag to pan
  - fit to screen or width, minimap, full screen
  - **click a wire to trace** every connected segment
  - **click a connector** to see its face/pinout, a location drawing with the connector marked, terminal voltages, and the other diagrams it appears on
  - **fault-code circuits:** highlight the circuit for a DTC (e.g. P0031:00) with animated flow
  - **find in diagram** for components, connectors and labels
  - a wire-colour legend, plus an optional colour-blind dash-pattern mode
  - optional dark diagram
  - the original current-flow animations, with pause and single-step controls
  - print the current view
- **Recently viewed and favourites** on the home page.

### Keyboard shortcuts

| Keys | Action |
|---|---|
| `Ctrl K` / `/` | Search |
| `[` / `]` | Previous / next topic |
| `T` | Show or hide contents |
| `F` | Favourite this page |
| `D` | Dark mode |
| `G` then `H` | Home |
| Arrow keys | Move through the contents tree |
| `+` / `−` / `0` | Diagram zoom in / out / fit |
| `?` | Shortcut help |

## Rebuilding the data

The viewer reads generated files in `app/data/`, which are committed. Rebuild them only if the original manual files change:

```bash
node scripts/build-data.mjs
```

It prints counts that you can check against the source (pages indexed, contents links, circuits, connectors).

## Testing

```bash
node scripts/smoke-test.mjs
```

This starts the server and checks the following:

- the app files are served
- the data has the expected section, circuit and document counts
- every page, PDF, diagram, connector drawing, location drawing and animation that the contents tree and wiring data point to is served

How the pieces fit together is described in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
