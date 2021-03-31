const target = document.querySelector("#icon");
const goUp = document.querySelector(".go-up");

const options = {};

const themeObserver = new IntersectionObserver((entries, themeObserver) => {
     if (entries[0].isIntersecting === false) {
          toggleSub.classList.add("d-block");
          goUp.classList.add("d-block");
     }
     else {
          toggleSub.classList.remove("d-block");
          goUp.classList.remove("d-block");
     }
}, options);

themeObserver.observe(target);

goUp.addEventListener("click", () => {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})