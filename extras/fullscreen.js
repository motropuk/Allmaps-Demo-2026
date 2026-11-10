// Presenter helper for the Allmaps at Yale Library deck.
// Adds: full screen on clicking Start, an on-screen toggle button, the F key,
// starts the deck with the text panel hidden (press H to show it), and shows an
// Allmaps Viewer-style source header for the map on each slide (click it, or press I),
// and shows a live Allmaps app in a window on slides marked <!-- embed: URL -->.
(function () {
  var doc = document;
  var SCRIPT_SRC = (doc.currentScript && doc.currentScript.src) || '';
  var BASE = SCRIPT_SRC ? SCRIPT_SRC.replace(/fullscreen\.js(\?.*)?$/, '') : '/';
  var isFull = function () { return !!(doc.fullscreenElement || doc.webkitFullscreenElement); };
  var enter = function () {
    var root = doc.documentElement;
    var req = root && (root.requestFullscreen || root.webkitRequestFullscreen);
    if (req && !isFull()) { try { var p = req.call(root); if (p && p.catch) p.catch(function () {}); } catch (e) {} }
  };
  var exit = function () {
    var ex = doc.exitFullscreen || doc.webkitExitFullscreen;
    if (ex && isFull()) { try { var p = ex.call(doc); if (p && p.catch) p.catch(function () {}); } catch (e) {} }
  };
  var toggle = function () { isFull() ? exit() : enter(); };

  var ICON_IN = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
  var ICON_OUT = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>';

  var css = doc.createElement('style');
  css.textContent =
    '#yale-fs{position:fixed;left:20px;top:76px;z-index:2147483000;width:40px;height:40px;border:0;border-radius:10px;' +
    'display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;background:rgba(80,80,80,.55);' +
    'backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);box-shadow:0 1px 4px rgba(0,0,0,.2);transition:background .15s}' +
    '#yale-fs:hover,#yale-fs:focus-visible{background:rgba(0,53,107,.9);outline:none}' +
    '#yale-fs .tip{position:absolute;left:48px;white-space:nowrap;font:500 13px/1 system-ui,-apple-system,sans-serif;' +
    'background:rgba(0,0,0,.75);color:#fff;padding:6px 8px;border-radius:6px;opacity:0;pointer-events:none;transition:opacity .15s}' +
    '#yale-fs:hover .tip{opacity:1}';
  var btn = doc.createElement('button');
  btn.id = 'yale-fs'; btn.type = 'button';
  var render = function () {
    var on = isFull();
    btn.innerHTML = (on ? ICON_OUT : ICON_IN) + '<span class="tip">' + (on ? 'Exit full screen (F)' : 'Full screen (F)') + '</span>';
    btn.setAttribute('aria-label', on ? 'Exit full screen' : 'Full screen');
  };
  btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(); btn.blur(); });

  var mount = function () {
    if (!doc.getElementById('yale-fs')) { doc.head.appendChild(css); doc.body.appendChild(btn); render(); }
  };
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', mount); else mount();
  // Re-attach if the app ever replaces the body content.
  setInterval(mount, 2000);
  doc.addEventListener('fullscreenchange', render);
  doc.addEventListener('webkitfullscreenchange', render);

  // F toggles full screen (ignored while typing).
  doc.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.repeat) return;
    var t = e.target;
    if (t && t.closest && t.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
    if (e.key === 'f' || e.key === 'F') { e.preventDefault(); toggle(); }
  });

  // Clicking Start on the title screen also goes full screen.
  doc.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('button, a') : null;
    if (el && el.id !== 'yale-fs' && /^\s*start\s*$/i.test(el.textContent || '')) enter();
  }, true);

  // Start with the text panel hidden: once the slides are showing, press H for the
  // presenter (retrying until the deck accepts it), then leave H to the presenter.
  var startVisible = function () {
    var screen = doc.querySelector('.start-screen');
    return !!screen && screen.getAttribute('aria-hidden') !== 'true';
  };
  var pressH = function () {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'h', code: 'KeyH', bubbles: true }));
    window.dispatchEvent(new KeyboardEvent('keyup', { key: 'h', code: 'KeyH', bubbles: true }));
  };
  var tries = 0, done = false, pressed = false;
  var hidePanel = setInterval(function () {
    if (done || tries > 12) return clearInterval(hidePanel);
    var panel = doc.getElementById('slideshow-reading-panel');
    if (!panel || startVisible()) return;
    var hiddenNow = panel.getAttribute('aria-hidden') === 'true';
    if (pressed && hiddenNow) { done = true; return clearInterval(hidePanel); }
    if (!hiddenNow) { tries++; pressed = true; pressH(); }
  }, 700);
  // The presenter's own H press ends the automatic hiding.
  doc.addEventListener('keydown', function (e) { if (e.isTrusted && (e.key === 'h' || e.key === 'H')) done = true; }, true);

  // ---- Source information, as in the Allmaps Viewer ------------------------
  // A header strip names the map and its provider; clicking it (or pressing I)
  // opens the source information, with catalogue details from the IIIF
  // manifest and a link to the record in Yale Digital Collections.
  var slideMaps = null, manifestCache = {};
  fetch(BASE + 'slide-maps.json').then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) { slideMaps = d; update(); }).catch(function () {});

  var srcCss = doc.createElement('style');
  srcCss.textContent =
    '#yale-src{position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:2147482000;display:none;align-items:center;gap:8px;' +
    'max-width:min(640px,calc(100vw - 460px));padding:6px 8px 6px 10px;border:0;border-radius:999px;background:rgba(255,255,255,.96);' +
    'box-shadow:0 2px 10px rgba(0,0,0,.18);cursor:pointer;font:500 15px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;color:#1f8f5f}' +
    '#yale-src:hover{box-shadow:0 2px 14px rgba(0,0,0,.28)}' +
    '#yale-src .t{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '#yale-src svg{flex:none;color:#555}' +
    '.yale-badge{flex:none;white-space:nowrap;font:500 13px/1 system-ui,-apple-system,sans-serif;color:#1d8a8a;border:1px solid #7fc8c8;' +
    'background:#eaf7f7;border-radius:999px;padding:4px 9px}' +
    '#yale-card{position:fixed;top:58px;left:50%;transform:translateX(-50%);z-index:2147482001;display:none;width:min(600px,calc(100vw - 32px));' +
    'max-height:calc(100vh - 140px);overflow:auto;background:#fff;color:#1a1a1a;border-radius:14px;box-shadow:0 10px 34px rgba(0,0,0,.28);' +
    'padding:16px 18px;font:14px/1.45 system-ui,-apple-system,"Segoe UI",sans-serif}' +
    '#yale-card .head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:10px}' +
    '#yale-card h2{font-size:17px;font-weight:650;margin:0;line-height:1.3}' +
    '#yale-card .ann{font:12px/1.4 ui-monospace,Menlo,monospace;color:#555;background:#f4f4f4;border-radius:8px;padding:6px 8px;margin:0 0 10px;word-break:break-all}' +
    '#yale-card dl{display:grid;grid-template-columns:150px 1fr;gap:4px 12px;margin:0 0 12px}' +
    '#yale-card dt{color:#777}#yale-card dd{margin:0}' +
    '#yale-card .links{display:flex;flex-wrap:wrap;gap:8px}' +
    '#yale-card .links a{display:inline-flex;align-items:center;gap:6px;text-decoration:none;font-weight:600;color:#fff;background:#00356b;border-radius:9px;padding:8px 12px}' +
    '#yale-card .links a.alt{background:#fff;color:#00356b;border:1px solid #00356b}' +
    '#yale-card .note{color:#777;font-size:12.5px;margin:10px 0 0}' +
    '#yale-card + .yale-sep{display:none}';
  var ICON_INFO = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>';
  var pill = doc.createElement('button'); pill.id = 'yale-src'; pill.type = 'button';
  pill.setAttribute('aria-label', 'Source information'); pill.setAttribute('aria-expanded', 'false');
  var card = doc.createElement('div'); card.id = 'yale-card'; card.setAttribute('role', 'dialog'); card.setAttribute('aria-label', 'Source information');
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var unent = function (t) { var el = doc.createElement('textarea'); el.innerHTML = t; return el.value; };
  var str = function (v) { if (!v) return ''; if (typeof v === 'string') return v; var k = Object.keys(v)[0]; return (v[k] || []).join('; '); };
  var currentMap = function () {
    if (!slideMaps || !slideMaps.slides) return null;
    var slug = decodeURIComponent((location.hash || '').replace(/^#/, ''));
    var slide = null;
    for (var i = 0; i < slideMaps.slides.length; i++) if (slideMaps.slides[i].slug === slug) slide = slideMaps.slides[i];
    if (!slide && !slug) slide = slideMaps.slides[0];
    return slide && slide.maps.length ? slide.maps[0] : null;
  };
  var annotationUrl = function (m) { return m.annotation || (m.path ? BASE + 'api/' + m.path.replace(/^\/+/, '') : ''); };
  var shownKey = null;
  var renderCard = function (m) {
    var ann = annotationUrl(m);
    var html = '<div class="head"><h2>' + esc(m.title) + '</h2><span class="yale-badge">Yale University Library</span></div>' +
      '<p class="ann">' + esc(ann) + '</p><dl id="yale-meta"><dt>Repository</dt><dd>' + esc(m.provenance || '') + '</dd></dl>' +
      '<div class="links">' + (m.homepage ? '<a href="' + esc(m.homepage) + '" target="_blank" rel="noopener">Yale Digital Collections page &#8599;</a>' : '') +
      '<a class="alt" href="https://viewer.allmaps.org/?url=' + encodeURIComponent(ann) + '" target="_blank" rel="noopener">Open in Allmaps Viewer &#8599;</a></div>' +
      '<p class="note">As in the Allmaps Viewer: the details come from Yale\'s IIIF manifest for this map.</p>';
    card.innerHTML = html;
    if (!m.manifest) return;
    var fill = function (man) {
      if (!man || card.style.display === 'none') return;
      var want = ['Published/Created Date', 'Creator', 'Repository', 'Call Number', 'Extent', 'Scale'];
      var rows = '<dt>Label</dt><dd>' + esc(str(man.label)) + '</dd>';
      (man.metadata || []).forEach(function (e) {
        var l = str(e.label); if (want.indexOf(l) < 0) return;
        rows += '<dt>' + esc(l.replace('Published/Created Date', 'Date')) + '</dt><dd>' + esc(unent(str(e.value))) + '</dd>';
      });
      var dl = doc.getElementById('yale-meta'); if (dl) dl.innerHTML = rows;
    };
    if (manifestCache[m.manifest]) fill(manifestCache[m.manifest]);
    else fetch(m.manifest).then(function (r) { return r.json(); }).then(function (j) { manifestCache[m.manifest] = j; fill(j); }).catch(function () {});
  };
  var openCard = function () { var m = currentMap(); if (!m) return; renderCard(m); card.style.display = 'block'; pill.setAttribute('aria-expanded', 'true'); };
  var closeCard = function () { card.style.display = 'none'; pill.setAttribute('aria-expanded', 'false'); };
  var toggleCard = function () { card.style.display === 'block' ? closeCard() : openCard(); };
  pill.addEventListener('click', function (e) { e.stopPropagation(); toggleCard(); pill.blur(); });
  card.addEventListener('click', function (e) { e.stopPropagation(); });
  doc.addEventListener('click', function (e) { if (card.style.display === 'block' && !card.contains(e.target)) closeCard(); });
  doc.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    var t = e.target; if (t && t.closest && t.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
    if (e.key === 'i' || e.key === 'I') { e.preventDefault(); toggleCard(); }
    else if (e.key === 'Escape' && card.style.display === 'block') { closeCard(); }
  });
  var update = function () {
    var m = currentMap();
    var hide = !m || startVisible();
    var key = m ? annotationUrl(m) + '|' + location.hash : null;
    if (hide) { pill.style.display = 'none'; closeCard(); return; }
    pill.innerHTML = ICON_INFO + '<span class="t">' + esc(m.title) + '</span><span class="yale-badge">Yale University Library</span>';
    pill.style.display = 'flex';
    if (key !== shownKey) { shownKey = key; if (card.style.display === 'block') renderCard(m); }
  };
  var mountSrc = function () {
    if (!doc.getElementById('yale-src')) { doc.head.appendChild(srcCss); doc.body.appendChild(pill); doc.body.appendChild(card); }
    update();
  };
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', mountSrc); else mountSrc();
  window.addEventListener('hashchange', update);
  setInterval(mountSrc, 700);

  // ---- Live app windows ----------------------------------------------------
  var appCss = doc.createElement('style');
  appCss.textContent =
    '#yale-app{position:fixed;z-index:2147481000;display:none;flex-direction:column;background:#fff;border-radius:14px;overflow:hidden;' +
    'box-shadow:0 12px 40px rgba(0,0,0,.35);border:1px solid rgba(0,0,0,.12)}' +
    '#yale-app .bar{flex:none;display:flex;align-items:center;gap:10px;padding:8px 12px;background:#f1f3f4;border-bottom:1px solid #ddd;' +
    'font:13px/1 system-ui,-apple-system,"Segoe UI",sans-serif;color:#333}' +
    '#yale-app .dots{display:flex;gap:6px}#yale-app .dots i{width:11px;height:11px;border-radius:50%;background:#ccc;display:block}' +
    '#yale-app .dots i:nth-child(1){background:#ff5f57}#yale-app .dots i:nth-child(2){background:#febc2e}#yale-app .dots i:nth-child(3){background:#28c840}' +
    '#yale-app .url{flex:1;min-width:0;background:#fff;border-radius:999px;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#555}' +
    '#yale-app a{color:#00356b;font-weight:600;text-decoration:none;white-space:nowrap}' +
    '#yale-app iframe{flex:1;width:100%;border:0;background:#fff}' +
    '#yale-sink{position:fixed;left:-9999px;top:0;width:1px;height:1px}';
  var app = doc.createElement('div'); app.id = 'yale-app';
  app.innerHTML = '<div class="bar"><span class="dots"><i></i><i></i><i></i></span><span class="url"></span><a target="_blank" rel="noopener">Open &#8599;</a></div>';
  var sink = doc.createElement('button'); sink.id = 'yale-sink'; sink.tabIndex = -1; sink.setAttribute('aria-hidden', 'true');
  var frames = {};
  var currentSlide = function () {
    if (!slideMaps || !slideMaps.slides) return null;
    var slug = decodeURIComponent((location.hash || '').replace(/^#/, ''));
    for (var i = 0; i < slideMaps.slides.length; i++) if (slideMaps.slides[i].slug === slug) return slideMaps.slides[i];
    return slug ? null : slideMaps.slides[0];
  };
  var place = function () {
    var panel = doc.getElementById('slideshow-reading-panel');
    var open = panel && panel.getAttribute('aria-hidden') !== 'true';
    var right = 24;
    if (open) {
      var box = (panel.closest('aside, section, [class*="panel"]') || panel).getBoundingClientRect();
      if (box.width > 0 && box.left > window.innerWidth * 0.3) right = Math.max(24, window.innerWidth - box.left + 16);
    }
    app.style.left = '24px'; app.style.top = '62px'; app.style.bottom = '96px'; app.style.right = right + 'px';
  };
  var showApp = function () {
    var slide = currentSlide();
    var url = slide && slide.embed;
    if (!url || startVisible()) { app.style.display = 'none'; return; }
    Object.keys(frames).forEach(function (k) { frames[k].style.display = k === url ? 'block' : 'none'; });
    if (!frames[url]) {
      var f = doc.createElement('iframe');
      f.src = url; f.title = url; f.allow = 'geolocation; fullscreen; clipboard-write'; f.loading = 'eager';
      frames[url] = f; app.appendChild(f);
    }
    app.querySelector('.url').textContent = url.replace(/^https?:\/\//, '');
    app.querySelector('a').href = url;
    place(); app.style.display = 'flex';
  };
  // Keep the keyboard with the slides unless the pointer is inside the app window.
  var pointerInApp = false;
  app.addEventListener('mouseenter', function () { pointerInApp = true; });
  app.addEventListener('mouseleave', function () { pointerInApp = false; if (doc.activeElement && doc.activeElement.tagName === 'IFRAME') sink.focus(); });
  setInterval(function () {
    if (!pointerInApp && doc.activeElement && doc.activeElement.tagName === 'IFRAME') sink.focus();
  }, 300);
  var mountApp = function () {
    if (!doc.getElementById('yale-app')) { doc.head.appendChild(appCss); doc.body.appendChild(app); doc.body.appendChild(sink); }
    showApp();
  };
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', mountApp); else mountApp();
  window.addEventListener('hashchange', showApp);
  window.addEventListener('resize', place);
  setInterval(mountApp, 500);
})();