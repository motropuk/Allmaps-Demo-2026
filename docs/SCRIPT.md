# Allmaps at Yale Library — speaker notes

Read-aloud narrative for the 33-slide story at https://motropuk.github.io/Allmaps-Demo-2026/. One section per slide. The panel on each slide carries the facts for the audience; these notes are what you say, with cues in square brackets for when to act. About 23 minutes.

## Keys

- **→ / ←**: next / previous slide. Cue in the notes: **[→]**
- **Space (press and hold)**: hides the historic map so today's map shows underneath; let go to bring it back. Cues: **[Space]** … **[release]**
- **H**: show or hide the text panel. The panel starts hidden, so the maps fill the screen; press H when you want the audience to read the panel or click a link in it. Cue: **[H]**
- **Esc**: close the text panel
- **I**: show or hide the source information for the map on screen, as in the Allmaps Viewer (or click the title strip at the top). **Esc** closes it. Cue: **[press I]**
- **Full screen**: happens automatically when you click **Start**. To leave or re-enter, click the full-screen button under the title (top left) or press **F**.
- **Mouse**: drag to move the map, scroll to zoom. Cue: **[scroll to zoom]**
- **Live app windows (slides 28–31)**: the Editor, Viewer, Here and Latest run live; you can click and scroll inside them. Move the pointer off the window before pressing **→**. Cue: **[move the pointer off the window]**
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

Step three happens by itself. With the mask and the points, Allmaps warps the scan onto the modern map. The blue dots are the control points on today's map, and the pink dots are where the warped scan puts them. The white lines join each pair: they show the gap between where a point was clicked and where the warped map actually puts it. A short line means a good fit, and on Doolittle they are so short you can barely see them. [scroll to zoom in on a pair of dots] If I zoom in on one, you can see the small gap.

This is the view the Editor gives you on its Results step, so you can see at a glance whether a point needs moving. [Space] Hold Space and you can see the streets it is lying on. [release] The Nine Squares have not moved in two hundred years. [→]

## 7 · Step 4: it is published (6:30)

Step four is the one you don't have to do. There is no save button. Every edit is stored straight away as a Georeference Annotation: a few kilobytes of open JSON at a stable web address, which records three things: the IIIF image, the mask and the points. That is the whole output. The image never moves; it stays on our server, under our control.

That small file is what Allmaps uses to draw the map in the right place, and it is also what lets people find the map by searching for a place. It also keeps the link back to the original. Alongside the Editor there is the Allmaps Viewer, the app where anyone can look at maps once they have been georeferenced. [click the title strip at the top, or press I] Just as in the Viewer, the strip at the top tells you which map this is and that it comes from Yale University Library. Click it and you get the source information: the catalogue details from our IIIF manifest, and a link straight to the record in Yale Digital Collections. [click Yale Digital Collections page, then come back to the deck] [Esc to close] [→]

## 8 · New Haven, 1817 (7:30)

So that is how a map gets georeferenced. Now let's look at a bit more of what Allmaps can do, through six maps of New Haven from our collections, in date order. Each one has been georeferenced and laid over the same spot. As I step through them, watch the Green: it stays put while the city grows around it.

1817: Doolittle again, the map we have just georeferenced, masked to the Nine Squares. The Green in the middle, with Yale College on its west side. I am going to show you each map twice: first as it is, and then with one of the features Allmaps gives you, starting with opacity, so you can see where the historic streets fall on today's. [→]

## 9 · 1817, half transparent (8:15)

This is the same map at 45 per cent opacity. Doolittle's blocks sit on the modern ones, and you can see today's streets coming through underneath. Opacity is one of the first controls you meet in the Allmaps Viewer: a slider you can move back and forth anywhere between the historic map and the modern one.

I should say why this one uses opacity and the rest do not. Doolittle's sheet is dark and uneven, so there is no single paper colour to filter out. The maps that follow have clean paper, and for those Allmaps has a better trick, which I will show you next. [→]

## 10 · 1847 (9:00)

Thirty years on: the Map of the City of New Haven, 1847. The city has pushed out towards the harbour and along the Mill River, and you can see the development that has followed. This one has forty control points. [→]

## 11 · 1847, paper removed (9:30)

And here is the trick. The paper is gone and only the drawing is left, lying on the modern map. Nothing was edited: Allmaps draws every map on the graphics card, so the colour of the sheet is filtered out as the map is drawn. In the Viewer this is a single button, with a magic pen icon.

