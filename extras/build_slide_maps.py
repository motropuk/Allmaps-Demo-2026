"""Write slide-maps.json: for each slide (in deck order), the maps it shows.

Used by fullscreen.js to show a Viewer-style source-information header.
Run from the repository root: python3 extras/build_slide_maps.py <out.json>
"""
import glob, json, os, re, sys

out = sys.argv[1] if len(sys.argv) > 1 else 'slide-maps.json'
slides = []
for f in sorted(glob.glob('slideshows/main/*.md')):
    name = os.path.basename(f)[:-3]
    slug = re.sub(r'^\d+-', '', name)
    text = open(f, encoding='utf-8').read()
    fm = text.split('---')[1]
    embed = re.search(r'<!--\s*embed:\s*(\S+)\s*-->', text)
    maps = []
    for block in re.split(r'\n  - ', fm.split('warpedMaps:', 1)[1] if 'warpedMaps:' in fm else '')[1:]:
        def field(k):
            m = re.search(r'(?:^|\n)\s*' + k + r':\s*(.+)', block)
            return m.group(1).strip().strip('"').strip("'") if m else None
        url, path = field('url'), field('path')
        homepage = field('homepage')
        oid = re.search(r'/catalog/(\d+)', homepage or '')
        maps.append({
            'annotation': url,
            'path': path,
            'title': field('caption'),
            'provenance': field('provenance'),
            'homepage': homepage,
            'manifest': f'https://collections.library.yale.edu/manifests/{oid.group(1)}' if oid else None,
        })
    slides.append({'slug': slug, 'maps': maps, 'embed': embed.group(1) if embed else None})
json.dump({'slides': slides}, open(out, 'w'), indent=1)
print(f'{out}: {len(slides)} slides, {sum(1 for s in slides if s["maps"])} with maps')
