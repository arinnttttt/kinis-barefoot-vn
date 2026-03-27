(function(){
'use strict';
var header=document.querySelector('header[data-component="header"]');
var mobileMenu=document.getElementById('kinis-mobile-menu');
var menuBtn=document.querySelector('[data-menu-toggle]');
var logo=header?header.querySelector('img[alt="Kinis"]'):null;
var isOpen=false;
if(!header)return;
var menuIcon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>';
var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
if(menuBtn&&mobileMenu){
  menuBtn.addEventListener('click',function(){
    isOpen=!isOpen;
    if(isOpen){
      mobileMenu.style.opacity='1';mobileMenu.style.visibility='visible';mobileMenu.style.pointerEvents='auto';
      document.body.style.overflow='hidden';menuBtn.innerHTML=closeIcon;
      menuBtn.setAttribute('aria-label','Đóng menu');
      header.style.backgroundColor='#000000';header.style.backdropFilter='none';header.style.webkitBackdropFilter='none';
      if(logo)logo.style.filter='brightness(0) invert(1)';menuBtn.style.color='#ffffff';
    }else{
      mobileMenu.style.opacity='0';mobileMenu.style.visibility='hidden';mobileMenu.style.pointerEvents='none';
      document.body.style.overflow='';menuBtn.innerHTML=menuIcon;
      menuBtn.setAttribute('aria-label','Mở menu');handleScroll();
    }
  });
  var links=mobileMenu.querySelectorAll('a');
  for(var i=0;i<links.length;i++){
    links[i].addEventListener('click',function(){
      if(isOpen){isOpen=false;mobileMenu.style.opacity='0';mobileMenu.style.visibility='hidden';mobileMenu.style.pointerEvents='none';
      document.body.style.overflow='';menuBtn.innerHTML=menuIcon;menuBtn.setAttribute('aria-label','Mở menu');handleScroll();}
    });
  }
}
var navLinks=header.querySelectorAll('.header-nav-link');
var navBtns=header.querySelectorAll('.header-submenu-trigger');
function getTheme(){
  var h=80;var els=document.elementsFromPoint(window.innerWidth/2,h);var sec=null;
  for(var i=0;i<els.length;i++){var t=els[i].tagName;if(t==='SECTION'||t==='FOOTER'){sec=els[i];break;}}
  if(!sec)return'dark';var bg=window.getComputedStyle(sec).backgroundColor;var m=bg.match(/\d+/g);
  if(!m)return'dark';var r=parseInt(m[0]),g=parseInt(m[1]),b=parseInt(m[2]);
  return(0.299*r+0.587*g+0.114*b)/255<0.5?'dark':'light';
}
function handleScroll(){
  if(isOpen)return;var scrolled=window.scrollY>20;var theme=getTheme();var isDark=theme==='dark';
  header.setAttribute('data-header-scrolled',scrolled?'true':'false');header.setAttribute('data-header-theme',theme);
  if(scrolled){header.style.backgroundColor=isDark?'rgba(0,0,0,0.75)':'rgba(255,255,255,0.85)';
    header.style.backdropFilter='blur(16px)';header.style.webkitBackdropFilter='blur(16px)';
  }else{header.style.backgroundColor='transparent';header.style.backdropFilter='none';header.style.webkitBackdropFilter='none';}
  if(logo)logo.style.filter=isDark?'brightness(0) invert(1)':'none';
  var tc=isDark?'#ffffff':'#1a1a1a';var ac='hsl(27,100%,52%)';
  for(var i=0;i<navLinks.length;i++){var l=navLinks[i];
    var isA=l.classList.contains('text-secondary')||(l.href&&window.location.href===l.href);
    l.style.color=isA?ac:tc;}
  for(var j=0;j<navBtns.length;j++){navBtns[j].style.color=navBtns[j].classList.contains('text-secondary')?ac:tc;}
  if(menuBtn)menuBtn.style.color=isDark?'#ffffff':'#1a1a1a';
}
handleScroll();window.addEventListener('scroll',handleScroll,{passive:true});
})();