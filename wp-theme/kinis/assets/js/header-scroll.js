/**
 * Kinis Header - Scroll effects, theme detection, mobile menu toggle
 * Vanilla JS replacement for React state management
 */
(function() {
  'use strict';

  var header = document.querySelector('header[data-component="header"]');
  var mobileMenu = document.getElementById('kinis-mobile-menu');
  var menuBtn = document.querySelector('[data-menu-toggle]');
  var logo = header ? header.querySelector('img[alt="Kinis"]') : null;
  var isOpen = false;

  if (!header) return;

  // SVG icons
  var menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>';
  var closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';

  // Mobile menu toggle
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      isOpen = !isOpen;
      if (isOpen) {
        mobileMenu.style.opacity = '1';
        mobileMenu.style.visibility = 'visible';
        mobileMenu.style.pointerEvents = 'auto';
        document.body.style.overflow = 'hidden';
        menuBtn.innerHTML = closeIcon;
        menuBtn.setAttribute('aria-label', 'Đóng menu');
        // Force header black bg when menu open
        header.style.backgroundColor = '#000000';
        header.style.backdropFilter = 'none';
        header.style.webkitBackdropFilter = 'none';
        if (logo) logo.style.filter = 'brightness(0) invert(1)';
        menuBtn.style.color = '#ffffff';
      } else {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.visibility = 'hidden';
        mobileMenu.style.pointerEvents = 'none';
        document.body.style.overflow = '';
        menuBtn.innerHTML = menuIcon;
        menuBtn.setAttribute('aria-label', 'Mở menu');
        // Re-apply scroll state
        handleScroll();
      }
    });

    // Close menu when clicking a link
    var mobileLinks = mobileMenu.querySelectorAll('a');
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener('click', function() {
        if (isOpen) {
          isOpen = false;
          mobileMenu.style.opacity = '0';
          mobileMenu.style.visibility = 'hidden';
          mobileMenu.style.pointerEvents = 'none';
          document.body.style.overflow = '';
          menuBtn.innerHTML = menuIcon;
          menuBtn.setAttribute('aria-label', 'Mở menu');
          handleScroll();
        }
      });
    }
  }

  // Desktop nav links
  var navLinks = header.querySelectorAll('.header-nav-link');
  var navButtons = header.querySelectorAll('.header-submenu-trigger');

  function getTheme() {
    var headerHeight = 80;
    var elements = document.elementsFromPoint(window.innerWidth / 2, headerHeight);
    var section = null;
    for (var i = 0; i < elements.length; i++) {
      var tag = elements[i].tagName;
      if (tag === 'SECTION' || tag === 'FOOTER') {
        section = elements[i];
        break;
      }
    }
    if (!section) return 'dark';
    var bg = window.getComputedStyle(section).backgroundColor;
    var match = bg.match(/\d+/g);
    if (!match) return 'dark';
    var r = parseInt(match[0]), g = parseInt(match[1]), b = parseInt(match[2]);
    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5 ? 'dark' : 'light';
  }

  function handleScroll() {
    if (isOpen) return; // Don't change header while menu is open

    var scrolled = window.scrollY > 20;
    var theme = getTheme();
    var isDark = theme === 'dark';

    header.setAttribute('data-header-scrolled', scrolled ? 'true' : 'false');
    header.setAttribute('data-header-theme', theme);

    // Background
    if (scrolled) {
      header.style.backgroundColor = isDark ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.85)';
      header.style.backdropFilter = 'blur(16px)';
      header.style.webkitBackdropFilter = 'blur(16px)';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.backdropFilter = 'none';
      header.style.webkitBackdropFilter = 'none';
    }

    // Logo
    if (logo) {
      logo.style.filter = isDark ? 'brightness(0) invert(1)' : 'none';
    }

    // Nav link colors (desktop)
    var textColor = isDark ? '#ffffff' : '#1a1a1a';
    var activeColor = 'hsl(27,100%,52%)';
    
    for (var i = 0; i < navLinks.length; i++) {
      var link = navLinks[i];
      var isActive = link.classList.contains('text-secondary') || 
                     link.getAttribute('data-active') === 'true' ||
                     (link.href && window.location.href === link.href);
      link.style.color = isActive ? activeColor : textColor;
    }
    for (var j = 0; j < navButtons.length; j++) {
      var btn = navButtons[j];
      var parentActive = btn.classList.contains('text-secondary');
      btn.style.color = parentActive ? activeColor : textColor;
    }

    // Hamburger button color
    if (menuBtn) {
      menuBtn.style.color = isDark ? '#ffffff' : '#1a1a1a';
    }
  }

  // Initial call + scroll listener
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
})();
