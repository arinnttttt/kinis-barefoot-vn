(function(){
'use strict';

// ============ TESTIMONIAL CAROUSEL ============
var testimonialSection = document.querySelector('[aria-labelledby="testimonial-heading"]');
if (testimonialSection) {
  var track = testimonialSection.querySelector('[class*="overflow-x-auto"]');
  var prevBtn = testimonialSection.querySelector('[aria-label="Previous"]');
  var nextBtn = testimonialSection.querySelector('[aria-label="Next"]');
  
  function updateArrows() {
    if (!track || !prevBtn || !nextBtn) return;
    var canPrev = track.scrollLeft > 2;
    var canNext = track.scrollLeft < track.scrollWidth - track.clientWidth - 2;
    prevBtn.style.backgroundColor = canPrev ? 'hsl(0,0%,10%)' : 'hsl(0,0%,85%)';
    prevBtn.style.opacity = canPrev ? '1' : '0.5';
    prevBtn.disabled = !canPrev;
    nextBtn.style.backgroundColor = canNext ? 'hsl(0,0%,10%)' : 'hsl(0,0%,85%)';
    nextBtn.style.opacity = canNext ? '1' : '0.5';
    nextBtn.disabled = !canNext;
  }
  
  if (track) {
    track.addEventListener('scroll', updateArrows, {passive:true});
    window.addEventListener('resize', updateArrows);
    updateArrows();
  }
  if (prevBtn) prevBtn.addEventListener('click', function() {
    if (track) track.scrollBy({left: -340, behavior: 'smooth'});
  });
  if (nextBtn) nextBtn.addEventListener('click', function() {
    if (track) track.scrollBy({left: 340, behavior: 'smooth'});
  });
}

// ============ VIDEO AUTOPLAY ON SCROLL ============
var videoSections = document.querySelectorAll('video');
videoSections.forEach(function(video) {
  var section = video.closest('section');
  if (!section) return;
  
  video.volume = 0.1;
  
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        video.play().catch(function(){});
      } else {
        video.pause();
      }
    });
  }, {threshold: 0.4});
  
  observer.observe(section);
  
  // Mute/Unmute button
  var muteBtn = section.querySelector('button[aria-label]');
  if (muteBtn && (muteBtn.getAttribute('aria-label').indexOf('âm thanh') !== -1 || muteBtn.getAttribute('aria-label').indexOf('Bật') !== -1 || muteBtn.getAttribute('aria-label').indexOf('Tắt') !== -1)) {
    muteBtn.addEventListener('click', function() {
      video.muted = !video.muted;
      var mutedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
      var unmutedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>';
      muteBtn.innerHTML = video.muted ? mutedSvg : unmutedSvg;
      muteBtn.setAttribute('aria-label', video.muted ? 'Bật âm thanh' : 'Tắt âm thanh');
    });
  }
});

// ============ HOME FAQ ACCORDION ============
var homeFaqSection = document.querySelector('[aria-labelledby="home-faq-heading"]');
if (homeFaqSection) {
  var faqItems = homeFaqSection.querySelectorAll('[class*="border-b"]');
  var currentOpen = null;
  
  faqItems.forEach(function(item, index) {
    var btn = item.querySelector('button');
    var answer = item.querySelector('[class*="overflow-hidden"]');
    var chevron = btn ? btn.querySelector('svg') : null;
    if (!btn || !answer) return;
    
    btn.addEventListener('click', function() {
      if (currentOpen === index) {
        // Close current
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        if (chevron) chevron.style.transform = '';
        currentOpen = null;
      } else {
        // Close previous
        if (currentOpen !== null) {
          var prevItem = faqItems[currentOpen];
          if (prevItem) {
            var prevAnswer = prevItem.querySelector('[class*="overflow-hidden"]');
            var prevChevron = prevItem.querySelector('button svg');
            if (prevAnswer) { prevAnswer.style.maxHeight = '0px'; prevAnswer.style.opacity = '0'; }
            if (prevChevron) prevChevron.style.transform = '';
          }
        }
        // Open new
        answer.style.maxHeight = '500px';
        answer.style.opacity = '1';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
        currentOpen = index;
      }
    });
  });
}

