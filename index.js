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
const modal = document.querySelector("#my-modal");
const closeModalButton = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");
const modalContent = document.querySelector(".modal-content");

const toggler = () => {
     let data = JSON.parse(window.localStorage.getItem("data")) ?? { dark: false };
     setLocalData("dark", !data.dark ?? true);
}

const setLocalData = (key, value) => {
     let data = JSON.parse(window.localStorage.getItem("data")) ?? { content: "Write something and save it in your local storage..!", dark: false };
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
     overlay.style.display = "block"
     setModalContent(text)
     modal.style.display = "block";
     modal.style.opacity = "100";
}

const closeModal = () => {
     modal.style.display = "none"
     overlay.style.display = "none"
}


avoidRefresh.forEach(aButton => {
     aButton.addEventListener("click", (event) => {
          event.preventDefault();
     })
});

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

// overlay.addEventListener("click", () => {
//      closeModal();
// })

toggleTheme.addEventListener("click", toggler);

toggleSub.addEventListener("click", toggler);

localData.dark ? setDarkMode() : setLightMode();
setTextFieldData();