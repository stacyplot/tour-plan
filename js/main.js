const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button_next',
    prevEl: '.hotel-slider__button_prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button_next',
    prevEl: '.reviews-slider__button_prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});


var menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке');
  document.querySelector('.navbar-nav').classList.toggle('navbar-nav_visible')
})