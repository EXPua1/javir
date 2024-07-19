let offSet = 0; //смещение от левого края
const sliderLine = document.querySelector('.js_slider_gallery');

document.querySelector('.slider_next').addEventListener('click', () => {
  offSet += 256;
  if (offSet > 768) {
    offSet = 0;
  }
  sliderLine.style.left = -offSet + 'px';
});

document.querySelector('.slider_prev').addEventListener('click', () => {
  offSet -= 256;
  if (offSet < 0) {
    offSet = 768;
  }
  sliderLine.style.left = -offSet + 'px';
});
