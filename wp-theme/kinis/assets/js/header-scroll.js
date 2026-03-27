(function(){
  var header = document.querySelector('[data-component="header"]');
  if (!header) return;

  // Scroll → glass effect + theme detection
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var scrolled = y > 20;

    // Toggle scrolled classes
    if (scrolled) {
      header.setAttribute('data-header-scrolled', 'true');
    } else {
      header.setAttribute('data-header-scrolled', 'false');
    }

    // Detect background luminance at header position
    var headerHeight = 80;
    var elems = document.elementsFromPoint(window.innerWidth / 2, headerHeight);
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
        var r = parseInt(match[0]), g = parseInt(match[1]), b = parseInt(match[2]);
        var lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        isDark = lum < 0.5;
      }
    }

    // Update theme classes
    header.classList.remove('header-theme-dark', 'header-theme-light', 'glass', 'glass-header-light', 'bg-transparent');
    header.setAttribute('data-header-theme', isDark ? 'dark' : 'light');

    if (isDark) {
      header.classList.add('header-theme-dark');
      header.classList.add(scrolled ? 'glass' : 'bg-transparent');
    } else {
      header.classList.add('header-theme-light');
      header.classList.add(scrolled ? 'glass-header-light' : 'bg-transparent');
    }

    // Update logo brightness
    var logo = header.querySelector('img[alt="Kinis"]');
    if (logo) {
      if (isDark) {
        logo.style.filter = 'brightness(0) invert(1)';
      } else {
        logo.style.filter = '';
      }
    }

    // Update mobile menu button color
    var mobileBtn = header.querySelector('button[aria-label]');
    if (mobileBtn) {
      mobileBtn.style.color = isDark ? '#ffffff' : '#1a1a1a';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  var mobileBtn = header.querySelector('button[aria-label]');
  var mobileMenu = header.querySelector('.lg\\:hidden.fixed');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function() {
      var isOpen = mobileMenu.classList.contains('opacity-100');
      if (isOpen) {
        mobileMenu.classList.remove('opacity-100', 'visible');
        mobileMenu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
        document.body.style.overflow = '';
      } else {
        mobileMenu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100', 'visible');
        document.body.style.overflow = 'hidden';
      }
    });
  }
})();
