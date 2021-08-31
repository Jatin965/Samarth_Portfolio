const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuText = document.querySelectorAll(".menuText");
const menuAbout = document.getElementById("about");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuText.forEach(function (text, index) {
    setTimeout(() => {
      text.classList.toggle("open2");
    }, index * 50);
  });
  menuAbout.classList.toggle("open3");
});

$(document).on("click", function (e) {
  if ($(e.target).closest("#menu").length === 0) {
    menu.classList.remove("open");
    menuText.forEach(function (text, index) {
      setTimeout(() => {
        text.classList.remove("open2");
      }, index * 50);
    });
    menuAbout.classList.remove("open3");
  }
});
