---
title: "Step 1: draw the mask"
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
      renderTransformedGcps: false
      renderVectors: false
      transformationType: helmert
      removeColor: false
      colorize: false
      renderMaskColor: "#ff56ba"
      renderMaskSize: 3
---

Georeferencing starts by drawing a **mask**: a polygon around the part of the scan you want to work with. The pink outline here is our mask for Doolittle. It is drawn around the **Nine Squares**, the original town plan at the heart of New Haven, bounded by York, Grove, State and George Streets. Only what is inside the pink line is warped; everything else is cropped away.

In the Allmaps Editor you draw it by clicking the corners on the scan. For an area like this it takes about a minute. The whole scan stays visible on this slide so you can see where the boundary lies.
