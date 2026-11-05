---
title: A picture of a map
hideBasemap: true
warpedMaps:
  - url: https://annotations.allmaps.org/maps/444ba126f2bf8974
    caption: Plan of the city of New Haven, Amos Doolittle, 1817
    provenance: Beinecke Rare Book and Manuscript Library, Yale University Library
    homepage: https://collections.library.yale.edu/catalog/15675073
    useBearing: true
    options:
      applyMask: false
      transformationType: helmert
---

A digitized map is a picture of a map. This is Amos Doolittle's 1817 plan of New Haven, the one he dedicated *to the mayor, aldermen and Common Council*. It is a very good picture, 11,483 pixels wide, but it does not know where it is. It cannot be laid over today's streets, compared with another map of the same place, or asked a question about a location.

Three numbers frame where Yale starts.

<aside class="callout">

<h2>Where we start</h2>

**13,259** cartographic objects in Yale Digital Collections carry a IIIF manifest (export of 23 July 2026).

**62** Yale manifests are georeferenced in Allmaps today, under a Yale University Library organization page (Allmaps API, 17 October 2026).

**A few kilobytes** is the size of a georeference annotation, the file that tells software where a map belongs. The gigabyte GeoTIFFs that georeferencing used to produce are gone: the image never moves and is never duplicated.

</aside>

Georeferencing used to mean GIS software, specialist staff, a derivative file, and a second copy of the image to store, preserve and keep in sync with the master. Allmaps needs only what we already have: a IIIF Image API endpoint and, ideally, a manifest. No upload, no account, no new infrastructure.
