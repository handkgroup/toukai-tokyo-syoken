const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30, // space between slides
  centeredSlides: true,
  slidesPerView: "auto", // allows partial slides to be seen
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  on: {
    init: function () {
      updateSlideClasses(this);
    },
    slideChange: function () {
      updateSlideClasses(this);
    },
  },
});

function updateSlideClasses(swiper) {
  swiper.slides.forEach((slide) => {
    slide.classList.remove("main-slide", "side-slide");
  });

  const activeIndex = swiper.realIndex;
  const slides = swiper.slides;

  // Set the main slide class
  slides[activeIndex].classList.add("main-slide");

  // Set the side slides classes (previous and next)
  const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
  const nextIndex = (activeIndex + 1) % slides.length;
  slides[prevIndex].classList.add("side-slide");
  slides[nextIndex].classList.add("side-slide");
}
