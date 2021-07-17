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

const removeClass = () => {
     slides[currentSlide].classList.remove("active");
     indicators[currentSlide].classList.remove("indicator__active");
}

const addClass = () => {
     slides[currentSlide].classList.add("active");
     indicators[currentSlide].classList.add("indicator__active");
}

left.addEventListener("click", (event) => {
     removeClass();
     goLeft();
     addClass();
})

right.addEventListener("click", (event) => {
     removeClass();
     goRight();
     addClass();
})

let timerCarousel = setInterval(() => {
     removeClass();
     goRight();
     addClass();
}, 10000)