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

// ============ COLOR CAROUSEL (Lucy & Nomad) ============
function initColorCarousel(selector) {
  var section = document.querySelector(selector);
  if (!section) return;
  var buttons = section.querySelectorAll('button[aria-label]');
  if (buttons.length < 2) return;
  
  var total = buttons.length;
  // The pre-rendered HTML shows 3 visible slots: offsets [-1, 0, 1]
  // We need to figure out total variants and active index from the data
  // Lucy has 4 variants, Nomad has 3
  var isLucy = selector.indexOf('lucy') !== -1;
  var variantCount = isLucy ? 4 : 3;
  var active = isLucy ? 0 : 1;
  
  function applyState() {
    // Calculate the 3 visible indices
    var indices = [
      (active - 1 + variantCount) % variantCount,
      active,
      (active + 1) % variantCount
    ];
    
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var isCenter = (i === 1); // middle button is always the active one
      var idx = indices[i];
      
      // Update image src and alt
      var img = btn.querySelector('img');
      var label = btn.querySelector('.mt-3');
      var colorDot = btn.querySelector('.rounded-full');
      
      if (img) {
        img.src = getVariantSrc(selector, idx);
        img.alt = getVariantAlt(selector, idx);
      }
      if (label) {
        label.style.opacity = isCenter ? '1' : '0';
      }
      
      // Apply scale/opacity
      btn.style.opacity = isCenter ? '1' : '0.35';
      btn.style.transform = isCenter ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.82)';
      btn.style.width = isCenter ? 'clamp(12rem, 30vw, 24rem)' : 'clamp(6rem, 17vw, 12rem)';
      btn.style.cursor = isCenter ? 'default' : 'pointer';
      
      // Update color dot
      if (colorDot) {
        colorDot.style.backgroundColor = getVariantColor(selector, idx);
      }
      // Update label text
      var labelText = btn.querySelector('.font-display.font-semibold');
      if (labelText) {
        labelText.textContent = getVariantLabel(selector, idx);
      }
    }
  }
  
  // Click handlers
  for (var i = 0; i < buttons.length; i++) {
    (function(index) {
      buttons[index].addEventListener('click', function() {
        if (index === 1) return; // center, do nothing
        if (index === 0) {
          // Previous
          active = (active - 1 + variantCount) % variantCount;
        } else {
          // Next
          active = (active + 1) % variantCount;
        }
        applyState();
      });
    })(i);
  }
  
  // Autoplay every 3 seconds
  var timer = setInterval(function() {
    active = (active + 1) % variantCount;
    applyState();
  }, 3000);
  
  // Pause on hover
  section.addEventListener('mouseenter', function() { clearInterval(timer); });
  section.addEventListener('mouseleave', function() {
    timer = setInterval(function() {
      active = (active + 1) % variantCount;
      applyState();
    }, 3000);
  });
}

