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

const app = () => {
  mobileNavToggle();
};

app();