// ============ LUCY COLOR CAROUSEL (STATIC WORDPRESS) ============
function initLucyCarousels() {
  var variants = [
    { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-red-scaled.png', label: 'Đỏ', color: 'hsl(0 75% 35%)' },
    { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-white-scaled.png', label: 'Trắng', color: 'hsl(40 30% 90%)' },
    { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-gray-scaled.png', label: 'Xám', color: 'hsl(0 0% 60%)' },
    { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-black-scaled.png', label: 'Đen', color: 'hsl(0 0% 15%)' }
  ];

  document.querySelectorAll('[data-lucy-carousel]').forEach(function(carousel) {
    if (carousel.getAttribute('data-lucy-ready') === 'true') return;

    var buttons = Array.prototype.slice.call(carousel.querySelectorAll('button'));
    if (!buttons.length) return;

    carousel.setAttribute('data-lucy-ready', 'true');
    var center = Math.floor(buttons.length / 2);
    var active = 0;
    var timer = null;

    buttons.forEach(function(button, index) {
      var img = button.querySelector('img');
      var isActiveButton = button.style.opacity === '1' || button.getAttribute('aria-current') === 'true';
      if (img && isActiveButton) {
        var src = img.getAttribute('src') || '';
        variants.forEach(function(item, variantIndex) {
          if (src.indexOf(item.src) !== -1 || item.src.indexOf(src) !== -1) active = variantIndex;
        });
      } else if (index === center && img) {
        var fallbackSrc = img.getAttribute('src') || '';
        variants.forEach(function(item, variantIndex) {
          if (fallbackSrc.indexOf(item.src) !== -1 || item.src.indexOf(fallbackSrc) !== -1) active = variantIndex;
        });
      }
    });

    function wrap(index) {
      return (index + variants.length) % variants.length;
    }

    function render() {
      buttons.forEach(function(button, buttonIndex) {
        var offset = buttonIndex - center;
        var variantIndex = wrap(active + offset);
        var item = variants[variantIndex];
        var isActive = buttonIndex === center;
        var img = button.querySelector('img');
        var labelWrap = button.querySelector('div[aria-hidden]');
        var swatch = labelWrap ? labelWrap.querySelector('span:first-child') : null;
        var label = labelWrap ? labelWrap.querySelector('span:last-child') : null;

        button.setAttribute('data-lucy-variant-index', String(variantIndex));
        button.setAttribute('aria-label', 'Chọn màu ' + item.label);
        button.setAttribute('aria-current', isActive ? 'true' : 'false');
        button.style.opacity = isActive ? '1' : '0.35';
        button.style.transform = isActive ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.82)';
        button.style.width = isActive ? 'clamp(12rem, 30vw, 24rem)' : 'clamp(6rem, 17vw, 12rem)';
        button.style.cursor = isActive ? 'default' : 'pointer';

        if (img) {
          img.setAttribute('src', item.src);
          img.setAttribute('alt', 'Kinis Lucy ' + item.label);
          img.setAttribute('draggable', 'false');
        }
        if (labelWrap) {
          labelWrap.style.opacity = isActive ? '1' : '0';
          labelWrap.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        }
        if (swatch) swatch.style.backgroundColor = item.color;
        if (label) label.textContent = item.label;
      });
    }

    function goTo(index) {
      active = wrap(index);
      render();
    }

    function stopTimer() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function startTimer() {
      stopTimer();
      if (document.hidden) return;
      timer = window.setInterval(function() {
        goTo(active + 1);
      }, 3000);
    }

    buttons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        var nextIndex = parseInt(button.getAttribute('data-lucy-variant-index'), 10);
        if (!isNaN(nextIndex)) {
          goTo(nextIndex);
          startTimer();
        }
      });
    });

    document.addEventListener('visibilitychange', startTimer);
    render();
    startTimer();
  });
}

