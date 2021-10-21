// Navbar Movement
const burger = document.querySelector(".burger");
const MenuList = document.querySelector(".Menu__List__holder");

burger.addEventListener("click", () => {
  MenuList.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

// Link Action
function NavRemover() {
  MenuList.classList.remove("nav-active");
  burger.classList.remove("toggle");
}
const NAV__KA__Link = document.querySelectorAll(".nav__link");
NAV__KA__Link.forEach((Element) =>
  Element.addEventListener("click", NavRemover)
);

//heading 3
