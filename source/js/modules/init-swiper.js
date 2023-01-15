import Swiper, {Navigation, A11y} from 'swiper';

const coaches = document.querySelector('.coaches--no-js');
const reviews = document.querySelector('.reviews--no-js');

coaches.classList.remove('coaches--no-js');
reviews.classList.remove('reviews--no-js');

export function initSwiperCoaches() {
  const initSwiper = new Swiper('.coaches__container', {
    autoHeight: true,
    breakpoints: {

      320: {
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 0,
      },

      768: {
        initialSlide: 2,
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        initialSlide: 0,
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    direction: 'horizontal',
    grabCursor: true,
    keyboard: true,
    loop: true,
    modules: [Navigation, A11y],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

export function initSwiperReviews() {
  const initSwiper = new Swiper('.reviews__container', {
    autoHeight: true,
    direction: 'horizontal',
    grabCursor: true,
    keyboard: true,
    loop: true,
    modules: [Navigation, A11y],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 80,
  });
}
