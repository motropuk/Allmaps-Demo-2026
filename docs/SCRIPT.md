# Allmaps at Yale Library — speaker script

Narration for the 21-slide Allmaps Slides story. The reading panel on each slide carries the key points for the audience; this is what to say. About 20 minutes including the live interaction. Hold **Space** on any map slide to show the modern basemap; **H** hides the panel.

## 1 · Every digitized map, put back on the ground *(0:00, ~1 min)*

Good morning, and thank you for coming. Before I say anything about Allmaps, look at the screen. That is the City of New Haven as surveyed by A. B. Hill in about 1893, one of the Beinecke's maps, and it is being drawn right now, in this browser, directly from our own image server in Digital Collections. Nothing was exported, nothing was pre-rendered, no copy was made. The browser is fetching the same IIIF tiles you would see on the collections site and bending them to fit a modern map underneath. Hold Space and the modern streets appear. That is the whole idea in one picture: we have spent years digitizing maps and publishing them as IIIF images, and Allmaps gives them back to us as maps.

## 2 · A picture of a map *(1:00, ~2 min)*

Here is the problem. A digitized map is a picture of a map. This is Doolittle's 1817 plan of New Haven, the one he dedicated to the mayor and aldermen: a very good picture, eleven thousand pixels wide, but it does not know where it is. Three numbers frame where we start. Thirteen thousand two hundred and fifty-nine cartographic objects in Digital Collections carry a IIIF manifest. Sixty-two are georeferenced in Allmaps today, under a Yale University Library organization page, so the headroom is enormous. And a few kilobytes: the size of a georeference annotation, instead of the gigabyte GeoTIFFs georeferencing used to produce. Georeferencing used to mean GIS software, specialist staff and a second copy of the image to store and preserve. Allmaps needs only what we already have: a IIIF image endpoint and, ideally, a manifest.

## 3 · Draw the mask *(3:00, ~30 s)*

The first thing you do in the Allmaps Editor is draw a mask: the pink outline marks the map inside the scan, so the margins and the dedication are ignored when it is warped. About a minute's work.

## 4 · Control points *(3:30, ~1 min)*

Then the control points. Each pink dot pairs a pixel on the scan with a longitude and latitude on the earth: a street corner here, the same corner on a modern map. Five were enough for Doolittle; the Hill map has forty. This is the only step that takes real attention, and a curator or a student can do it in a browser with no account and no installation.

## 5 · Put the map in place *(4:30, ~2 min)*

Allmaps uses those points to warp the image onto the basemap. Blue dots are the geographic control points, pink dots where the transformed image puts them, white lines connect each pair; short lines mean a good fit. And everything is stored as a single Georeference Annotation: a W3C Web Annotation with a IIIF context, a few kilobytes of JSON, published under CC0 at a stable URL. That is why any viewer or GIS that understands the IIIF Georeference Extension, approved in 2023, can use it, and why the work survives even if Allmaps itself did not.

## 6–11 · New Haven, 1817 to 1922 *(6:30, ~3.5 min)*

Six maps of the same ground. Watch the Green as I step through: it stays put while the city grows around it. 1817, Doolittle: the Nine Squares and not much beyond. 1847: the grid pushing out to the harbour and the Mill River, and the railway. 1883, Price, Lee and Company, the directory publishers. 1893, Hill: forty points, the most precise of the set; hold Space here to see how much of the waterfront is filled land. 1911, the Saloon map, made to plot every saloon in the city. 1922, New Haven and Suburbs, from Manuscripts and Archives. That fixed frame of reference across sources made by different people for different reasons is what georeferencing gives you. "What was on this block in 1883" becomes a matter of stepping back three slides.

## 12–13 · From the city to the colony *(10:00, ~1.5 min)*

The method does not care about scale. Jefferys's 1774 map of the most inhabited part of New England, draped over three states on eleven control points. Next slide: we fly down the coast to our own harbour, on a map printed the year before Lexington.

## 14 · New York, October 1776 *(11:30, ~1 min)*

Faden's plan of New York Island, drawn within weeks of the Battle of Brooklyn, with the British and American positions printed on it. In its proper place on the ground those positions stop being illustrations and become locations you can measure between. For teaching with the Beinecke's early American material, that is a different kind of object.

## 15–16 · The portolan chart *(12:30, ~2 min)*

City plans are the easy case. This is a manuscript portolan chart of the Mediterranean from 1590. A portolan has no projection in the modern sense; it was drawn from bearings and distances, so a simple polynomial fit, a stretch and a rotation, cannot follow the coast. Look at the white lines: that is the error at each control point. Next slide, a thin-plate spline: the chart is warped smoothly through every point, the lines vanish, the coast settles. The transformation type is stored in the annotation, chosen map by map.

## 17 · The whole globe *(14:30, ~45 s)*

A 1780 Mercator planisphere from Sterling, sixty control points, draped around the planet. This is not only a tool for nineteenth-century city surveys; it works for the early-modern material this library collects at depth.

## 18 · Build on it *(15:15, ~1.5 min)*

For the people who build things: the oyster-grounds chart of 1889, and the two ways a developer gets it. In a web page, the Allmaps plugin: one call to add an annotation by URL; this presentation is itself made that way, with Allmaps Slides, from a folder of Markdown. In any GIS, ordinary map tiles from the Allmaps tile server. Open source, open data, open standard, and our images stay on our servers.

## 19 · The apps, and the network *(16:45, ~2 min)*

Four browser apps. The Editor, which you saw in the first slides, and this clip shows the whole process on the Hill map in a minute. The Viewer, which opens any annotation and shows the Yale University Library badge on every map we georeference. Latest, the live stream: Bodleian, BnF, Texas A&M, National Library of Scotland and us in one feed. And Here, which, standing at the Beinecke, surfaces our New Haven maps beside Boston Public Library's and David Rumsey's. Nobody uploaded anything to anybody. Allmaps is a layer across collections, not a silo.

## 20 · Yale and Allmaps *(18:45, ~1.5 min)*

Allmaps began in 2021 with TU Delft Library and Bert Spaan, ran on grants until the NEH award was terminated in April 2025, and was then put on a sustainable footing inside the IIIF Consortium. The Executive Committee approved the partnership in October 2025; it runs 2026 to 2028, with Supporter and Innovator tiers. Yale is an Innovator, with a seat on the Advisory Board, which I chair; the Beinecke and TU Delft funded the initial Supporter benefits. The ask is on the screen: find a candidate map, paste its manifest into the editor, try it, and tell DCA what worked.

## 21 · Start with a map you know *(20:00, close)*

This is the 1883 Price, Lee map; the link opens it in the Editor, and any Digital Collections manifest works the same way. Thank you. Questions, and if there is time I would rather georeference a map in front of you than talk about it: give me a manifest and three street corners.
