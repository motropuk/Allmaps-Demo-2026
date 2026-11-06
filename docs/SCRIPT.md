# Allmaps at Yale Library — speaker script

Narration for the 30-slide story at https://motropuk.github.io/Allmaps-Demo-2026/. The reading panel on each slide carries the key points for the audience; this is what to say. About 22 minutes with the live interaction. Hold **Space** on any map slide to show the modern basemap; **H** hides the panel; **F11** full screen.

## 1 · Every digitized map, put back on the ground *(0:00, ~1.5 min)*

Good morning, and thank you for coming. Most of you will not have heard of Allmaps, so let me start with what it is. Allmaps is a free, open-source tool that lays historical maps over modern ones. The process is called georeferencing. Anyone can do it in a web browser, with no GIS software and no specialist training, and once a map is georeferenced people can search it by place, compare it with today's map, and use it as data. Look at the screen: that is the City of New Haven as surveyed by A. B. Hill in about 1893, one of the Beinecke's maps, being drawn right now from our own image server and bent to fit a modern map underneath. Hold Space and the modern streets appear. Everything you will see today is one of our maps.

## 2 · A picture of a map *(1:30, ~1.5 min)*

Here is the problem Allmaps solves. We have digitized thousands of maps and we publish them through IIIF, the image standard the whole field shares. But a digitized map is a picture of a map. This is Doolittle's 1817 plan of New Haven: a very good picture, eleven thousand pixels wide, that does not know where it is. Two numbers: thirteen thousand two hundred and fifty-nine of our maps are already loaded into Allmaps and ready to georeference, because they are IIIF; sixty-two have been done so far. Georeferencing used to need GIS software, specialist staff and a second copy of the image. Allmaps needs only what we already have. The next four slides are the four steps in the Allmaps Editor.

## 3 · Step 1: draw the mask *(3:00, ~45 s)*

Step one. Georeferencing starts by drawing a mask: a polygon around the part of the scan you want to work with. The pink outline is Doolittle's mask. It goes around the map and leaves out the margins, the dedication and the cartouche, so only the map is warped. You draw it by clicking the corners on the scan; about a minute.

## 4 · Step 2: control points on the scan *(3:45, ~1 min)*

Step two, the control points. In the Editor the screen is split: the scan on the left, a modern map on the right. You click a place on the scan, then the same place on the modern map. The pink dots are Doolittle's five control points as placed on the scan: street corners around the Nine Squares.

## 5 · Step 2: the same points on today's map *(4:45, ~45 s)*

And this is the right-hand half of the Editor's screen: today's New Haven, with the same five points in blue, exactly where they were clicked. Pink on the scan, blue on the modern map, one pair per corner. Five pairs for a plan like this; thirty or forty for a detailed survey. You can drag a point to correct it at any time.

## 6 · Step 3: the map is placed *(5:30, ~1 min)*

Step three. With the mask and the points, Allmaps warps the scan onto the modern map. Blue dots are the control points on today's map, pink dots where the warped scan puts them, white lines between each pair; short lines mean a good fit. The map is drawn at 65% so the streets show through; hold Space to see what it is lying on.

## 7 · Step 4: it is published *(6:30, ~1 min)*

Step four needs no click at all. There is no save button: every edit is stored at once as a Georeference Annotation, a few kilobytes of open JSON at a stable address, recording the image, the mask and the points. The image never moves; it stays on Yale's server. That small file is what every Allmaps app reads, and what makes the map findable by place.

## 8–9 · New Haven 1817 *(7:30, ~1.5 min)*

Now the maps. Six maps of New Haven from our collections, each laid over the same spot. Watch the Green: it stays put while the city grows around it. 1817, Doolittle: the Nine Squares and Yale College and not much else. Each map comes twice, first as it is, then see-through. For Doolittle that means 45% opacity, because his dark sheet has no clean paper colour to filter; opacity is the first of the Viewer's controls.

## 10–11 · 1847 *(9:00, ~1 min)*

