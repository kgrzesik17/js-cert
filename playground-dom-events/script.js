"use strict";

const hero = document.querySelector(".hero");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navButtons = document.querySelectorAll(".nav__button");

const about = document.querySelector("#about");

// console.log(header.getBoundingClientRect().height);

// adjust the hero to navbar
hero.style.height =
  hero.getBoundingClientRect().height -
  header.getBoundingClientRect().height +
  "px";

nav.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.hash) return;

  const target = document.querySelector(e.target.hash);

  target.scrollIntoView({ behavior: "smooth" });
});
