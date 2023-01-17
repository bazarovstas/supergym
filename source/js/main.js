import {findVideos} from './modules/video';
import {initTabs} from './modules/init-tabs';
import {initSwiper} from './modules/init-swiper';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  findVideos();
  initTabs();
  initSwiper();

  // Modules
  // ---------------------------------

  // window.addEventListener('load', () => {

  // });
});

// ---------------------------------
