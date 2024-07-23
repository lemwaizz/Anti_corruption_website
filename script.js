let currentSlide = 0;

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(slideIndex) {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);
