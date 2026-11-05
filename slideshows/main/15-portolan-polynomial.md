---
title: An old chart, straight fit
fit: contain
warpedMaps:
  - url: https://annotations.allmaps.org/maps/c945133a5bc68f3d
    caption: Portolan chart of the Mediterranean Sea and Europe, 1590
    provenance: Beinecke Rare Book and Manuscript Library, Yale University Library
    homepage: https://collections.library.yale.edu/catalog/16538131
    options:
      renderGcps: true
      renderTransformedGcps: true
      renderVectors: true
      renderVectorsColor: "#ffffff"
      transformationType: polynomial
      opacity: 0.88
---

City plans are the easy case. This is a manuscript **portolan chart** of the Mediterranean from 1590, one of the Beinecke's. A portolan has no projection in the modern sense; it was drawn from compass bearings and distances.

A simple fit, the **polynomial** transformation, is essentially a stretch and a rotation. Look at the white lines: they show how far each of the eight control points lands from where it should be. The coastline cannot follow.
