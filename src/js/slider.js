let offSet = 0; //смещение от левого края
const sliderLine = document.querySelector('.js-slider_gallery');

document.querySelector('.slider_next').addEventListener('click', () => {
  offSet += 256;
  sliderLine.style.left = offSet + 'px';
});
