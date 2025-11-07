"use strict";

// items from the shop
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
  {
    name: "Little brother",
    price: 1000,
    value: 1,
    isPerSecond: true,
  },
];

const priceMultiplier = 1.35; // cost multiplier after buying an item
const dCash = document.querySelector("#cash-amount");
const dCashPerClick = document.querySelector("#cash-per-click");
const dCashPerSecond = document.querySelector("#cash-per-second");
const dShopPerClick = document.querySelector(".shop-per-click");
const dShopPerSecond = document.querySelector(".shop-per-second");

const interval = window.setInterval(addPerSecond, 1000);

let cash = 11110;
let cashPerClick = 1;
let cashPerSecond = 0;

function refreshCash() {
  dCash.textContent = cash.toFixed(2);
}

function refreshCashInfo() {
  dCashPerClick.textContent = cashPerClick.toFixed(2);
  dCashPerSecond.textContent = cashPerSecond.toFixed(2);
}

function buyItem(item) {
  const targetId = item.target.id;
  const itemId = targetId.split("__")[1];
  const selector = document.querySelector(`#${targetId}`);

  if (cash >= items[itemId].price) {
    cash -= items[itemId].price;
    items[itemId].price = parseFloat(
      (items[itemId].price * priceMultiplier).toFixed(2)
    ); // round to 2 floating points

    if (items[itemId].isPerSecond) {
      cashPerSecond += items[itemId].value;
    } else {
      cashPerClick += items[itemId].value;
    }

    refreshCash();
    refreshCashInfo();

    selector.value = items[itemId].price + "$";

    console.log("Item bought!");
  } else {
    console.log("Not enough money!");
  }
}

document.querySelector("#click-button").addEventListener("click", function () {
  cash += cashPerClick;
  refreshCash();
});

// generate the shop
for (let i = 0; i < items.length; i++) {
  let buttonId = `buy-item__${i}`;
  let name = items[i].name;
  let value = `\$${items[i].value} per ${
    items[i].isPerSecond ? "second" : "click"
  }`;
  let price = items[i].price;
  let html = `<div class="shop-item" id="${i}">
          <p class="shop-item__name">${name}</p>
          <p class="shop-item__value">${value}</p>
          <p><input type="button" id="${buttonId}" value="${price}$"><span class="shop-item__cost"></span></p>
        </div>`;

  items[i].isPerSecond
    ? dShopPerSecond.insertAdjacentHTML("beforeend", html)
    : dShopPerClick.insertAdjacentHTML("beforeend", html);

  // dShop.innerHTML += `<div class="shop-item" id="${i}">
  //         <p class="shop-item__name">${items[i].name}</p>
  //         <p>+<span class="shop-item__value">${items[i].value}</span>$ per click</p>
  //         <p><input type="button" id="${buttonId}" value="${items[i].price}$"><span class="shop-item__cost"></span></p>
  //       </div>`;

  document.querySelector("#" + buttonId).addEventListener("click", buyItem);
}

function addPerSecond() {
  cash += cashPerSecond;
  refreshCash();
}

refreshCash();
refreshCashInfo();
