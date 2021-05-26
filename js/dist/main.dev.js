"use strict";

$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button_next',
      prevEl: '.hotel-slider__button_prev'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  });
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button_next',
      prevEl: '.reviews-slider__button_prev'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  }); // Скрипт для моб меню

  var menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.navbar-nav').toggleClass('navbar-nav_visible');
  }); // Скрипт для модального окна

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay_visible');
    modalDialog.addClass('modal__dialog_visible');
  }

  ;

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
  } // Обработка формы


  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your name should be longer than 2 letters"
        },
        email: {
          required: "Please put your email",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Please put your phone number"
        }
      }
    });
  }); // Маска для номера телефона

  $('.modal__input-phone').mask('+7 (000) 000-00-00'); // Инициализация библиотеки с анимацией

  AOS.init();
});