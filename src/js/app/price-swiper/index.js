import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


let closeSwiper;

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!closeSwiper) {
      closeSwiper = new Swiper('.price-content__swiper', {
        modules: [Pagination],
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 40,
        pagination: {
          el: '.price-content__swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    if (closeSwiper) {
      closeSwiper.destroy();
      closeSwiper = null;
    }
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);

