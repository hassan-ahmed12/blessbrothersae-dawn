document.addEventListener('DOMContentLoaded', () => {
  // Video Slider Initialization
  const swiper = new Swiper(".video-carousel", {
    spaceBetween: 10,
    draggable: true,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".video_nav .button-next",
      prevEl: ".video_nav .button-prev",
    },
    breakpoints: {
      750: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
  });
});