let DarkMode = localStorage.getItem("DarkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  document.body.classList.add("DarkMode");
  document.body.classList.remove("animated__background");
  localStorage.setItem("DarkMode", "enabled");
};
const disableDarkMode = () => {
  document.body.classList.remove("DarkMode");
  localStorage.setItem("DarkMode", null);
};

if (DarkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  //   console.log('test');

  DarkMode = localStorage.getItem("DarkMode");
  if (DarkMode !== "enabled") {
    enableDarkMode();
  } else if (DarkMode === null) {
    disableDarkMode();
  }
});
