import Swiper, {Navigation, A11y} from 'swiper';

const reviews = document.querySelector('.reviews--no-js');

reviews.classList.remove('reviews--no-js');

function initSwiperReviews() {
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

export {initSwiperReviews};
