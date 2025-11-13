"use strict";

// items from the shop
let items = [
  {
    name: "Gaming Mouse",
    price: 1,
    description: "And people say you can't buy skill",
    value: 1,
    isPerSecond: false,
    amount: 0,
  },
  {
    name: "Click Coaching Session",
    price: 20,
    description: "He's got years of experience",
    value: 5,
    isPerSecond: false,
    amount: 0,
  },
  {
    name: "Little brother",
    price: 10,
    description: "He's always happy to help you out",
    value: 1,
    isPerSecond: true,
    amount: 0,
  },
  {
    name: "Auto Clicker",
    price: 200,
    description: "Wait, isn't that cheating?",
    value: 10,
    isPerSecond: true,
    amount: 0,
  },
  {
    name: "JS console",
    price: 5000,
    description: "Feel like a true hacker",
    value: 100,
    isPerSecond: true,
    amount: 0,
  },
];

const dCash = document.querySelector("#cash-amount");
const dCashPerClick = document.querySelector("#cash-per-click");
const dCashPerSecond = document.querySelector("#cash-per-second");
const dShopPerClick = document.querySelector(".shop-per-click");
const dShopPerSecond = document.querySelector(".shop-per-second");
const dInfo = document.querySelector(".info");
const interval = window.setInterval(addPerSecond, 10); // add cash per second

const priceMultiplier = 1.25; // cost multiplier after buying an item

let cash = 0;
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
  const amount = document.querySelector(`#amount__${itemId}`);

  if (cash >= items[itemId].price) {
    // make sure there's enough cash
    cash -= items[itemId].price;
    items[itemId].price = parseFloat(
      (items[itemId].price * priceMultiplier).toFixed(2)
    ); // round to 2 floating points\
    items[itemId].amount++;

    if (items[itemId].isPerSecond) {
      cashPerSecond += items[itemId].value;
    } else {
      cashPerClick += items[itemId].value;
    }

    refreshCash();
    refreshCashInfo();

    selector.value = items[itemId].price + "$"; // refresh the price
    amount.textContent = `Amount: ${items[itemId].amount}`; // refresh the amount

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
  let amount = items[i].amount;

  let html = `<div class="shop-item" id="${i}">
          <p class="shop-item__amount" id="amount__${i}">Amount: ${amount}</p>
          <p class="shop-item__name">${name}</p>
          <p class="shop-item__description">${description}</p>
          <p class="shop-item__value">${value}</p>
          <p><input type="button" id="${buttonId}" value="${price}$"><span class="shop-item__cost"></span></p>
        </div>`;

  items[i].isPerSecond
    ? dShopPerSecond.insertAdjacentHTML("beforeend", html)
    : dShopPerClick.insertAdjacentHTML("beforeend", html);

  document.querySelector("#" + buttonId).addEventListener("click", buyItem);
}

function addPerSecond() {
  // adds in 0.01s intervals
  cash += cashPerSecond / 100;
  refreshCash();
}

refreshCash();
refreshCashInfo();
