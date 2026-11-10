# Allmaps at Yale Library — speaker notes

Read-aloud narrative for the 30-slide story at https://motropuk.github.io/Allmaps-Demo-2026/. One section per slide. The panel on each slide carries the facts for the audience; these notes are what you say, with cues in square brackets for when to act. About 22 minutes.

## Keys

- **→ / ←**: next / previous slide. Cue in the notes: **[→]**
- **Space (press and hold)**: hides the historic map so today's map shows underneath; let go to bring it back. Cues: **[Space]** … **[release]**
- **H**: show or hide the text panel. The panel starts hidden, so the maps fill the screen; press H when you want the audience to read the panel or click a link in it. Cue: **[H]**
- **Esc**: close the text panel
- **I**: show or hide the source information for the map on screen, as in the Allmaps Viewer (or click the title strip at the top). **Esc** closes it. Cue: **[press I]**
- **Full screen**: happens automatically when you click **Start**. To leave or re-enter, click the full-screen button under the title (top left) or press **F**.
- **Mouse**: drag to move the map, scroll to zoom. Cue: **[scroll to zoom]**
- **If a map ever comes up blank**: **Cmd + Shift + R** reloads on the same slide.

## 1 · Every digitized map, put back on the ground (0:00)

Hi everyone and thank you for coming. Let's just start by looking at some maps, because that is really what we are here to do. What you are looking at is one of Yale Library's maps: the City of New Haven, surveyed by A. B. Hill in about 1893, from the Beinecke. It is not a screenshot. The browser is pulling the image you are seeing directly from our own Digital Collections server, right now, tile by tile, and bending it to sit on top of a modern street map. [Space] If I hold Space, there is the modern street map underneath, which uses OpenStreetMap data. [release] [scroll to zoom out] And if I zoom out, you can see the historic map lying over the top of the modern one. [scroll back in]

The tool doing this is called Allmaps. It is free and open source, it runs in a web browser, and it does one thing: it puts historical maps in their place geographically. This process is called georeferencing, and Allmaps makes georeferencing something anyone in this room could do. Over the next twenty minutes I want to show you how it works, what it does for our collections, and why Yale has put its name behind it. Every one of the maps you are going to see today is from our collections. [→]

## 2 · A picture of a map (1:30)

Here is the problem Allmaps tries to solve. We have thousands of digitized maps, and we publish them through IIIF, which is now the standard most of the field uses for sharing images online. Having all of this content online is a real achievement. But a digitized map is a picture of a map. This one is Amos Doolittle's Plan of New Haven from 1817, dedicated to the mayor and aldermen of the town. [scroll to zoom in and out] It is a beautiful scan, more than eleven thousand pixels across. But unless you read the text on the sheet, you would have no idea what this is a map of. You could not lay it over today's streets, and you could not find it by searching for New Haven, unless that text had been transcribed.

Georeferencing fixes that. So let me show you how it works, using this Doolittle map. The next four slides are the four steps in the Allmaps Editor, the tool you use to georeference a map. [→]

## 3 · Step 1: draw the mask (3:00)

Step one is to draw a mask. Before you place a single point, you draw a polygon around the part of the scan you want to use. The pink outline is our mask for Doolittle. Notice what it leaves out: we are focusing on just one part of the map, the Nine Squares at the heart of New Haven, bounded by York Street, Grove Street, State Street and George Street. Only what is inside the pink line will be warped; everything else is cropped away.

In the Editor you do this by clicking the corners on the scan; for an area like this it takes about a minute. I am showing you the whole sheet here so you can see where the boundary lies. [→]

## 4 · Step 2: control points on the scan (3:45)

Step two is the control points, and this is the only step that needs any thought. When you are working in the Editor, the screen is split in two: the scan on the left, a modern map on the right. You click a street corner on the scan, then you click the same street corner on the modern map. That pair of clicks is one control point. I am going to show you the two halves one at a time.

These pink dots are the five points placed on Doolittle by the person who georeferenced it: street corners around the Nine Squares. [scroll to zoom in] If I zoom in, you can see exactly where each one landed. [→]

## 5 · Step 2: the same points on today's map (4:45)

And this is what you would see on the other side of the screen: today's New Haven, with the same five points in blue, exactly where they were clicked. I have hidden the historic map so you can see the modern side on its own. Each pink point on the scan has a blue partner here, one pair for each corner.

Five pairs were enough for Doolittle. A more complicated map, or a detailed survey, might need thirty or forty, and you can go back and forth adding them as you need. The Editor shows you the fit improving as you add them, and if you get one wrong, you just drag it to the right place. [→]

## 6 · Step 3: the map is placed (5:30)

