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

Next come the **control points**. In the Editor the screen is split: the scan on the left, a modern map on the right. You click a place on the scan, then click the same place on the modern map. Each click pair becomes a control point: a pixel on the scan matched to a longitude and latitude on the earth.

The pink dots are Doolittle's five control points as placed on the scan: street corners around the Nine Squares. Zoom in to see exactly where each one was clicked. The next slide shows the same five points on the modern map.
