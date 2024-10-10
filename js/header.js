const burgerMenu = document.querySelector(".burger_menu");
const offScreenMenu = document.querySelector(".off_screen-menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