Step three happens by itself. With the mask and the points, Allmaps warps the scan onto the modern map. The blue dots are the control points on today's map, and the pink dots are where the warped scan puts them. The white lines join each pair: they show the gap between where a point was clicked and where the warped map actually puts it. A short line means a good fit. [point to a longer line] Where you see a bit of a gap, like this one, the fit is slightly off at that point.

This is the view the Editor gives you on its Results step, so you can see at a glance whether a point needs moving. [Space] Hold Space and you can see the streets it is lying on. [release] The Nine Squares have not moved in two hundred years. [→]

## 7 · Step 4: it is published (6:30)

Step four is the one you don't have to do. There is no save button. Every edit is stored straight away as a Georeference Annotation: a few kilobytes of open JSON at a stable web address, which records three things: the IIIF image, the mask and the points. That is the whole output. The image never moves; it stays on our server, under our control.

That small file is what every Allmaps app reads to draw the map in place, and it is what makes the map findable by location, which is where this story ends up. And it always keeps the link back to the original. [click the title strip at the top, or press I] Just as in the Allmaps Viewer, the strip at the top tells you which map this is and that it comes from Yale University Library. Click it and you get the source information: the catalogue details from our IIIF manifest, and a link straight to the record in Yale Digital Collections. [click Yale Digital Collections page, then come back to the deck] [Esc to close] Now, the maps. [→]

## 8 · New Haven, 1817 (7:30)

Six maps of New Haven from our collections, each georeferenced, each laid over the same spot. As I step through them, watch the Green. It stays put while the city grows around it.

1817: Doolittle, masked to the Nine Squares. The Green at the centre, with Yale College on its west side. I am going to show each map twice: as it is, and then see-through, so you can see where the historic streets fall on today's. [→]

## 9 · 1817, half transparent (8:15)

Same map at 45 per cent. Doolittle's blocks sitting on the modern ones. Opacity is the first of the Viewer's controls, a slider you can set anywhere between the historic map and the modern one.

I should say why this one is a slider and the rest are not. Doolittle's sheet is dark and uneven, so there is no single paper colour to filter out. The maps that follow have clean paper, and for those Allmaps has a better trick, which I will show you next. [→]

## 10 · 1847 (9:00)

Thirty years on. The Map of the City of New Haven, 1847. The grid has pushed out towards the harbour and along the Mill River, and the railway has arrived. Forty control points on this one. [→]

## 11 · 1847, paper removed (9:30)

And here is the trick. The paper is gone and only the drawing is left, lying on the modern map. Nothing was edited. Allmaps draws every map on the graphics card, so the colour of the sheet is filtered out as it renders. In the Viewer this is a single button, the magic pen.

Look at the shoreline. Compare the 1847 waterfront with today's and you can see how much of what is now Long Wharf and the harbour edge is filled land. [→]

## 12 · 1883 (10:00)

1883: Price, Lee and Company, the city directory publishers, surveyed by S. W. Searle. A sheet this regular needed only four control points. [→]

## 13 · 1883, paper removed (10:20)

Paper removed. The ward boundaries and the street names stay perfectly legible on the modern map. [→]

## 14 · 1893 (10:45)

1893, Hill's survey. The most precise of the set, with forty points; this is the map from the first slide. Ward boundaries in red, parks in green, every public building named. [→]

## 15 · 1893, one colour (11:15)

Paper removed, and this time the drawing colorized in Yale blue. The point of this is not decoration. Treated this way a historic map becomes a layer like any other: you can read it against the modern map, or put a second historic map underneath in a second colour and read the two against each other. Colorize is another Viewer button, next to the magic pen. [→]

## 16 · 1911 (11:45)

1911, the Saloon map of New Haven, made for one purpose: to plot where every saloon in the city stood. Eleven control points. Some of you will have seen this one already; it was the example in the partnership update I circulated, and the link on the panel opens it in the Viewer, where you can click the magic pen and do the next slide yourself. [H to show the link, H again to hide] [→]

## 17 · 1911, paper removed (12:15)

Every red mark is a saloon, now on the modern block where it stood. If you work on New Haven history, this is the moment the map stops being an illustration and becomes data. [→]

## 18 · 1922 (12:45)

1922, New Haven and Suburbs, from Manuscripts and Archives. Ten points. A century after Doolittle, the Nine Squares are a small part of the whole. [→]

## 19 · 1922, paper removed (13:15)

Paper removed. Step back through these six and what you have is a fixed frame of reference across maps made by different people, for different reasons, over a hundred years. "What was on this block in 1883" stops being a research project and becomes a matter of flicking back a few slides. [→]

## 20 · From the city to the colony (13:45)

The method does not care about scale. This is Thomas Jefferys's 1774 map of the most inhabited part of New England, at roughly one to four hundred thousand, draped over three states on eleven control points. Printed the year before Lexington. [→]

