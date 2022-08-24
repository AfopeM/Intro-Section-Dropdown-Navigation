"use strict";

// MOBILE
const checkBurgerMenu = document.querySelector(".check-burgermenu");
const navMenu = document.querySelector(".nav__menu");
const navMenuMain = document.querySelector(".nav__menu-main");
const dropDownMenu = document.querySelectorAll(".dropdown");
const overlay = document.querySelector(".overlay");

// SETUP
navMenu.classList.add("collapse--main-menu");
dropDownMenu.forEach(function (ddm) {
  ddm.classList.add("collapse");
});
overlay.classList.add("hide");

// SHOW MAIN MENU - MOBILE
checkBurgerMenu.addEventListener("click", function (e) {
  if (e.target.checked) {
    navMenu.classList.add("expand--main-menu");
    overlay.classList.remove("hide");
  } else {
    navMenu.classList.remove("expand--main-menu");
    overlay.classList.add("hide");
  }
});

// SHOW DROP DOWN MENU - MOBILE
navMenuMain.addEventListener("click", function (e) {
  const btn = e.target.closest(".nav__menu-items");
  if (!btn) return;

  const dropdown = btn.querySelector(".dropdown");
  if (!dropdown) return;

  const w = window.innerWidth;

  if (w < 760) {
    if (dropdown.classList.contains("collapse")) {
      dropdown.classList.remove("collapse");
      dropdown.classList.add("expand");
    } else {
      dropdown.classList.remove("expand");
      dropdown.classList.add("collapse");
    }
  } else {
    if (dropdown.classList.contains("collapse")) {
      dropdown.classList.remove("collapse");
      dropdown.classList.add("expand--desktop");
    } else {
      dropdown.classList.remove("expand--desktop");
      dropdown.classList.add("collapse");
    }
  }
});
