(function(){
  var header = document.querySelector('[data-component="header"]');
  if (!header) return;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var scrolled = y > 20;
    header.setAttribute('data-header-scrolled', scrolled ? 'true' : 'false');
    var elems = document.elementsFromPoint(window.innerWidth / 2, 80);
    var section = null;
    for (var i = 0; i < elems.length; i++) {
      var tag = elems[i].tagName;
      if (tag === 'SECTION' || tag === 'FOOTER') { section = elems[i]; break; }
    }
    var isDark = true;
    if (section) {
      var bg = window.getComputedStyle(section).backgroundColor;
      var match = bg.match(/\d+/g);
      if (match) {
        var lum = (0.299*parseInt(match[0]) + 0.587*parseInt(match[1]) + 0.114*parseInt(match[2])) / 255;
        isDark = lum < 0.5;
      }
    }
    header.classList.remove('header-theme-dark','header-theme-light','glass','glass-header-light','bg-transparent');
    header.setAttribute('data-header-theme', isDark ? 'dark' : 'light');
    header.classList.add(isDark ? 'header-theme-dark' : 'header-theme-light');
    header.classList.add(scrolled ? (isDark ? 'glass' : 'glass-header-light') : 'bg-transparent');
    var logo = header.querySelector('img[alt="Kinis"]');
    if (logo) logo.style.filter = isDark ? 'brightness(0) invert(1)' : 'none';
    var btn = header.querySelector('button[aria-label]');
    if (btn) btn.style.color = isDark ? '#ffffff' : '#1a1a1a';
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
  var btn = header.querySelector('button[aria-label]');
  var menu = null;
  var divs = header.querySelectorAll('div');
  for (var i=0;i<divs.length;i++) {
    if (divs[i].classList.contains('fixed') && divs[i].classList.contains('inset-0')) { menu=divs[i]; break; }
  }
  if (btn && menu) {
    btn.addEventListener('click', function(){
      var isOpen = menu.classList.contains('opacity-100');
      if (isOpen) {
        menu.classList.remove('opacity-100','visible');
        menu.classList.add('opacity-0','invisible','pointer-events-none');
        document.body.style.overflow='';
      } else {
        menu.classList.remove('opacity-0','invisible','pointer-events-none');
        menu.classList.add('opacity-100','visible');
        document.body.style.overflow='hidden';
      }
    });
  }
})();
