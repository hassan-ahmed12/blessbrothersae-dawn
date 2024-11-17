document.addEventListener('DOMContentLoaded', () => {
  // Video Slider Initialization
  const swiper = new Swiper(".video-carousel", {
    spaceBetween: 10,
    draggable: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
      },
      750: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});