# Allmaps at Yale Library

A Yale Library staff demonstration of [Allmaps](https://allmaps.org) and the Allmaps–IIIF Partnership, told with maps from [Yale Digital Collections](https://collections.library.yale.edu). Twenty-four map slides, from a scan of Doolittle's 1817 plan of New Haven through a century of city maps, a 1590 portolan chart and a 1780 planisphere, to what the partnership means for Yale.

Built with [Allmaps Slides](https://github.com/allmaps/slides) from the [slides template](https://github.com/allmaps/slides-template). Each slide is a Markdown file in `slideshows/main/` with its map settings in YAML frontmatter; `slides.config.yml` holds the project settings; `CREDITS.md` lists every map, its catalogue record and the sources for the figures quoted.

## The Lab

`lab/index.html` is a second, standalone page served at `/lab/` on the same site. It loads the same Yale maps with the `@allmaps/maplibre` plugin directly and exposes the rendering controls live: opacity, saturation, background removal (colour, threshold, hardness), colorize, transformation type, mask, grid, control points, error vectors and distortion measure, per map or for all loaded maps. Keys: hold Space for the basemap, 1–6 to solo a New Haven year, F for full screen. It is plain HTML with no build step; the deploy workflow copies it into the site.

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
