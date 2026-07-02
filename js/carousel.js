document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.getElementById("gallery-swiper");

  if (!swiperEl) return;

  const swiper = new Swiper(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    speed: 600,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Pagination dots
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },

    // Responsiveness
    breakpoints: {
      640: {
        slidesPerView: 1.2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 28,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },

    // Touch / gesture
    grabCursor: true,
    touchRatio: 1.2,
  });
});
