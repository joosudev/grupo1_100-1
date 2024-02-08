const carousel = document.querySelector('.carousel');
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideWidth = carousel.offsetWidth;
let currentIndex = 0;

function goToSlide(index) {
  currentIndex = index;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
  goToSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);
