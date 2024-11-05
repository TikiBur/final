import '../scss/style.scss';
import './app/brands-swiper/index.js';
import './app/technic-swiper/index.js';
import './app/price-swiper/index.js';
import './app/burger-menu/index.js';
import './app/phone-menu/index.js';
import './app/feedback-menu/index.js';


document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.info__text-button');
  const hiddenText = document.querySelector('.info__text-text');
  let isHidden = true; 

  button.addEventListener('click', () => {
      if (isHidden) {
          hiddenText.classList.add('info__text-text-open'); 
          button.querySelector('p').textContent = 'Скрыть'; 
      } else {
          hiddenText.classList.remove('info__text-text-open');
          button.querySelector('p').textContent = 'Читать далее';
      }
      isHidden = !isHidden; 
  });
});

document.getElementById('toggleButton').addEventListener('click', function() {
    const brandsImg = document.getElementById('buttonImage');
    brandsImg.classList.toggle('brands-rotate-img');
});