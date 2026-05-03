(function(){
'use strict';
function ready(fn){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fn,{once:true});}else{fn();}}
ready(function(){
  var header=document.querySelector('header[data-component="header"]');
  var mobileMenu=document.getElementById('kinis-mobile-menu');
  var menuBtn=document.querySelector('[data-menu-toggle]');
  var logo=header?header.querySelector('img[alt="Kinis"]'):null;
  var isOpen=false;
  if(!header)return;

  var menuIcon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>';
  var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';

  function getPath(){return (window.location.pathname||'/').replace(/\/+$/,'/')||'/';}
  function hrefPath(el){try{return new URL(el.getAttribute('href')||'',window.location.origin).pathname.replace(/\/+$/,'/')||'/';}catch(e){return '';}}
  function isActive(el){var p=hrefPath(el),cur=getPath();return p&&p===cur;}

  // Detect hero background luminance ONCE on page load
  var heroDark=true;
  function detectHero(){
    var h=window.innerWidth>=1024?80:64;
    var els=document.elementsFromPoint(Math.max(1,window.innerWidth/2),h+1);
    var sec=null;
    for(var i=0;i<els.length;i++){var tag=els[i].tagName;if(tag==='SECTION'||tag==='FOOTER'||tag==='MAIN'){sec=els[i];break;}}
    if(!sec)return;
    var node=sec;
    while(node&&node!==document.body){
      var bg=window.getComputedStyle(node).backgroundColor;
      var m=bg&&bg.match(/[\d.]+/g);
      if(m&&m.length>=3&&!(m.length>=4&&parseFloat(m[3])===0)){
        var r=parseFloat(m[0]),g=parseFloat(m[1]),b=parseFloat(m[2]);
        heroDark=(0.299*r+0.587*g+0.114*b)/255<0.5;
        return;
      }
      node=node.parentElement;
    }
  }
  setTimeout(detectHero,100);

  function handleScroll(){
    if(isOpen)return;
    var scrolled=window.scrollY>20;
    // Not scrolled: follow hero luminance. Scrolled: always light (white glassmorphism, dark text).
    var barIsDark=!scrolled&&heroDark;

    header.setAttribute('data-header-scrolled',scrolled?'true':'false');
    header.setAttribute('data-header-theme',barIsDark?'dark':'light');

    if(scrolled){
      header.style.backgroundColor='rgba(255,255,255,0.85)';
      header.style.backdropFilter='blur(16px)';
      header.style.webkitBackdropFilter='blur(16px)';
    }else{
      header.style.backgroundColor='transparent';
      header.style.backdropFilter='none';
      header.style.webkitBackdropFilter='none';
    }
    if(logo)logo.style.filter=barIsDark?'brightness(0) invert(1)':'none';
    var tc=barIsDark?'#ffffff':'#1a1a1a';
    var ac='hsl(27,100%,52%)';
    var navItems=header.querySelectorAll('.header-nav-link,.header-submenu-trigger');
    for(var i=0;i<navItems.length;i++){
      var el=navItems[i];
      var active=el.classList.contains('text-secondary')||isActive(el)||(el.closest('.group')&&el.closest('.group').querySelector('.header-dropdown-link[data-active="true"]'));
      el.style.color=active?ac:tc;
      el.style.webkitTextFillColor=active?ac:tc;
    }
    if(menuBtn){menuBtn.style.color=barIsDark?'#ffffff':'#1a1a1a';menuBtn.style.webkitTextFillColor=barIsDark?'#ffffff':'#1a1a1a';}
  }

  function closeMobile(){
    isOpen=false;
    if(mobileMenu){mobileMenu.style.opacity='0';mobileMenu.style.visibility='hidden';mobileMenu.style.pointerEvents='none';}
    document.body.style.overflow='';
    if(menuBtn){menuBtn.innerHTML=menuIcon;menuBtn.setAttribute('aria-label','Mở menu');}
    handleScroll();
  }

  if(menuBtn&&mobileMenu){
    menuBtn.addEventListener('click',function(){
      isOpen=!isOpen;
      if(isOpen){
        mobileMenu.style.opacity='1';mobileMenu.style.visibility='visible';mobileMenu.style.pointerEvents='auto';
        document.body.style.overflow='hidden';menuBtn.innerHTML=closeIcon;menuBtn.setAttribute('aria-label','Đóng menu');
        header.style.backgroundColor='#000000';header.style.backdropFilter='none';header.style.webkitBackdropFilter='none';
        if(logo)logo.style.filter='brightness(0) invert(1)';menuBtn.style.color='#ffffff';menuBtn.style.webkitTextFillColor='#ffffff';
      }else{closeMobile();}
    });
    var links=mobileMenu.querySelectorAll('a');
    for(var i=0;i<links.length;i++){links[i].addEventListener('click',closeMobile);}
  }

  handleScroll();
  window.addEventListener('scroll',handleScroll,{passive:true});
  window.addEventListener('resize',handleScroll,{passive:true});
});
})();
