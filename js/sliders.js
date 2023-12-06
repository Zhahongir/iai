var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
  992: {
    slidesPerView: 1.6,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 'auto',
    spaceBetween: 20,
  },
  576: {
    slidesPerView: 'auto',
    spaceBetween: 20,
  },
  320: {
    slidesPerView: 'auto',
    spaceBetween: 20,
  }
  }
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 'auto',
  autoHeight: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
  992: {
    slidesPerView: 1.6,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 'auto',
    spaceBetween: 20,
  },
  576: {
    slidesPerView: 'auto',
    spaceBetween: 20,
  },
  320: {
    slidesPerView: 'auto',
    spaceBetween: 20,
  }
  }
});


var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  breakpoints: {
  992: {
    slidesPerView: 'auto',
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 'auto',
    spaceBetween: 20,
  },
  576: {
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 20,
  },
  320: {
    slidesPerView: 'auto',
    spaceBetween: 20,
  }
  }
});

// Autoplay 
const splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  perPage: 3,
  arrows: false,
  autoWidth: true,
  pagination: false,
  gap: 40,
  autoScroll: {
      speed: 1,
  },
} );

splide.mount(window.splide.Extensions);