const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const prevBtn = carousel.querySelector('.carousel-prev');
const nextBtn = carousel.querySelector('.carousel-next');
const pagination = carousel.querySelector('.carousel-pagination');
const bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
const totalItems = container.querySelectorAll('.carousel-item').length;
const percent = (100 / totalItems);
let currentIndex = 0;

function handleNextBtnClick() {
    slideTo(currentIndex + 1);
}

function handlePrevBtnClick() {
    slideTo(currentIndex - 1);
}

function slideTo(index) {
    if(index < 0) {
      index =  totalItems - 1;
    } else {
      if(index >= totalItems) {
        index = 0;
      }
    }
  
    container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
    container.style.WebkitTransform = container.style.transform;
      
    bullets[currentIndex].classList.remove('active-bullet');
    bullets[index].classList.add('active-bullet');
    currentIndex = index;
}

function handlePagination(event) {
    const index = bullets.indexOf(event.target);
    if (index !== -1 && index !== currentIndex) {
        slideTo(index);
    }
}

bullets[currentIndex].classList.add('active-bullet');
prevBtn.addEventListener('click', handlePrevBtnClick);
nextBtn.addEventListener('click', handleNextBtnClick);

pagination.addEventListener('click', handlePagination);