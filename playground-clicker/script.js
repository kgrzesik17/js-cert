const showPoints = document.querySelector("#points");

let points = 0;

function refreshPoints() {
  showPoints.textContent = points;
}

document.querySelector("#add").addEventListener("click", function () {
  points++;
  refreshPoints();
});
