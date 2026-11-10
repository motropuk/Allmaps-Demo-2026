---
title: "Step 2: the same points on today's map"
location:
  center: [-72.9268, 41.3083]
  zoom: 15
  duration: 2500
warpedMaps:
  - path: annotations/doolittle-nine-squares.json
    caption: "Plan of the city of New Haven, Amos Doolittle, 1817"
    provenance: "Beinecke Rare Book and Manuscript Library, Yale University Library"
    homepage: https://collections.library.yale.edu/catalog/15675073
    options:
      renderMaps: true
      opacity: 0
      applyMask: true
      renderMask: false
      renderGcps: true
      renderTransformedGcps: false
      renderVectors: false
      transformationType: polynomial
      removeColor: false
      colorize: false
      renderGcpsColor: "#2563eb"
      renderGcpsSize: 14
      renderGcpsBorderColor: "#ffffff"
      renderGcpsBorderSize: 3
---

This is the other half of the Editor's screen: today's New Haven, with the **same five control points** in blue, exactly where they were clicked on the modern map. The historic map is hidden on this slide so you can see the modern side on its own.

Pink on the scan, blue on the modern map, one pair per corner. That is all the Editor needs: for a plan like this, five pairs; for a detailed survey, thirty or forty. The Editor shows the fit improving as you add them, and you can drag a point to correct it at any time.
