/* -------------------------------------------------- 
/* Mobile Navigation Menu
/* ------------------------------------------------ */
const mobileNavToggle = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav--mobile");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

/* -------------------------------------------------- 
/* Count Up on Scroll
/* ------------------------------------------------ */
$(".counter").countUp({
  time: 2000,
  delay: 10,
});

/* -------------------------------------------------- 
/* SLIDERS: http://kenwheeler.github.io/slick/
/* ------------------------------------------------ */

// (function ($) {
$(document).ready(function () {
  $("#slider1").slick({
    mobileFirst: true,
    variableWidth: true,
    infinite: false,
    arrows: false,
    dots: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToScroll: 3,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 1359,
        settings: {
          arrows: false,
          dots: false,
          draggable: false,
        },
      },
    ],
  });

  $("#slider2").slick({
    mobileFirst: true,
    variableWidth: true,
    infinite: false,
    arrows: false,
    dots: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToScroll: 3,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 1359,
        settings: {
          draggable: false,
          arrows: false,
          dots: false,
        },
      },
    ],
  });

  $("#slider3").slick({
    mobileFirst: true,
    variableWidth: true,
    infinite: false,
    arrows: false,
    dots: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToScroll: 3,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 1359,
        settings: {
          draggable: false,
          arrows: false,
          dots: false,
        },
      },
    ],
  });
});

const app = () => {
  mobileNavToggle();
};

app();
