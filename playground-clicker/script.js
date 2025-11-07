"use strict";

const dCash = document.querySelector("#cash-amount");
const dCashPerClick = document.querySelector("#cash-per-click");
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