Look along the shoreline. Compare the 1847 waterfront with today's and you can see how much of what is now Long Wharf and the harbour edge is filled land. [→]

## 12 · 1883 (10:00)

1883: Price, Lee and Company, the city directory publishers, surveyed by S. W. Searle. A sheet this regular needed only four control points. [→]

## 13 · 1883, paper removed (10:20)

Paper removed. The ward boundaries and the street names stay legible on the modern map. You will notice this one does not line up quite as well in places: four control points is not many, and the fit is looser between them. Anyone can open it in the Editor and add more points to tighten it. [→]

## 14 · 1893 (10:45)

1893, A. B. Hill's survey, probably the most precise of the set, with forty points. This is the map from the very first slide. Ward boundaries in red, parks in green, every public building named. [→]

## 15 · 1893, one colour (11:15)

Paper removed, and this time the drawing colorized in blue. Treated this way, a historic map becomes a layer like any other. It is easier to read against the modern map, or you could put a second historic map underneath in a different colour and compare the two. Colorize is another Viewer option, next to the magic pen. [→]

## 16 · 1911 (11:45)

1911, the Saloon map of New Haven, made for one purpose: to plot where every saloon in the city stood in 1911. Eleven control points. Some of you will have seen this one already; it featured in the Yale Library news item about Allmaps that I circulated. [→]

## 17 · 1911, paper removed (12:15)

And here it is with the paper removed. Every red mark is a saloon, now on the modern block where it stood. If you work on New Haven history, this is the moment the map stops being an illustration and becomes data, and really useful data at that. [→]

## 18 · 1922 (12:45)

1922, New Haven and Suburbs, from Manuscripts and Archives. Ten points. A century after Doolittle, the Nine Squares are a small part of the whole. [→]

## 19 · 1922, paper removed (13:15)

Paper removed again. Step back through these six and what you have is a fixed frame of reference across maps made by different people, for different reasons, over a hundred years. "What was on this block in 1883?" stops being a research project and becomes a matter of flicking back a few slides. [→]

## 20 · From the city to the colony (13:45)

Let's zoom out a bit further, because this method does not really care about scale. This is Thomas Jefferys's 1774 map of the most inhabited part of New England. It covers a whole region rather than a single city, and eleven control points are enough to lay it across three states. [→]

## 21 · Find New Haven (14:30)

And if we fly down the coast to our own harbour, on that same sheet, [Space] you can hold and compare the engraved shoreline with today's. [release] It does not match exactly, and we should not expect it to: this was drawn by hand in the eighteenth century. But for a regional map placed with just eleven points, it is a pretty good fit overall. [→]

## 22 · New York, October 1776 (15:15)

One more from the same decade. This is William Faden's Plan of New York Island, dated 19 October 1776 and drawn within weeks of the Battle of Brooklyn. The printed references mark the British and American positions. [→]

## 23 · 1776, paper removed (15:45)

With the paper removed, you can see the positions of 1776 on today's Brooklyn and Manhattan. Some of it will not line up exactly, and it is worth being clear about that: these are hand-drawn maps, and Allmaps is making a good attempt to connect them to modern mapping, not claiming they are precise. What it does give you is a way to see roughly where things were and to compare places in a way the flat scan never could. For anyone teaching with the Beinecke's early American material, that is a really useful thing to have. [→]

## 24 · The portolan chart, polynomial (16:15)

Let's go bigger again, to the whole Mediterranean. City plans are actually the easy case, so let me show you a hard one. This is a hand-drawn sea chart of the Mediterranean from 1590, in the Beinecke's collection. Charts like this are called portolan charts. They were made by ships' navigators, for other navigators, and they were not drawn the way modern maps are. There was no grid of latitude and longitude behind them. Instead they were built up from sailing directions: from this harbour, sail in this compass direction for this many miles and you reach that one. So the overall shape is recognisable, but its accuracy varies from place to place: some stretches of coast are close, others are well off.

That matters for georeferencing. By default, the Editor fits a map by moving, turning and stretching the whole sheet evenly, rather like resizing a photograph so it lines up. For an accurate city survey that works well. For this chart it cannot, because the errors are different in different places. I have made the chart partly see-through so you can compare its coastline with the modern one underneath. [scroll to zoom in on a pair of pink and blue dots] And if I zoom in, you can see the gaps between the pink and blue dots: there is no way to line the chart up with all eight points at once. [→]

