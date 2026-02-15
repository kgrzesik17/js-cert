"use strict";

const hero = document.querySelector(".hero");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navButtons = document.querySelectorAll(".nav__button");
const about = document.querySelector("#about");
const tabbed = document.querySelector(".tabbed");

// adjust the hero to navbar
hero.style.height =
  hero.getBoundingClientRect().height -
  header.getBoundingClientRect().height +
  "px";

// smooth scroll
nav.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.hash) return;

  const target = document.querySelector(e.target.hash);

  target.scrollIntoView({ behavior: "smooth" });
});

// fading out on hover
function navFade(e) {
  if (!e.target.classList.contains("nav__button")) return;

  const target = e.target;
  const siblings = target.closest("ul").querySelectorAll(".nav__button");

  siblings.forEach((item) => {
    item.style.opacity = this;
  });

  target.style.opacity = "100%";
}

nav.addEventListener("mouseover", navFade.bind(0.5));
nav.addEventListener("mouseout", navFade.bind(1));

// tabbed component

// buttons

function changeTab(tab) {
  const visible = document.querySelector(`.tabbed__text--${tab}`);
  const siblings = document.querySelectorAll(".tabbed__text");

  siblings.forEach((el) => el.classList.remove("tabbed__text--active"));
  visible.classList.add("tabbed__text--active");
}

tabbed.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tabbed__button")) return;

  const target = e.target;
  const siblings = target
    .closest(".tabbed__buttons")
    .querySelectorAll(".tabbed__button");
  const tabToChange = target.dataset.tab;

  siblings.forEach((el) => {
    el.classList.remove("tabbed__button--active");
  });

  target.classList.add("tabbed__button--active");

  changeTab(tabToChange);
});
