"use strict";

// items from the shop
let items = [
  {
    name: "Gaming Mouse",
    price: 1,
    description: "And people say you can't buy skill",
    value: 1,
    isPerSecond: false,
  },
  {
    name: "Click Coaching Session",
    price: 20,
    description: "He's got years of experience",
    value: 5,
    isPerSecond: false,
  },
  {
    name: "Little brother",
    price: 100,
    description: "He's always happy to help you out",
    value: 1,
    isPerSecond: true,
  },
  {
    name: "Auto Clicker",
    price: 2000,
    description: "Wait, isn't that cheating?",
    value: 10,
    isPerSecond: true,
  },
  {
    name: "JS console",
    price: 50000,
    description: "Feel like a true hacker",
    value: 100,
    isPerSecond: true,
  },
];

const dCash = document.querySelector("#cash-amount");
const dCashPerClick = document.querySelector("#cash-per-click");
const dCashPerSecond = document.querySelector("#cash-per-second");
const dShopPerClick = document.querySelector(".shop-per-click");
const dShopPerSecond = document.querySelector(".shop-per-second");
const dInfo = document.querySelector(".info");
const interval = window.setInterval(addPerSecond, 1000); // add cash per second

const priceMultiplier = 1.25; // cost multiplier after buying an item

let cash = 11110;
let cashPerClick = 1;
let cashPerSecond = 0;

function showInfo(content) {
  dInfo.innerHTML = `<p>${content}</p>`;
  dInfo.classList.remove("hidden");
  setTimeout(() => dInfo.classList.add("hidden"), 500);
}

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
    showInfo("Not enough money!");

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
  let description = items[i].description;

  let html = `<div class="shop-item" id="${i}">
          <p class="shop-item__name">${name}</p>
          <p class="shop-item__description">${description}</p>
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
