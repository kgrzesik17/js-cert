'use strict';

/*
function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating NEW variable with the same name as outer scope's variable
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // reassigning outer scope's variable
      output = 'New output!';
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);


// variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.x);
console.log(z === window.x);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrorw = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
    
    // // solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
      //   console.log(self);
      //   console.log(self.year >= 1981 && this.year <= 1996);
      // };
      // isMillenial();
      
      // solution 2
      const self = this; // self or that
      const isMillenial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillenial();
    },
    
    greet: () => console.log(`Hey ${this.firstName}`),
  };
  
  jonas.greet();
  jonas.calcAge();
  
  // arguments keyword
  const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
  };
  addExpr(2, 5);
  addExpr(2, 5, 8, 12);
  
  var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
  };
  addArrow(2, 5, 8);
  
  function addAll() {
    let output = 0;
    
    for (let i = 0; i < arguments.length; i++) {
      output += arguments[i];
    }
    
    return output;
  }
  
  console.log(addAll(3, 3, 3, 6, 1, 23, -12));
  
*/

// object references in practice (shallow vs deep copies)

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Davis';

console.log('Before: ', jessica1);
console.log('After: ', marriedJessica);
// the values are the same!

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// shallow copy
const jessicaCopy = { ...jessica }; // spread operator
jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before: ', jessica);
// console.log('After: ', jessicaCopy);

// deep copy or deep clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Original: ', jessica);
console.log('Clone: ', jessicaClone);
