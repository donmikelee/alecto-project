const carouselAboutUs = document.querySelector('.carousel-about-us');
const containerAboutUs = carouselAboutUs.querySelector('.carousel-container-about-us');
const prevBtnAboutUs = carouselAboutUs.querySelector('.carousel-about-us-prev');
const nextBtnAboutUs = carouselAboutUs.querySelector('.carousel-about-us-next');
const paginationAboutUs = carouselAboutUs.querySelector('.carousel-pagination-about-us');
const bulletsAboutUs = [].slice.call(carouselAboutUs.querySelectorAll('.carousel-bullet-about-us'));
const totalItemsAboutUs = containerAboutUs.querySelectorAll('.carousel-item-about-us').length;
const percentAboutUs = (100 / totalItemsAboutUs);
let currentIndexAboutUs = 0;

function handlenextBtnAboutUsClick() {
    slideTo(currentIndexAboutUs + 1);
}

function handleprevBtnAboutUsClick() {
    slideTo(currentIndexAboutUs - 1);
}

function slideTo(indexAboutUs) {
    if(indexAboutUs < 0) {
      indexAboutUs =  totalItemsAboutUs - 1;
    } else {
      if(indexAboutUs >= totalItemsAboutUs) {
        indexAboutUs = 0;
      }
    }
  
    containerAboutUs.style.transform = 'translate(-' + (indexAboutUs * percent) + '%, 0)';
    containerAboutUs.style.WebkitTransform = containerAboutUs.style.transform;
      
    bulletsAboutUs[currentIndexAboutUs].classList.remove('active-bullet');
    bulletsAboutUs[indexAboutUs].classList.add('active-bullet');
    currentIndexAboutUs = indexAboutUs;
}

function handlePaginationAboutUs(event) {
    const indexAbout = bulletsAboutUs.indexOf(event.target);
    if (indexAbout !== -1 && indexAbout !== currentIndexAbout) {
        slideTo(indexAboutUs);
    }
}

bulletsAboutUs[currentIndexAboutUs].classList.add('active-bullet');
prevBtnAboutUs.addEventListener('click', handleprevBtnAboutUsClick);
nextBtnAboutUs.addEventListener('click', handlenextBtnAboutUsClick);

paginationAboutUs.addEventListener('click', handlePaginationAboutUs);


/* SECOND SLIDER */
