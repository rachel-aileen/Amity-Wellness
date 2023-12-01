// HEADER SCROLL 
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// SUBMENU SCROLL
window.addEventListener('scroll', function() {
    var submenu = document.querySelector('.sub-menu');
    if (window.scrollY > 0) {
        submenu.style.backgroundColor = '#FFFEFC';  
    } else {
        submenu.style.backgroundColor = 'transparent';
    }
});


// SCROLL REVEAL (FADE IN)
;(function() {
  document.addEventListener("DOMContentLoaded", function(event) {
  
    function handleScroll() {
      var scrollFadeInEffectEls = document.querySelectorAll(".scroll-fade-in-effect");

      scrollFadeInEffectEls.forEach(element => {
        var windowHeight = window.innerHeight;
        var posFromTop = element.getBoundingClientRect().top;

        if (posFromTop - windowHeight <= 0) {
          element.classList.remove("is-hidden");
        } else {
          element.classList.add("is-hidden");
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
  });
})();

// SCROLL REVEAL (RIGHT AND LEFT)
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// SCROLL REVEAL (TOP TO BOTTOM)
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
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