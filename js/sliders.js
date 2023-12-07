var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
  992: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  576: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  }
  }
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
  992: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  768: {
    autoHeight: true,
    slidesPerView: 2,
    spaceBetween: 20,
  },
  576: {
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 0,
  },
  320: {
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 0,
  }
  }
});


var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  breakpoints: {
  992: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  576: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  320: {
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 0,
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