## 21 · Find New Haven (14:30)

And we fly down the coast to our own harbour, on that same sheet. [Space] Hold and compare the engraved shoreline with today's. [release] For a map at this scale, placed with eleven points, that is a remarkably good fit. [→]

## 22 · New York, October 1776 (15:15)

One more from the same decade. William Faden's Plan of New York Island, dated 19 October 1776, drawn within weeks of the Battle of Brooklyn. The printed references mark the British and American positions. [→]

## 23 · 1776, paper removed (15:45)

Paper removed: the positions of 1776 on the Brooklyn and Manhattan of today. In their proper place on the ground those positions stop being illustrations and become locations you can measure between. For anyone teaching with the Beinecke's early American material, that is a different kind of object. [→]

## 24 · The portolan chart, polynomial (16:15)

City plans are the easy case, so let me show you a hard one. This is a manuscript portolan chart of the Mediterranean from 1590, one of the Beinecke's. A portolan has no projection in the modern sense. It was drawn from compass bearings and distances, by pilots, for pilots.

The Editor's default fit is a polynomial, which is essentially a stretch and a rotation. The white lines show how far each of the eight control points lands from where it should be, and you can see the coastline simply cannot follow. [→]

## 25 · The portolan chart, spline (17:00)

Same chart, same eight points, and one change: the transformation is now a thin-plate spline, which bends the chart smoothly through every point. The white lines vanish and the coast settles onto the modern one. You choose the transformation in the Editor, map by map, and the choice is saved in the annotation. [→]

## 26 · Where the chart stretches (17:40)

And the same fit shown a third way, as a distortion map. The tint measures how much each part of the chart had to be stretched or squeezed to pass through the control points. For a cartographic historian that is evidence, not decoration: it shows where a sixteenth-century pilot's bearings were reliable and where they were not. [→]

## 27 · The whole globe (18:15)

Finally, scale in the other direction. A Mercator planisphere from about 1780, held at Sterling, placed with sixty control points and draped around the planet. [drag the globe] The reason I include it is to make the point that this is not only a tool for nineteenth-century city surveys. It works for the early-modern material this library collects at depth. [→]

## 28 · Yale's maps, ready to use (18:45)

So where are we now. [H] We have roughly thirteen thousand two hundred and fifty-nine digitized maps in our collections with IIIF manifests, and we have recently loaded every one of them into Allmaps. Sixty-two have been georeferenced so far by someone using Allmaps. So there is a lot of content still to georeference: the headroom is enormous, and the barrier to entry is low, because this is just a web-based tool. Because our maps are delivered through IIIF, every one of them is already in Allmaps. You open the Yale organization page in the Editor, pick a map, and start placing points. Nothing to install, no account to create. Wherever one of our maps appears, it carries a Yale University Library badge with a link back to Digital Collections.

Four apps, all in the browser. The Editor, which you have just seen in four slides. The Viewer, which opens any georeferenced map on a modern basemap with opacity, the magic pen and colorize as buttons. Here, which I would ask you to try on your phone when you leave: it shows the historical maps of wherever you are standing, and at the Beinecke it finds our New Haven maps beside Boston Public Library's and David Rumsey's. And Latest, a live stream of maps being georeferenced right now, by the Bodleian, the BnF, Texas A&M, the National Library of Scotland, and us.

We have also been working with Julia Hernández at the Beinecke on using this in classroom teaching. The clip at the bottom is the four steps on the Hill map in the Editor, in one minute. [let the clip run if time allows] [→]

## 29 · Why Yale invested, and what is next (20:15)

Yale joined the Allmaps–IIIF Partnership as an inaugural Innovator-level member, and I chair its Advisory Board. Allmaps began at TU Delft Library in 2021. The partnership, approved by the IIIF Executive Committee last October, gives it a sustainable home inside the IIIF Consortium through 2028, and Yale is on the partners page.

What the membership buys us is simple. Because our maps are IIIF, they sit in Allmaps alongside collections from around the world, and every map someone georeferences becomes open data that serves Yale and everyone else. What is coming is the part I am most excited about. By the end of the year Allmaps plans a first version of Allmaps Explore. Think of it as Google Maps for historical maps: search for any place in the world and see every map of it that has been georeferenced, from any participating institution, in one view. That changes how our map collections are discovered, and partner dashboards will show us how they are being used. [→]

## 30 · Start with a map you know (21:45)

I will finish where we started, with a New Haven map. This is the 1883 Price, Lee map. The link opens it in the Editor so you can see exactly how it was done, and any map on Yale's organization page is one click from starting one of your own. [H] The news article and the short video are on the panel, and every map you have seen tonight is in the Credits with its catalogue record.

Thank you. Questions, and if there is time I would much rather georeference a map in front of you than talk about it.
