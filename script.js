// SCROLL REVEAL (FADE IN)
;(function() {
  document.addEventListener("DOMContentLoaded", function(event) {
    var scrollFadeInEffectEls = document.querySelectorAll(
      ".scroll-fade-in-effect"
    );

    scrollFadeInInit(scrollFadeInEffectEls);

    window.addEventListener("scroll", function() {
      scrollFadeInEffect(scrollFadeInEffectEls);
    });
  });

  function scrollFadeInInit(currentElements) {
    var windowHeight = window.innerHeight;
    for (var i = 0; i < currentElements.length; i++) {
      var posFromTop = currentElements[i].getBoundingClientRect().top;
      if (posFromTop - windowHeight > 0) {
        currentElements[i].classList.add("is-hidden");
      }
    }
  }

  function scrollFadeInEffect(currentElements) {
    var windowHeight = window.innerHeight;
    for (var i = 0; i < currentElements.length; i++) {
      var posFromTop = currentElements[i].getBoundingClientRect().top;
      if (posFromTop - windowHeight <= 0) {
        currentElements[i].classList.remove("is-hidden");
      }
    }
  }
})();

// SCROLL REVEAL (TOP TO BOTTOM)
window.addEventListener('scroll',reveal);

  function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }



// TESTIMONIALS SWIPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });