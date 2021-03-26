"use strict";

let textContent = document.querySelector(".code-dp");
let saveButton = document.querySelector(".save-btn");
let deleteButton = document.querySelector(".delete-btn");
let avoidRefresh = document.querySelectorAll("a");
let toggleTheme = document.querySelector(".toggle");
let icon = document.querySelector("#icon");
let localData = JSON.parse(window.localStorage.getItem("data"));

const setLocalData = (key, value) => {
     let data = JSON.parse(window.localStorage.getItem("data")) ?? { content: "Write something and save it in your local storage..!", dark: false };
     data[key] = value;
     window.localStorage.setItem("data", JSON.stringify(data));
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
     document.body.classList.add("dark");
}

const setLightMode = () => {
     icon.classList.remove("fa-sun-o");
     icon.classList.add("fa-moon-o");
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

toggleTheme.addEventListener("click", () => {
     let data = JSON.parse(window.localStorage.getItem("data")) ?? { dark: false };
     setLocalData("dark", !data.dark ?? true);
     !data.dark ? setDarkMode() : setLightMode();
})

localData.dark ? setDarkMode() : setLightMode();
setTextFieldData();