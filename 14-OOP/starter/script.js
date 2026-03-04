'use strict';

/*
// constructor functions and the new operator
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never create methods inside a constructor
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
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

// prototypes
console.log(Person.prototype);

// the way of doing methods
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);

// Object.prototype (top of the prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 6, 2, 3, 4, 5, 6, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.brake();

const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();

console.log(bmw);
console.log(mercedes);

// class expression
// const personCl = class{}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // greet() {
  //   console.log(`Hey ${this.firstName}`);
  // }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there 🍳');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica ', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// 1. classes are NOT hoisted -> we can't use them before the declaration
// 2. classes are first-class citizens (we cant pass and return them from functions)
// 3. classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// PersonCl.hey = function () {
//   console.log('Hey there 🍳');
//   console.log(this);
// };

// PersonCl.hey();
// jessica.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // similar to constructor, name is arbitrary
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// object linked to the PersonProto prototype
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

// 2.1
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    this.display();
  }

  brake() {
    this.speed -= 5;
    this.display();
  }

  display() {
    console.log(`${this.make}'s new speed is ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
mercedes.brake();

// 2.2
console.log(bmw.speedUS);
console.log(mercedes.speedUS);

// 2.3
bmw.speedUS = 90;
bmw.display();
