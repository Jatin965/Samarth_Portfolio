var moon1 = document.getElementById("fa-moon1");
var sun1 = document.getElementById("img-fluid1");

let darkMode1 = localStorage.getItem('darkMode');

const darkModeToggle1 = document.getElementById('dark-mode');
const enableDarkMode1 = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  moon1.classList.add("sun1");
sun1.classList.remove("sun1");

  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');

}

const disableDarkMode1 = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  sun1.classList.add("sun1");
  moon1.classList.remove("sun1");
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode1 === 'enabled') {
  enableDarkMode1();

}

// When someone clicks the button
darkModeToggle1.addEventListener('click', () => {
  // get their darkMode setting
  darkMode1 = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode1 !== 'enabled') {
    enableDarkMode1();
  // if it has been enabled, turn it off
  } else {
    disableDarkMode1();
  }
});
