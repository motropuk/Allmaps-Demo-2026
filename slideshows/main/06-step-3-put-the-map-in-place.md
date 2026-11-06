---
title: "Step 3: the map is placed"
location:
  center: [-72.9268, 41.3083]
  zoom: 14.6
  duration: 3000
warpedMaps:
  - url: https://annotations.allmaps.org/maps/444ba126f2bf8974
    caption: "Plan of the city of New Haven, Amos Doolittle, 1817"
    provenance: "Beinecke Rare Book and Manuscript Library, Yale University Library"
    homepage: https://collections.library.yale.edu/catalog/15675073
    options:
      opacity: 0.65
      renderGcps: true
      renderGcpsColor: "#2563eb"
      renderGcpsSize: 12
      renderGcpsBorderColor: "#ffffff"
      renderTransformedGcps: true
      renderTransformedGcpsColor: "#ff56ba"
      renderTransformedGcpsSize: 12
      renderVectors: true
      renderVectorsColor: "#ffffff"
      renderVectorsSize: 3
      transformationType: polynomial
---

With the mask and the control points, Allmaps warps the scan onto the modern map. Blue dots are the control points on today's map; pink dots are where the warped scan puts them; the white lines join each pair. Short lines mean a good fit, and this is the view the Editor shows you on its *Results* step.

The map is drawn here at 65% opacity so the modern streets show through. Hold **Space** to hide the historic map entirely and see what it is lying on.
