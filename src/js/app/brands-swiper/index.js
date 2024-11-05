import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

let closeSwiper;

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!closeSwiper) {
      closeSwiper = new Swiper('.brands-content__swiper', {
        modules: [Pagination],
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 40,
        pagination: {
          el: '.brands-content__swiper-pagination',
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



document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.brands__swiper-slide');
    const button = document.querySelector('.brands__button');
    let isHidden = true; 

    for (let i = slides.length - 3; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }

    button.addEventListener('click', () => {
        if (isHidden) {
            slides.forEach(slide => slide.classList.remove('hidden'));
            button.querySelector('p').textContent = 'Скрыть';
        } else {
            for (let i = slides.length - 3; i < slides.length; i++) {
                slides[i].classList.add('hidden');
            }
            button.querySelector('p').textContent = 'Показать все';
        }
        isHidden = !isHidden; 
    });
});

document.getElementById('toggleButtonBrands').addEventListener('click', function() {
    const brandsImg = document.getElementById('buttonImageBrands');
    brandsImg.classList.toggle('brands-rotate-img');
});




document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.brands__swiper-slide');
  const button = document.querySelector('.brands__button');
  let isHidden = true; 

  for (let i = slides.length - 1; i < slides.length; i++) {
      slides[i].classList.add('hiddenDesktop');
  }

  button.addEventListener('click', () => {
      if (isHidden) {
          slides.forEach(slide => slide.classList.remove('hiddenDesktop'));
          button.querySelector('p').textContent = 'Скрыть';
      } else {
          for (let i = slides.length - 1; i < slides.length; i++) {
              slides[i].classList.add('hiddenDesktop');
          }
          button.querySelector('p').textContent = 'Показать все';
      }
      isHidden = !isHidden; 
  });
});