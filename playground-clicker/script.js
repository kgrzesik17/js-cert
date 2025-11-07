"use strict";

// item shop
let items = [
  {
    name: "Gaming Mouse",
    price: 1,
    value: 1,
    isPerSecond: false,
  },
  {
    name: "Click Coaching Session",
    price: 100,
    value: 5,
    isPerSecond: false,
  },
];

const dCash = document.querySelector("#cash-amount");
const dCashPerClick = document.querySelector("#cash-per-click");
const dShop = document.querySelector(".shop");

// generate the shop
for (let i = 0; i < items.length; i++) {
  dShop.innerHTML += `<div class="shop-item" id="${i}">
          <p class="shop-item__name">${items[i].name}</p>
          <p>+<span class="shop-item__value">${items[i].value}</span>$ per click</p>
          <p><button>$<span class="shop-item__cost">${items[i].price}</span></button></p>
        </div>`;
}

// const interval = window.setInterval(addPersistent, 1000);

let cash = 0;
let cashPerClick = 1;

function refreshPoints() {
  dCash.textContent = cash;
}

function refreshCashInfo() {
  dCashPerClick.textContent = cashPerClick;
}

document.querySelector("#click-button").addEventListener("click", function () {
  cash += cashPerClick;
  refreshPoints();
});

refreshCashInfo();