// Lucy variant data
var lucyVariants = [
  { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-red-scaled.png', label: 'Đỏ', color: 'hsl(0,75%,35%)' },
  { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-white-scaled.png', label: 'Trắng', color: 'hsl(40,30%,90%)' },
  { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-gray-scaled.png', label: 'Xám', color: 'hsl(0,0%,60%)' },
  { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-black-scaled.png', label: 'Đen', color: 'hsl(0,0%,15%)' }
];
var nomadVariants = [
  { src: 'https://kinis.vn/wp-content/uploads/2026/04/nomad-gray-scaled.png', label: 'Xám', color: 'hsl(0,0%,60%)' },
  { src: 'https://kinis.vn/wp-content/uploads/2026/04/nomad-black-scaled.png', label: 'Đen', color: 'hsl(0,0%,15%)' },
  { src: 'https://kinis.vn/wp-content/uploads/2026/04/nomad-red-scaled.png', label: 'Đỏ', color: 'hsl(0,75%,45%)' }
];

function getVariants(selector) {
  return selector.indexOf('lucy') !== -1 ? lucyVariants : nomadVariants;
}
function getVariantSrc(selector, idx) { return getVariants(selector)[idx].src; }
function getVariantAlt(selector, idx) {
  var name = selector.indexOf('lucy') !== -1 ? 'Kinis Lucy' : 'Kinis Nomad';
  return name + ' ' + getVariants(selector)[idx].label;
}
function getVariantColor(selector, idx) { return getVariants(selector)[idx].color; }
function getVariantLabel(selector, idx) { return getVariants(selector)[idx].label; }

initColorCarousel('[data-lucy-carousel]');
initColorCarousel('[data-nomad-carousel]');

// ============ APOLLO COLOR CAROUSEL (2 variants) ============
var apolloVariants = [
  { src: 'https://kinis.vn/wp-content/uploads/2026/05/apollo-black-scaled.png', label: 'Cam', color: 'hsl(27,100%,52%)' },
  { src: 'https://kinis.vn/wp-content/uploads/2026/05/apollo-orange-scaled.png', label: 'Đen', color: 'hsl(0,0%,15%)' }
];

(function initApolloCarousel() {
  var section = document.querySelector('[data-apollo-carousel]');
  if (!section) return;
  var buttons = section.querySelectorAll('button[aria-label]');
  if (buttons.length < 2) return;

  var active = 0;

  function applyState() {
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var isActive = (i === active);
      var v = apolloVariants[i];
      var img = btn.querySelector('img');
      var label = btn.querySelector('.mt-3');
      var colorDot = btn.querySelector('.rounded-full');
      var labelText = btn.querySelector('.font-display.font-semibold');

      if (img) { img.src = v.src; img.alt = 'Kinis Apollo Pro ' + v.label; }
      if (label) label.style.opacity = isActive ? '1' : '0';
      if (colorDot) colorDot.style.backgroundColor = v.color;
      if (labelText) labelText.textContent = v.label;

      btn.style.opacity = isActive ? '1' : '0.35';
      btn.style.transform = isActive ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.82)';
      btn.style.width = isActive ? 'clamp(12rem, 30vw, 24rem)' : 'clamp(6rem, 17vw, 12rem)';
      btn.style.cursor = isActive ? 'default' : 'pointer';
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    (function(index) {
      buttons[index].addEventListener('click', function() {
        active = index;
        applyState();
      });
    })(i);
  }

  var timer = setInterval(function() {
    active = (active + 1) % apolloVariants.length;
    applyState();
  }, 3000);

  section.addEventListener('mouseenter', function() { clearInterval(timer); });
  section.addEventListener('mouseleave', function() {
    timer = setInterval(function() {
      active = (active + 1) % apolloVariants.length;
      applyState();
    }, 3000);
  });
})();

// ============ DEALER BUTTON TOOLTIP ============
(function() {
  var tooltip = null;
  var buttons = document.querySelectorAll('button');
  buttons.forEach(function(btn) {
    if (btn.textContent.trim().indexOf('Mua Tr') === -1) return;
    if (btn.textContent.trim().indexOf('Đại Lý') === -1) return;
    
    btn.addEventListener('click', function(e) { e.preventDefault(); });
    
    btn.addEventListener('mousemove', function(e) {
      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.style.cssText = 'position:fixed;z-index:99999;pointer-events:none;background:hsl(0,0%,15%);color:#fff;font-size:13px;font-family:var(--font-body,sans-serif);padding:6px 12px;border-radius:8px;white-space:nowrap;box-shadow:0 4px 16px rgba(0,0,0,0.3);';
        tooltip.textContent = 'Hàng sắp có, vui lòng chờ thêm';
        document.body.appendChild(tooltip);
      }
      tooltip.style.left = (e.clientX + 14) + 'px';
      tooltip.style.top = (e.clientY + 14) + 'px';
    });
    
    btn.addEventListener('mouseleave', function() {
      if (tooltip) { tooltip.remove(); tooltip = null; }
    });
  });
})();

})();