// ============ NOMAD COLOR CAROUSEL (STATIC WORDPRESS) ============
function initNomadCarousels() {
  var variants = [
    { src: 'https://kinis.vn/wp-content/uploads/2026/04/nomad-gray-scaled.png', label: 'Xám', color: 'hsl(0 0% 60%)' },
    { src: 'https://kinis.vn/wp-content/uploads/2026/04/nomad-black-scaled.png', label: 'Đen', color: 'hsl(0 0% 15%)' },
    { src: 'https://kinis.vn/wp-content/uploads/2026/04/nomad-red-scaled.png', label: 'Đỏ', color: 'hsl(0 75% 45%)' }
  ];

  document.querySelectorAll('[data-nomad-carousel]').forEach(function(carousel) {
    if (carousel.getAttribute('data-nomad-ready') === 'true') return;

    var buttons = Array.prototype.slice.call(carousel.querySelectorAll('button'));
    if (!buttons.length) return;

    carousel.setAttribute('data-nomad-ready', 'true');
    var center = Math.floor(buttons.length / 2);
    var active = 1;
    var timer = null;

    buttons.forEach(function(button, index) {
      var img = button.querySelector('img');
      var isActiveButton = button.style.opacity === '1' || button.getAttribute('aria-current') === 'true';
      if (img && isActiveButton) {
        var src = img.getAttribute('src') || '';
        variants.forEach(function(item, variantIndex) {
          if (src.indexOf(item.src) !== -1 || item.src.indexOf(src) !== -1) active = variantIndex;
        });
      } else if (index === center && img) {
        var fallbackSrc = img.getAttribute('src') || '';
        variants.forEach(function(item, variantIndex) {
          if (fallbackSrc.indexOf(item.src) !== -1 || item.src.indexOf(fallbackSrc) !== -1) active = variantIndex;
        });
      }
    });

    function wrap(index) {
      return (index + variants.length) % variants.length;
    }

    function render() {
      buttons.forEach(function(button, buttonIndex) {
        var offset = buttonIndex - center;
        var variantIndex = wrap(active + offset);
        var item = variants[variantIndex];
        var isActive = buttonIndex === center;
        var img = button.querySelector('img');
        var labelWrap = button.querySelector('div[aria-hidden]');
        var swatch = labelWrap ? labelWrap.querySelector('span:first-child') : null;
        var label = labelWrap ? labelWrap.querySelector('span:last-child') : null;

        button.setAttribute('data-nomad-variant-index', String(variantIndex));
        button.setAttribute('aria-label', 'Chọn màu ' + item.label);
        button.setAttribute('aria-current', isActive ? 'true' : 'false');
        button.style.opacity = isActive ? '1' : '0.35';
        button.style.transform = isActive ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.82)';
        button.style.width = isActive ? 'clamp(12rem, 30vw, 24rem)' : 'clamp(6rem, 17vw, 12rem)';
        button.style.cursor = isActive ? 'default' : 'pointer';

        if (img) {
          img.setAttribute('src', item.src);
          img.setAttribute('alt', 'Kinis Nomad ' + item.label);
          img.setAttribute('draggable', 'false');
        }
        if (labelWrap) {
          labelWrap.style.opacity = isActive ? '1' : '0';
          labelWrap.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        }
        if (swatch) swatch.style.backgroundColor = item.color;
        if (label) label.textContent = item.label;
      });
    }

    function goTo(index) {
      active = wrap(index);
      render();
    }

    function stopTimer() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function startTimer() {
      stopTimer();
      if (document.hidden) return;
      timer = window.setInterval(function() {
        goTo(active + 1);
      }, 3000);
    }

    buttons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        var nextIndex = parseInt(button.getAttribute('data-nomad-variant-index'), 10);
        if (!isNaN(nextIndex)) {
          goTo(nextIndex);
          startTimer();
        }
      });
    });

    document.addEventListener('visibilitychange', startTimer);
    render();
    startTimer();
  });
}

function initAllCarousels() {
  initLucyCarousels();
  initNomadCarousels();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllCarousels, { once: true });
} else {
  initAllCarousels();
}

})();