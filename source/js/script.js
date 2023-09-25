let navButton = document.querySelector(".navigation__button");
let toggle = document.querySelector(".navigation__toggle");
let menu = document.querySelector(".navigation__menu");
// let siteList = document.querySelector(".site-list");
// let userList = document.querySelector(".user-list");
let navClue = document.querySelector(".navigation__clue");

navButton.addEventListener("click", function () {
  toggle.classList.toggle("navigation__toggle--open");
  menu.classList.toggle("navigation__menu--open");
  if (menu.classList.contains("navigation__menu--open")) {
    navClue.textContent = "Закрыть меню.";
  } else {
    navClue.textContent = "Открыть меню.";
  }
})
