const showPoints = document.querySelector("#points");
// const interval = window.setInterval(addPersistent, 1000);

let points = 0;

function refreshPoints() {
  showPoints.textContent = points;
}

document.querySelector("#add").addEventListener("click", function () {
  points++;
  refreshPoints();
});

function addPersistent() {
  console.log("test");
}
