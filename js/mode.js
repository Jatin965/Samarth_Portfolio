/*let DarkMode = localStorage.getItem("DarkMode");
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
*/
var element = document.getElementById("head-col");
var moon = document.getElementById("fa-moon");
var sun = document.getElementById("img-fluid");

let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.getElementById('dark-mode-toggle');
const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  element.classList.remove("animated__background");
  moon.classList.add("sun1");
sun.classList.remove("sun1");

  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');

}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  element.classList.add("animated__background");
  sun.classList.add("sun1");
  moon.classList.remove("sun1");
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();

}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
