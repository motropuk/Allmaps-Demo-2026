---
title: "Step 2: control points on the scan"
hideBasemap: true
warpedMaps:
  - path: annotations/doolittle-nine-squares.json
    caption: "Plan of the city of New Haven, Amos Doolittle, 1817"
    provenance: "Beinecke Rare Book and Manuscript Library, Yale University Library"
    homepage: https://collections.library.yale.edu/catalog/15675073
    useBearing: true
    options:
      renderMaps: true
      opacity: 1
      applyMask: false
      renderMask: true
      renderGcps: false
      renderTransformedGcps: true
      renderVectors: false
      transformationType: helmert
      removeColor: false
      colorize: false
      renderMaskColor: "#ff56ba"
      renderTransformedGcpsColor: "#ff56ba"
      renderTransformedGcpsSize: 14
---

Next come the **control points**. In the Editor the screen is split in two: the scan on the left, a modern map on the right. You click a place on the scan, then the same place on the modern map. Each pair of clicks becomes a control point: a spot on the scan matched to a location on the modern map. These two slides show the two halves one at a time.

The pink dots are the five control points placed on Doolittle's scan: street corners around the Nine Squares. Zoom in to see exactly where each one was clicked.
