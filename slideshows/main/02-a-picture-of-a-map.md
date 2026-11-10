---
title: A picture of a map
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
      renderMask: false
      renderGcps: false
      renderTransformedGcps: false
      renderVectors: false
      transformationType: helmert
      removeColor: false
      colorize: false
---

Yale has digitized thousands of maps and publishes them through IIIF, the standard most libraries and museums now use to share images online. But a digitized map is a picture of a map. This is Amos Doolittle's 1817 plan of New Haven, dedicated *to the mayor, aldermen and Common Council*: a beautiful scan, 11,483 pixels across. Yet unless you read the text on the sheet, you would not know what place it shows. It cannot be laid over today's streets or compared with another map of the same place, and it cannot be found by searching for New Haven unless that text has been transcribed.

Georeferencing fixes that, and Allmaps needs only what we already have: the IIIF image. The next four slides show how a map is georeferenced in the Allmaps Editor.
