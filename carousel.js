const slides = document.querySelectorAll(".img__container");
const left = document.querySelector(".carousel__left");
const right = document.querySelector(".carousel__right");
const indicators = document.querySelectorAll(".carousel__indicator");
let currentSlide = 0;
const N = slides.length;

const goRight = () => {
     currentSlide = (currentSlide + 1) % N;
}

const goLeft = () => {
     if (currentSlide === 0)
          currentSlide = N - 1;
     else
          currentSlide--;
}

left.addEventListener("click", (event) => {
     slides[currentSlide].classList.remove("active");
     indicators[currentSlide].classList.remove("indicator__active");
     goLeft();
     slides[currentSlide].classList.add("active");
     indicators[currentSlide].classList.add("indicator__active");
})

right.addEventListener("click", (event) => {
     slides[currentSlide].classList.remove("active");
     indicators[currentSlide].classList.remove("indicator__active");
     goRight();
     slides[currentSlide].classList.add("active");
     indicators[currentSlide].classList.add("indicator__active");
})