"use strict";

const regionsContainer = document.querySelector(".regions-container");

async function getRegions(countryCode) {
  try {
    const regions = await fetch(
      `https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/${countryCode}.json`,
    );

    if (!regions.ok) throw new Error("Problem getting data");

    const regionsJSON = await regions.json();

    return regionsJSON;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

function generateElement(name) {
  return `<div class="region">${name}</div>`;
}

function generateHTML(regions) {
  let html = "";

  regions.forEach((region) => {
    html += generateElement(region);
  });

  return html;
}

function colorOdd(parent) {
  const children = [...parent.children];

  children.forEach((element, i) => {
    if (i % 2 !== 0) {
      element.classList.add("odd");
    }
  });
}

getRegions("PL")
  .then((response) =>
    regionsContainer.insertAdjacentHTML("beforeend", generateHTML(response)),
  )
  .then(() => colorOdd(regionsContainer));
