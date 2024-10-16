const swiper = new Swiper(".swiper-container", {
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

  slides[activeIndex].classList.add("main-slide");

  const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
  const nextIndex = (activeIndex + 1) % slides.length;
  slides[prevIndex].classList.add("side-slide");
  slides[nextIndex].classList.add("side-slide");
}
