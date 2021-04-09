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
/* SLIDERS: http://kenwheeler.github.io/slick/
/* ------------------------------------------------ */
const slider = document.querySelector(".slider");

const app = () => {
  console.log("test");
  mobileNavToggle();
  slider.slick();
};

app();
