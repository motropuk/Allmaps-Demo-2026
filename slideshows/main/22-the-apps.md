---
title: The apps, and the network
location:
  center: [-72.9268, 41.3083]
  zoom: 15
  duration: 3000
warpedMaps:
  - url: https://annotations.allmaps.org/maps/eb1bcd302edd84f8
    caption: City of New Haven, Connecticut, A.B. Hill, c.1893
    provenance: Beinecke Rare Book and Manuscript Library, Yale University Library
    homepage: https://collections.library.yale.edu/catalog/15675132
    options:
      opacity: 0.95
---

Four browser apps, no accounts, no installation. And one page of our own: the [Allmaps Lab](https://motropuk.github.io/Allmaps-Demo-2026/lab/), built on the same `@allmaps/maplibre` package, with every rendering control live on the Yale maps from this story.

- [**Allmaps Editor**](https://editor.allmaps.org/#/collection?url=https://collections.library.yale.edu/manifests/15675122) opens any IIIF manifest. Paste a Yale Digital Collections manifest URL and you are georeferencing. There is no save button: every edit is published automatically, versioned and open.
- [**Allmaps Viewer**](https://viewer.allmaps.org/?url=https://annotations.allmaps.org/maps/eb1bcd302edd84f8) opens any annotation as a map, with the controls you have just seen as slides: opacity, background removal, colorize, grid, distortion, transformation type, and a layers panel for multi-sheet atlases such as [this Boston atlas of thirty-one sheets](https://viewer.allmaps.org/?url=https%3A%2F%2Fannotations.allmaps.org%2Fmanifests%2F23379602e8187445). Look for the *Yale University Library* badge: our organization branding, with a link back to Digital Collections, on every map we georeference.
- [**Allmaps Latest**](https://latest.allmaps.org/) is the live stream of maps being georeferenced right now: the Bodleian, the Bibliothèque nationale, Texas A&M, the National Library of Scotland, and us, in the same feed.
- [**Allmaps Here**](https://here.allmaps.org/) asks where you are standing and shows the historical maps of that spot. Stand at the Beinecke and it surfaces our New Haven maps beside Boston Public Library's copy of the 1748 Wadsworth plan and a map from the David Rumsey collection.

Allmaps is not a platform we upload to. It is a layer across collections, wherever they are hosted; the annotations are what connect them.

<figure>
<video controls muted playsinline preload="metadata" style="width:100%;border-radius:8px;background:#000">
<source src="https://raw.githubusercontent.com/motropuk/allmaps-demo-2026/main/assets/video/editor.mp4" type="video/mp4">
<source src="https://raw.githubusercontent.com/motropuk/allmaps-demo-2026/main/assets/video/editor.webm" type="video/webm">
</video>
<figcaption>

Georeferencing the 1893 Hill map in the Editor: images, mask, control points, results. Recorded 17 October 2026, played at 1.5× speed.

</figcaption>
</figure>
