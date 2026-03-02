'use strict';

// constructor functions and the new operator
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never create methods inside a constructor
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} is linked to the prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log([] instanceof Array);
console.log(jay instanceof Person);
