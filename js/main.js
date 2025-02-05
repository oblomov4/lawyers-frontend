const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
