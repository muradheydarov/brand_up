
// animation for triangle
var anime = document.querySelector('.animation');
setInterval(function(){
    anime.classList.toggle('active');}, 2000);
    
// animation for text
  document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.element', {
        strings: ["<span class='main_text'><span>HAL-HAZIRDA BU YAZININ ALTINDA,</span> <br> <span>DƏLİSOV KODLAR YAZILIR. <span><br> <span class='last_span'>TEZLİKLƏ YENİDƏN BAŞ ÇƏKİN!</span></span>"],
        typeSpeed: 50,
        delay:1000
      });
  });
