'use strict';

/*
// DEFAULT PARAMETERS

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


// HOW PASSING ARGUMENTS WORKS

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // is the same as doing
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(jonas);
checkIn(flight, jonas);

function oneWord(str) {
  return str.replace(' ', '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// js uses callbacks all the time
const high5 = function () {
  console.log('hello');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// my example
function carDealer(car, fn) {
  return `Your new, shiny car: ${fn(car)}`;
}

function bmw(model) {
  if (model === 'e90') {
    return 'BMW E90';
  } else if (model === 'e60') {
    return 'BMW E60';
  } else {
    return 'other BMW';
  }
}

console.log(carDealer('e90', bmw));

function greet(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Steven');

// challenge
const greet1 = greeting => name => console.log(`${greeting}, ${name}!`);

greet1('Hi')('Kacper');
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Kacper Grzesik');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// does not work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');

console.log(lufthansa);

const lot = {
  airline: 'Polskie Linie Lotnicze LOT',
  iataCode: 'LO',
  bookings: [],
};

book.call(lot, 123, 'Jeffrey Jenkins');

// apply method
const flightData = [583, 'George Cooper'];
book.apply(lot, flightData);
book.call(lot, ...flightData);

// bind method
// book.call(eurowings, 23, 'Sarah Willaims');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLO = book.bind(lot);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Kacper Grzesik');
bookEW23('Martha Cooper');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTaxRate(0.23)(100));

const addVAT1 = addTaxRate(0.23);

console.log(addVAT(100));
