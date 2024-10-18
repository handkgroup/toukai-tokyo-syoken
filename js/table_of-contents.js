const btn = document.querySelector(".right_side-btn");
const cardBottom = document.querySelector(".card_bottom");

btn.addEventListener("click", (e) => {
  cardBottom.classList.toggle("active");
});
