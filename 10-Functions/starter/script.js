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
*/

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
