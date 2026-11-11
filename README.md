# Allmaps at Yale Library

A Yale Library staff demonstration of [Allmaps](https://allmaps.org) and the Allmaps–IIIF Partnership, told with maps from [Yale Digital Collections](https://collections.library.yale.edu). Map slides from a scan of Doolittle's 1817 plan of New Haven through a century of city maps and a 1590 portolan chart, to what the partnership means for Yale.

Built with [Allmaps Slides](https://github.com/allmaps/slides) from the [slides template](https://github.com/allmaps/slides-template). Each slide is a Markdown file in `slideshows/main/` with its map settings in YAML frontmatter; `slides.config.yml` holds the project settings; `CREDITS.md` lists every map, its catalogue record and the sources for the figures quoted.

## Presenting

Open the published site, press **F11** (Chrome) for full screen, and use **←/→** to move between slides. Hold **Space** to see the modern basemap under the historic map; **H** hides the text panel. The speaker script that goes with each slide is in [`docs/SCRIPT.md`](docs/SCRIPT.md).

Open the site a few minutes early and page through it once so the IIIF tiles are cached.

## Running locally

Node.js 24 and pnpm 10:

```sh
pnpm install --frozen-lockfile
PUBLIC_PROTOMAPS_KEY=your-key pnpm dev
```

## Deploying

Pushes to `main` build and deploy to GitHub Pages through `.github/workflows/deploy-pages.yml`. The basemap needs a [Protomaps API key](https://protomaps.com/api) with the Pages origin in its allowed sites; set it as the repository variable `PUBLIC_PROTOMAPS_KEY` (Settings → Secrets and variables → Actions → Variables). See `docs/usage.md` for the full set of commands.

## Licence

The original text and configuration in this repository are released under CC0 1.0 (`LICENSE`). Material retained from the Allmaps Slides template (the workflow, the `reference/` files and `docs/usage.md`) is CC BY 4.0 and is credited in `CREDITS.md`. The maps keep Yale Library's rights statements; the georeference annotations are CC0; the Slides application has its own licences.

## Presenter helper

`extras/fullscreen.js` is injected into every page at build time (see the workflow). Clicking **Start** enters full screen; a button under the title and the **F** key toggle it. On slides marked `<!-- embed: URL -->` (28–31) it shows that Allmaps app live in a window. On every map slide a strip at the top names the map and its provider, as in the Allmaps Viewer; clicking it or pressing **I** opens the source information (catalogue details from the Yale IIIF manifest, with links to the Yale Digital Collections record and the Allmaps Viewer). `extras/build_slide_maps.py` writes the slide-to-map index it reads.

## Patch to Allmaps Slides

`patches/@allmaps__slides@0.1.0-beta.2.patch` (applied by pnpm on install) keeps the presenter's pan and zoom when the next slide switches instantly (`duration: 0`, or a fitted slide with no location) to the same maps and view, such as a map followed by its see-through version. Scan-only slides (`hideBasemap: true`, slides 2–4) always open on the whole sheet. Without it the deck flies back to the slide's set view on every change.
