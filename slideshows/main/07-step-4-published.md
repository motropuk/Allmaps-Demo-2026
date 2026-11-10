---
title: "Step 4: it is published"
location:
  center: [-72.9268, 41.3083]
  zoom: 14.6
  duration: 0
warpedMaps:
  - path: annotations/doolittle-nine-squares.json
    caption: "Plan of the city of New Haven, Amos Doolittle, 1817"
    provenance: "Beinecke Rare Book and Manuscript Library, Yale University Library"
    homepage: https://collections.library.yale.edu/catalog/15675073
    options:
      renderMaps: true
      opacity: 0.9
      applyMask: true
      renderMask: false
      renderGcps: false
      renderTransformedGcps: false
      renderVectors: false
      transformationType: polynomial
      removeColor: false
      colorize: false
---

There is no save button. Every edit in the Editor is stored at once as a **Georeference Annotation**: a small open file, a few kilobytes of JSON, published under CC0 at a stable web address. It records the IIIF image, the mask and the control points, nothing more. The image itself never moves; it stays on Yale's server.

That file is what every Allmaps app, and any other tool that understands the IIIF Georeference Extension, reads to draw the map in place. It is also what makes the map discoverable by location, which is the subject of the last part of this story.

Every Allmaps app keeps the link back to the original. As in the Allmaps Viewer, the strip at the top of the screen names the map and its provider. Click it, or press **I**, for the source information: the catalogue details from Yale's IIIF manifest and a link to the record in Yale Digital Collections.

Doolittle's annotation in Allmaps: [annotations.allmaps.org/maps/444ba126f2bf8974](https://annotations.allmaps.org/maps/444ba126f2bf8974). These slides use a copy with the same control points and the mask redrawn around the Nine Squares.
