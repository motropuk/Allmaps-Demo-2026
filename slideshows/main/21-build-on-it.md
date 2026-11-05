---
title: Build on it
fit: contain
warpedMaps:
  - url: https://annotations.allmaps.org/maps/1ccea8639e7c3c5f
    caption: "Western section of Long Island Sound: oyster grounds, State of Connecticut, 1889"
    provenance: Beinecke Rare Book and Manuscript Library, Yale University Library
    homepage: https://collections.library.yale.edu/catalog/15675153
    options:
      opacity: 0.9
---

The 1889 chart of the oyster grounds in western Long Island Sound, and the two ways a developer gets it.

**In a web page**, with the Allmaps plugin for MapLibre, OpenLayers or Leaflet, the whole integration is one call:

```js
import { WarpedMapLayer } from '@allmaps/maplibre'
const layer = new WarpedMapLayer()
map.addLayer(layer)
await layer.addGeoreferenceAnnotationByUrl(
  'https://annotations.allmaps.org/maps/1ccea8639e7c3c5f')
```

**In any GIS**, as ordinary map tiles from the Allmaps tile server. QGIS, ArcGIS or a campus web map can read this URL:

```
https://allmaps.xyz/{z}/{x}/{y}.png?url=https://annotations.allmaps.org/maps/1ccea8639e7c3c5f
```

Everything is open: the apps are GPLv3, the packages MIT, and every annotation is published daily as open data at [files.allmaps.org](https://files.allmaps.org). Our images stay on our servers. This presentation itself is made with [Allmaps Slides](https://github.com/allmaps/slides), from one configuration file and a folder of Markdown.
