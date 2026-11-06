// Full-screen helper for the Allmaps at Yale Library deck.
// Adds: full screen on clicking Start, an on-screen toggle button, and the F key.
(function () {
  var doc = document, root = doc.documentElement;
  var isFull = function () { return !!(doc.fullscreenElement || doc.webkitFullscreenElement); };
  var enter = function () {
    var req = root.requestFullscreen || root.webkitRequestFullscreen;
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
})();
