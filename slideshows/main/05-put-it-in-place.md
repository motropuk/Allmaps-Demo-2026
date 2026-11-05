---
title: Put the map in place
location:
  center: [-72.9268, 41.3083]
  zoom: 14.4
  duration: 4000
warpedMaps:
  - url: https://annotations.allmaps.org/maps/444ba126f2bf8974
    caption: Plan of the city of New Haven, Amos Doolittle, 1817
    provenance: Beinecke Rare Book and Manuscript Library, Yale University Library
    homepage: https://collections.library.yale.edu/catalog/15675073
    options:
      applyMask: true
      renderGcps: true
      renderTransformedGcps: true
      renderVectors: true
      renderVectorsColor: "#ffffff"
      transformationType: polynomial
      opacity: 0.85
---

With the mask applied and the control points in hand, Allmaps warps the image onto the basemap. Blue dots are the geographic control points; pink dots are where the transformed image puts them; white lines connect each pair. Short lines mean a good fit.

Everything you have just seen is stored as a single **Georeference Annotation**: a W3C Web Annotation with a IIIF context, a few kilobytes of JSON, published under CC0 at a stable URL. That is why any viewer or GIS that understands the [IIIF Georeference Extension](https://iiif.io/api/extension/georef/) (approved May 2023) can use it, and why the work survives independently of Allmaps itself.

The annotation for this map: [annotations.allmaps.org/maps/444ba126f2bf8974](https://annotations.allmaps.org/maps/444ba126f2bf8974).
