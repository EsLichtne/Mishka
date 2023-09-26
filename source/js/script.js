let navButton = document.querySelector(".navigation__button");
let toggle = document.querySelector(".navigation__toggle");
let nav = document.querySelector(".navigation");
let navClue = document.querySelector(".navigation__clue");

navButton.addEventListener("click", function () {
  toggle.classList.toggle("navigation__toggle--open");
  nav.classList.toggle("navigation--open");
  if (nav.classList.contains("navigation--open")) {
    navClue.textContent = "Закрыть меню.";
  } else {
    navClue.textContent = "Открыть меню.";
  }
})
