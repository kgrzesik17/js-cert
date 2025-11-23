"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million population and its capital city is ${capitalCity}`;
}

/*
console.log(describeCountry("Poland", 38, "Warsaw"));
console.log(describeCountry("Finland", 6, "Helsinki"));
console.log(describeCountry("Norway", 10, "Oslo"));
*/

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percPoland = percentageOfWorld1(38);
const percUSA = percentageOfWorld1(343);
const percNorway = percentageOfWorld1(10);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

/*
console.log(percPoland, percUSA, percNorway);
console.log(percentageOfWorld2(38));
console.log(percentageOfWorld3(38));
*/

function describePopulation(country, population) {
  const perc = percentageOfWorld1(population);

  return `${country} has ${population} million people which is about ${perc}% of the world`;
}

/*
console.log(describePopulation("China", 1441));
console.log(describePopulation("Poland", 38));
console.log(describePopulation("Norway", 10));
*/

const populations = [38, 343, 10, 1441];

// console.log(populations.length === 4);

const percentages = [];

for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld1(populations[i]));
}

// console.log(percentages);

const neighbours = [
  "Russia",
  "Belarus",
  "Ukraine",
  "Slovakia",
  "Czechia",
  "Germany",
];

// console.log(neighbours);

neighbours.push("Utopia");
// console.log(neighbours);

neighbours.pop();
// console.log(neighbours);

// console.log(
//   `Probably ${
//     neighbours.includes("Germany") ? "" : "not "
//   }a central european country :D`
// );

const czechIndex = neighbours.indexOf("Czechia");
neighbours[czechIndex] = "Czech Republic";

// console.log(neighbours);

const myCountry = {
  country: "Poland",
  capital: "Warsaw",
  langauge: "polish",
  population: 38,
  neighbours: [
    "Russia",
    "Belarus",
    "Ukraine",
    "Slovakia",
    "Czechia",
    "Germany",
  ],

  describe: function () {
    // console.log(
    //   `${this.country} has ${this.population} million ${this.langauge}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    // );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.langauge}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

myCountry.population -= 2;
// console.log(myCountry.population);

myCountry["population"] -= 2;
// console.log(myCountry.population);

myCountry.describe();
myCountry.checkIsland();

// console.log(myCountry.isIsland);

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting...`);
// }

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

// console.log(percentages2);

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log("Neighbour: " + listOfNeighbours[i][j]);
//   }
// }

const percentages3 = [];

let i = 0;

while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
