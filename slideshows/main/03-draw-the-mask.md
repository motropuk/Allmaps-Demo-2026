---
title: Draw the mask
hideBasemap: true
warpedMaps:
  - url: https://annotations.allmaps.org/maps/444ba126f2bf8974
    caption: Plan of the city of New Haven, Amos Doolittle, 1817
    provenance: Beinecke Rare Book and Manuscript Library, Yale University Library
    homepage: https://collections.library.yale.edu/catalog/15675073
    useBearing: true
    options:
      applyMask: false
      renderMask: true
      transformationType: helmert
---

The pink outline is the **mask**: a polygon that marks the map inside the scan. Everything outside it, the margins, the dedication and the cartouche, is ignored when the map is warped. For now the whole image stays visible so you can see the boundary.

Drawing the mask is the second of four steps in the Allmaps Editor, and takes about a minute for a sheet like this.
