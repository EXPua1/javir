// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // Опциональные параметры
  direction: 'horizontal',
  loop: true,
  observer: true,
  observeParents: true,
  parallax: true,

  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Навигационные стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const prewBtn = document.querySelector('swiper-button-prev');

prewBtn.style.left = '-110px';
prewBtn.style.position = 'relative';
