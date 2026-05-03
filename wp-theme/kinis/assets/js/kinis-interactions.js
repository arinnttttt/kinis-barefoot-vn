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

// ============ LUCY COLOR CAROUSEL ============
var lucyCarousel = document.querySelector('[data-lucy-carousel]');
if (lucyCarousel) {
  var lcVariants = [
    { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-red-scaled.png', label: 'Đỏ', color: 'hsl(0 75% 35%)' },
    { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-white-scaled.png', label: 'Trắng', color: 'hsl(40 30% 90%)' },
    { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-gray-scaled.png', label: 'Xám', color: 'hsl(0 0% 60%)' },
    { src: 'https://kinis.vn/wp-content/uploads/2026/05/lucy-black-scaled.png', label: 'Đen', color: 'hsl(0 0% 15%)' }
  ];
  var lcActive = 0;
  var lcContainer = lucyCarousel.querySelector('.flex.items-end');
  var lcButtons = lcContainer ? lcContainer.querySelectorAll('button') : [];

  function lcUpdate() {
    var offsets = [-1, 0, 1];
    // Ensure we have exactly 3 buttons
    if (lcButtons.length !== 3) return;
    offsets.forEach(function(offset, i) {
      var idx = (lcActive + offset + lcVariants.length) % lcVariants.length;
      var v = lcVariants[idx];
      var btn = lcButtons[i];
      var isCenter = offset === 0;
      var img = btn.querySelector('img');
      var labelDiv = btn.querySelector('.mt-3');
      var colorDot = labelDiv ? labelDiv.querySelector('.rounded-full') : null;
      var labelSpan = labelDiv ? labelDiv.querySelector('.font-display') : null;

      if (img) { img.src = v.src; img.alt = 'Kinis Lucy ' + v.label; }
      btn.setAttribute('aria-label', 'Chọn màu ' + v.label);
      btn.style.opacity = isCenter ? '1' : '0.35';
      btn.style.transform = isCenter ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.82)';
      btn.style.width = isCenter ? 'clamp(12rem, 30vw, 24rem)' : 'clamp(6rem, 17vw, 12rem)';
      btn.style.cursor = isCenter ? 'default' : 'pointer';
      if (labelDiv) {
        labelDiv.style.opacity = isCenter ? '1' : '0';
        labelDiv.setAttribute('aria-hidden', isCenter ? 'false' : 'true');
      }
      if (colorDot) { colorDot.style.backgroundColor = v.color; }
      if (labelSpan) { labelSpan.textContent = v.label; }
    });
  }

  // Click handlers
  lcButtons.forEach(function(btn, i) {
    btn.addEventListener('click', function() {
      var offsets = [-1, 0, 1];
      if (offsets[i] !== 0) {
        var clickedIdx = (lcActive + offsets[i] + lcVariants.length) % lcVariants.length;
        lcActive = clickedIdx;
        lcUpdate();
      }
    });
  });

  // Auto rotate
  var lcTimer = setInterval(function() {
    lcActive = (lcActive + 1) % lcVariants.length;
    lcUpdate();
  }, 3000);

  lcUpdate();
}

})();