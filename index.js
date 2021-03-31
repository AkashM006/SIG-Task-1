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


avoidRefresh.forEach(aButton => {
     aButton.addEventListener("click", (event) => {
          event.preventDefault();
     })
});

saveButton.addEventListener("click", () => {
     let text = textContent.value;
     setLocalData("content", text);
})

deleteButton.addEventListener("click", () => {
     deleteLocalData("content");
     setTextFieldData();
})

toggleTheme.addEventListener("click", toggler);

iTheme.addEventListener("click", toggler);

localData.dark ? setDarkMode() : setLightMode();
setTextFieldData();