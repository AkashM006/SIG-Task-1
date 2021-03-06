const target = document.querySelector("#icon");
const goUp = document.querySelector(".go-up");
const policy = document.querySelector(".hero__policy");

const options = {};

const themeObserver = new IntersectionObserver((entries, themeObserver) => {
     if (entries[0].isIntersecting) {
          toggleSub.classList.remove("d-block");
          goUp.classList.remove("d-block");
     }
     else {
          toggleSub.classList.add("d-block");
          goUp.classList.add("d-block");
     }
}, options);

themeObserver.observe(target);

const policyOptions = {
     threshold: 0,
     rootMargin: "0px 0px -80px 0px"
}

const policyObserver = new IntersectionObserver((entries, policyObserver) => {
     if (entries[0].isIntersecting) {
          policy.classList.add("policy__undo");
          policyObserver.unobserve(policy);
     }
     else
          policy.classList.remove("policy__undo");
}, policyOptions);

policyObserver.observe(policy);

goUp.addEventListener("click", () => {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})