1847: the grid pushes to the harbour and the Mill River, and the railway has arrived. Now the paper removed: Allmaps draws every map on the graphics card, so the colour of the sheet is filtered out as it renders and only the drawing stays. Nothing was edited; this is the magic pen button in the Viewer. Compare the 1847 shoreline with today's: much of the waterfront is filled land.

## 12–13 · 1883 *(10:00, ~45 s)*

1883, Price, Lee and Company, the directory publishers, four control points. Paper removed, the ward boundaries and street names stay legible on the modern map.

## 14–15 · 1893 *(10:45, ~1 min)*

1893, Hill's survey, forty points, the most precise of the set and the map from the first slide. Then paper removed and colorized in Yale blue: treated this way a historic map becomes a layer you can read against the modern map or against another map in another colour.

## 16–17 · 1911 *(11:45, ~1 min)*

1911, the Saloon map, made to plot every saloon in the city; this is the example in the update I circulated, and the Viewer link is on the slide. Paper removed: every red mark is a saloon on the modern block where it stood.

## 18–19 · 1922 *(12:45, ~1 min)*

1922, New Haven and Suburbs, from Manuscripts and Archives: a century after Doolittle the Nine Squares are a small part of the whole. That fixed frame across maps made by different people for different reasons is what georeferencing gives you. "What was on this block in 1883" becomes a matter of stepping back a few slides.

## 20–21 · From the city to the colony *(13:45, ~1.5 min)*

Scale does not matter. Jefferys's 1774 map of the most inhabited part of New England, draped over three states on eleven points; then we fly down the coast to our own harbour on a map printed the year before Lexington.

## 22–23 · New York, 1776 *(15:15, ~1 min)*

Faden's plan of New York Island, drawn within weeks of the Battle of Brooklyn, with the British and American positions printed on it. See-through, those positions sit on the Brooklyn and Manhattan of today: locations you can measure between, not illustrations.

## 24–26 · The portolan chart *(16:15, ~2 min)*

City plans are the easy case. A manuscript portolan chart of the Mediterranean from 1590, drawn from bearings and distances, with no projection. The Editor's default fit, a polynomial, is a stretch and a rotation, and the white lines show the error at each point. Switch to a thin-plate spline and the chart bends through every point; the lines vanish and the coast settles. And the same fit as a distortion map: the tint shows where the chart had to stretch, which is evidence about where a sixteenth-century pilot's bearings were reliable.

## 27 · The whole globe *(18:15, ~30 s)*

A 1780 Mercator planisphere from Sterling, sixty points, draped around the planet. This works for the early-modern material this library collects at depth.

## 28 · Yale's maps, ready to use *(18:45, ~1.5 min)*

Where we are now. Because our maps are IIIF, every one is already in Allmaps: open the Yale organization page in the Editor, pick any map, and start placing points; nothing to install, no account. Four apps in the browser: the Editor you have just seen; the Viewer, which has opacity, the magic pen and colorize as buttons; Here, which you should open on your phone on campus, because at the Beinecke it finds our maps beside Boston Public Library's and David Rumsey's; and Latest, the live stream from the Bodleian, the BnF, Texas A&M, the National Library of Scotland and us. Julia Hernández and I have been working on using this in classroom teaching. The clip shows the four steps on the Hill map in a minute.

## 29 · Why Yale invested, and what is next *(20:15, ~1.5 min)*

Yale joined the Allmaps–IIIF Partnership as an inaugural Innovator-level member, and I chair its Advisory Board. Because our maps are IIIF they appear alongside collections from around the world, and every map someone georeferences becomes open data for Yale and for the research community. What is next: by the end of the year Allmaps plans a first version of Allmaps Explore, Google Maps for historical maps. Search for any place and see every georeferenced map of it, from any institution, in one view. That changes how our map collections are discovered, and partner dashboards will show how they are used.

## 30 · Start with a map you know *(21:45, close)*

The 1883 Price, Lee map: the link opens it in the Editor so you can see how it was done, and any map on Yale's organization page is one click from starting your own. The news article and the short video are on the slide. Thank you; questions, and if there is time I would rather georeference a map in front of you than talk about it.