## 25 · The portolan chart, spline (17:00)

So here is the same chart and the same eight points, with one setting changed in the Editor. Instead of stretching the whole sheet evenly, Allmaps now bends it, a bit like a rubber sheet pinned down at each control point. Each point lands exactly where it was clicked, and the parts in between bend smoothly to follow. The gaps disappear, and the coastline settles much closer to the modern one. You choose which kind of fit to use for each map in the Editor, and Allmaps remembers that choice along with the points. [→]

## 26 · Where the chart stretches (17:40)

Bending a map to fit is fine, as long as you can see how much bending it took, and Allmaps can show you that too. This is the same fit again, now coloured: one colour shows where the chart had to be stretched to fit, the other where it had to be squeezed. The stronger the colour, the more that part of the chart had to change. For a historian of cartography that is useful in its own right: it is a picture of where this chart departs most from modern geography. [→]


## 27 · Yale's maps in Allmaps (18:15)

So where are we now? [H] Everything on screen is one of Yale's maps, georeferenced in Allmaps and shown together: here, our maps of Connecticut and New England layered on top of one another. [scroll to zoom out] Zoom out and you find the rest, from New Orleans to Florence.

We have roughly thirteen thousand two hundred and fifty-nine digitized maps with IIIF manifests, and we have recently loaded every one of them into Allmaps. Sixty-two have been georeferenced so far. So there is a lot still to do: the headroom is enormous, and the barrier to entry is low, because this is just a web-based tool. And wherever one of our maps appears in Allmaps, it carries a Yale University Library badge with a link back to Digital Collections. Let me show you the four Allmaps apps, live. [→]

## 28 · Allmaps Editor (19:15)

First, the Editor, which you have already seen at work. This is Yale's organization page in it, live: every Yale map that Allmaps knows about. [scroll inside the window] You pick a map and start placing points. Nothing to install, no account to create. I have also been talking with Julia Hernández at the Beinecke about how we might use this in classroom teaching. The clip on the right is the four steps on the Hill map, in one minute. [play the clip if time allows] [move the pointer off the window] [→]

## 29 · Allmaps Viewer (20:00)

Second, the Viewer: where anyone can look at a georeferenced map. This is the Saloon map, live. [click the magic pen icon at the bottom of the window] Here is the magic pen you saw earlier, and next to it the opacity control. [click the title strip at the top of the window] And this is the source information, with the link back to the record in Yale Digital Collections. [move the pointer off the window] [→]

## 30 · Allmaps Here (20:45)

Third, Here, which I would ask you all to try on your phones. It shows you the historical maps of wherever you are standing. [point to the QR code] Scan this code, and on campus it will find our New Haven maps alongside maps from other collections, such as Boston Public Library and the David Rumsey Map Collection. [→]

## 31 · Allmaps Latest (21:15)

And fourth, Latest: a live stream of maps being georeferenced in Allmaps right now, around the world. When someone georeferences one of our maps, it turns up here. [→]

## 32 · Why Yale invested, and what is next (21:45)

On screen now are all of Yale's georeferenced maps, across the world. Yale joined the Allmaps–IIIF Partnership as an inaugural Innovator-level member, and I chair its Advisory Board. Allmaps began at TU Delft Library in 2021. The partnership, approved by the IIIF Executive Committee last October, gives it a sustainable home inside the IIIF Consortium through 2028, and Yale is on the partners page.

What the membership buys us is simple. Because our maps are IIIF, they sit in Allmaps alongside collections from around the world, and every map someone georeferences becomes open data that serves Yale and everyone else. What is coming is the part I am most excited about. By the end of the year Allmaps plans a first version of Allmaps Explore. Think of it as Google Maps for historical maps: search for any place in the world and see every map of it that has been georeferenced, from any participating institution, in one view. That changes how our map collections are discovered, and partner dashboards will show us how they are being used. [→]

## 33 · Start with a map you know (23:00)

I will finish where we started, with a New Haven map. This is the 1883 Price, Lee map. The link on the panel opens it in the Editor so you can see exactly how it was done, and any map on Yale's organization page is one click from starting one of your own. The news article and the short video are on the panel too, and every map you have seen today is in the Credits with its catalogue record.

Thank you. Questions, and if there is time I would much rather georeference a map in front of you than talk about it.
