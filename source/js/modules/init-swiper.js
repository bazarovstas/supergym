import Swiper, {Navigation, A11y} from 'swiper';

const coaches = document.querySelector('.coaches__no-js');
const reviews = document.querySelector('.reviews__no-js');

coaches.classList.remove('coaches__no-js');
reviews.classList.remove('reviews__no-js');

export const initSwiper = () => {
  const coachesSwiper = new Swiper('.coaches__container', {
    slidesPerView: 4,
    spaceBetween: 300,
    updateOnWindowResize: true,
    autoHeight: true,
    breakpoints: {

      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },

      580: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },

      1070: {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 2,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
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

  const reviewsSwiper = new Swiper('.reviews__container', {
    autoHeight: true,
    direction: 'horizontal',
    grabCursor: true,
    keyboard: true,
    modules: [Navigation, A11y],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 80,
  });

  return [coachesSwiper, reviewsSwiper];
};
