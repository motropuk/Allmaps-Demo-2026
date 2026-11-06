---
title: "Step 1: draw the mask"
hideBasemap: true
warpedMaps:
  - url: https://annotations.allmaps.org/maps/444ba126f2bf8974
    caption: "Plan of the city of New Haven, Amos Doolittle, 1817"
    provenance: "Beinecke Rare Book and Manuscript Library, Yale University Library"
    homepage: https://collections.library.yale.edu/catalog/15675073
    useBearing: true
    options:
      applyMask: false
      renderMask: true
      renderMaskColor: "#ff56ba"
      renderMaskSize: 3
      transformationType: helmert
---

Georeferencing starts by drawing a **mask**: a polygon around the part of the scan you want to work with. The pink outline here is Doolittle's mask. It goes around the map itself and leaves out the margins, the dedication and the cartouche, so that only the map is warped and everything else is cropped away.

In the Allmaps Editor you draw it by clicking the corners of the map on the scan. For a city plan like this it takes about a minute. The whole scan stays visible on this slide so you can see where the boundary falls.
