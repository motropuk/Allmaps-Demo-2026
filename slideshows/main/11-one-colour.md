---
title: One colour, one layer
location:
  center: [-72.9268, 41.3083]
  zoom: 15
  duration: 0
warpedMaps:
  - url: https://annotations.allmaps.org/maps/eb1bcd302edd84f8
    caption: City of New Haven, Connecticut, A.B. Hill, c.1893
    provenance: Beinecke Rare Book and Manuscript Library, Yale University Library
    homepage: https://collections.library.yale.edu/catalog/15675132
    options:
      removeColor: true
      removeColorColor: "#c0b0a0"
      removeColorThreshold: 0.22
      removeColorHardness: 0.5
      colorize: true
      colorizeColor: "#00356b"
      opacity: 1
---

Now the linework is **colorized** in Yale blue. Treated this way a historic map becomes a layer like any other in a GIS: an overlay you can read against a modern basemap, or against another historic map in a second colour.

Opacity, saturation, background removal, colorizing and a grid are all per-map rendering options in the Allmaps renderer, and every one of them is a control in the Viewer. Hold **Space** to compare with the basemap alone.

[Open this map in the Allmaps Lab](https://motropuk.github.io/Allmaps-Demo-2026/lab/) to move the sliders yourself: opacity, background removal, colorize, grid, control points and transformation type, on any of the maps in this story.
