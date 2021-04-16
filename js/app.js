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
          slidesToScroll: 0,
          arrows: false,
          dots: false,
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
          slidesToScroll: 0,
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
          slidesToScroll: 0,
          arrows: false,
          dots: false,
        },
      },
    ],
  });
});

/* -------------------------------------------------- 
/* MULTI-STEP FORM
/* ------------------------------------------------ */
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("formCTA").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

const app = () => {
  mobileNavToggle();
  //slider.slick();
};

app();
