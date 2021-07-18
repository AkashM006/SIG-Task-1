"use strict";

const textContent = document.querySelector(".code-dp");
const saveButton = document.querySelector(".save-btn");
const deleteButton = document.querySelector(".delete-btn");
const avoidRefresh = document.querySelectorAll("a");
const toggleTheme = document.querySelector(".toggle");
const toggleSub = document.querySelector(".opt-toggle");
const icons = document.querySelector("#icon");
const localData = JSON.parse(window.localStorage.getItem("data")) ?? {};
const iTheme = document.querySelector(".icon-dp");
const modal = document.querySelector(".modal__wrapper");
const closeModalButton = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");
const modalContent = document.querySelector(".modal-content");
const timer = document.querySelector(".modal__timer");
const modalButton = document.querySelector(".modal__btn");
let i = 0;
let lastContent = "";

const toggler = () => {
     let data = JSON.parse(window.localStorage.getItem("data")) ?? { dark: false };
     setLocalData("dark", !data.dark ?? true);
}

const setLocalData = (key, value) => {
     let data = JSON.parse(window.localStorage.getItem("data")) ?? { content: "Write something and save it in your local storage..!", dark: false };
     if (key === "content")
          lastContent = data["content"];
     data[key] = value;
     window.localStorage.setItem("data", JSON.stringify(data));
     if (key === "dark") {
          if (value === true)
               setDarkMode();
          else
               setLightMode();
     }
}

const deleteLocalData = (key) => {
     let data = JSON.parse(window.localStorage.getItem("data"));
     if (key === "content")
          lastContent = data["content"];
     data[key] = 'Write something and save it in your local storage..!';
     window.localStorage.setItem("data", JSON.stringify(data))
}

const setTextFieldData = () => {
     let data = JSON.parse(window.localStorage.getItem("data")) ?? { content: "Write something and save it in your local storage..!", dark: false };
     textContent.value = data.content ?? "Write something and save it in your local storage..!";
}

const setModalContent = (text) => {
     modalContent.innerHTML = text ?? "Successfully done"
};

const setDarkMode = () => {
     icon.classList.remove("fa-moon-o");
     icon.classList.add("fa-sun-o");
     iTheme.classList.remove("fa-moon-o");
     iTheme.classList.add("fa-sun-o");
     document.body.classList.add("dark");
}

const setLightMode = () => {
     icon.classList.remove("fa-sun-o");
     icon.classList.add("fa-moon-o");
     iTheme.classList.remove("fa-sun-o");
     iTheme.classList.add("fa-moon-o");
     document.body.classList.remove("dark");
}

const showModal = (text) => {
     setModalContent(text)
     // overlay.style.display = "block"
     // document.body.style.height = "100%";
     // document.body.style.overflow = 'hidden';
     // modal.style.display = "block";
     // modal.style.opacity = "100";
     // modal.style.display = "block";
     if (i++ === 0) {
          modal.classList.add("modal-active");
          timer.classList.add("timer-active");
     }
     else {
          modal.classList.remove("modal-active");
          timer.classList.remove("timer-active");
          modal.classList.remove("modal__inactive");
          setTimeout(() => {
               modal.classList.add("modal-active");
               timer.classList.add("timer-active");
          }, 10);
     }
     // modal.classList.toggle("modal-active");
}

const closeModal = () => {
     modal.classList.remove("modal__inactive");
     setTimeout(() => {
          modal.classList.add("modal__inactive");
     }, 10);
     // modal.classList.remove("modal-active");
     // timer.classList.remove("timer-active");
     // modal.style.display = "none"
     // overlay.style.display = "none"
     // document.body.style.height = "auto";
     // document.body.style.overflow = 'auto';
}

const undo = () => {
     textContent.value = lastContent;
     setLocalData("content", lastContent ?? "");
     lastContent = "";
}

modalButton.addEventListener("click", (event) => {
     undo();
     closeModal();
})

avoidRefresh.forEach(aButton => {
     aButton.addEventListener("click", (event) => {
          event.preventDefault();
     })
});

console.log(saveButton);
saveButton.addEventListener("click", () => {
     let text = textContent.value;
     setLocalData("content", text);
     showModal("Content saved to local storage!");
})

deleteButton.addEventListener("click", () => {
     deleteLocalData("content");
     showModal("Content deleted from your local storage!");
     setTextFieldData();
})

closeModalButton.addEventListener("click", () => {
     closeModal();
})

toggleTheme.addEventListener("click", toggler);

toggleSub.addEventListener("click", toggler);

localData.dark ? setDarkMode() : setLightMode();
setTextFieldData();