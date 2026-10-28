(function () {
  var header = document.querySelector('.siteheader');
  var toggle = document.querySelector('.menu-toggle');
  if (!header || !toggle) { return; }
  toggle.addEventListener('click', function () {
    var open = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
      header.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  });
})();
