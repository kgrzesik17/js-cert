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
];

const priceMultiplier = 1.35; // cost multiplier after buying an item
const dCash = document.querySelector("#cash-amount");
const dCashPerClick = document.querySelector("#cash-per-click");
const dShop = document.querySelector(".shop");

// const interval = window.setInterval(addPersistent, 1000);

let cash = 0;
let cashPerClick = 1;

function refreshCash() {
  dCash.textContent = cash.toFixed(2);
}

function refreshCashInfo() {
  dCashPerClick.textContent = cashPerClick.toFixed(2);
}

function buyItem(item) {
  const targetId = item.target.id;
  const itemId = targetId.split("__")[1];
  const selector = document.querySelector(`#${targetId}`);

  if (cash >= items[itemId].price) {
    cash -= items[itemId].price;
    cashPerClick += items[itemId].value;
    items[itemId].price = parseFloat(
      (items[itemId].price * priceMultiplier).toFixed(2)
    ); // round to 2 floating points

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

refreshCashInfo();

// generate the shop
for (let i = 0; i < items.length; i++) {
  let buttonId = `buy-item__${i}`;

  dShop.insertAdjacentHTML(
    "beforeend",
    `<div class="shop-item" id="${i}">
          <p class="shop-item__name">${items[i].name}</p>
          <p>+<span class="shop-item__value">${items[i].value}</span>$ per click</p>
          <p><input type="button" id="${buttonId}" value="${items[i].price}$"><span class="shop-item__cost"></span></p>
        </div>`
  );

  // dShop.innerHTML += `<div class="shop-item" id="${i}">
  //         <p class="shop-item__name">${items[i].name}</p>
  //         <p>+<span class="shop-item__value">${items[i].value}</span>$ per click</p>
  //         <p><input type="button" id="${buttonId}" value="${items[i].price}$"><span class="shop-item__cost"></span></p>
  //       </div>`;

  document.querySelector("#" + buttonId).addEventListener("click", buyItem);
}
