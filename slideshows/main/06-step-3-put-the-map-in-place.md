---
title: "Step 3: the map is placed"
location:
  center: [-72.9268, 41.3083]
  zoom: 14.6
  duration: 3000
warpedMaps:
  - path: annotations/doolittle-nine-squares.json
    caption: "Plan of the city of New Haven, Amos Doolittle, 1817"
    provenance: "Beinecke Rare Book and Manuscript Library, Yale University Library"
    homepage: https://collections.library.yale.edu/catalog/15675073
    options:
      renderMaps: true
      opacity: 1
      applyMask: true
      renderMask: false
      renderGcps: true
      renderTransformedGcps: true
      renderVectors: true
      transformationType: polynomial
      removeColor: false
      colorize: false
      renderGcpsColor: "#2563eb"
      renderGcpsSize: 12
      renderGcpsBorderColor: "#ffffff"
      renderTransformedGcpsColor: "#ff56ba"
      renderTransformedGcpsSize: 12
      renderVectorsColor: "#ffffff"
      renderVectorsSize: 5
      renderVectorsBorderColor: "#111111"
      renderVectorsBorderSize: 2
---

With the mask and the control points, Allmaps warps the scan onto the modern map. Blue dots are the control points on today's map; pink dots are where the warped scan puts them. The **white lines** join each pair and show the gap between where a point was clicked and where the warped map actually puts it. A short line means a good fit; a longer one tells you a point may need moving. This is the view the Editor shows you on its *Results* step.

Hold **Space** to hide the historic map and see the streets it is lying on.

*Zoom in on a pair of dots to see the white line between them.*
