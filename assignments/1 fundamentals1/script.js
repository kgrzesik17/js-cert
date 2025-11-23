"use strict";

const country = "Poland";
const continent = "Europe";
let population = 38;
const isIsland = false;
let language;
const capitalCity = "Warsaw";

language = "polish";

console.log(country, continent, population);

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

const halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

console.log(population > 6 ? "yes" : "nop");

console.log(population > 33 ? "yes" : "no");

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

if (population > 33) {
  console.log(
    `${country}'s population is ${population - 33} million above average`
  );
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

let numNeighbours = Number(
  prompt("How many neighbour countries does your contry have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
  case "chinese" || "mandarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
