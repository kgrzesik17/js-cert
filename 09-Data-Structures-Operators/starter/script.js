'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// names can be literals or expressions
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // old way
  // openingHours: openingHours

  // ES6 enhanced object literals
  openingHours, // enough to import object from the outside

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// new operations to make sets useful

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');
const text = document.querySelector('textarea').value;

// button.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const lines = [...text.split('\n')];
//   const linesTrimmed = [];
//   let final = '';

//   for (const line of lines) {
//     linesTrimmed.push(line.trim().toLowerCase().split('_'));
//   }

//   for (const line of linesTrimmed) {
//     final +=
//       line[0] + line[1].replace(line[1][0], line[1][0].toUpperCase()) + '\n';
//   }

//   console.log(final);
// });

button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  const emoji = '✅';

  for (let [index, line] of lines.entries()) {
    const words = line.trim().toLowerCase().split('_');
    let output = '';

    for (let [i, word] of words.entries()) {
      if (i === 0) {
        output += word;
      } else {
        output += word.replace(word[0], word[0].toUpperCase());
      }
    }

    output = output.padEnd(20, ' ');
    output += emoji.repeat(index + 1);

    console.log(output);
  }
});

// jonas' way
// button.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const lines = text.split('\n');
//   const emoji = '✅';

//   for (const [i, row] of lines.entries()) {
//     const [first, second] = row.trim().toLowerCase().split('_');

//     console.log(
//       `${first}${second.replace(second[0], second[0].toUpperCase())}`.padEnd(
//         20,
//         ' '
//       ) + emoji.repeat(i + 1)
//     );
//   }
// });
/*
// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// function capitalizeName(name) {
//   let fullName = '';

//   for (const word of name.split(' ')) {
//     fullName += word[0].toLocaleUpperCase() + word.slice(1) + ' ';
//   }

//   console.log(fullName);
// }

function capitalizeName(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davies');
capitalizeName('kacper grzesik');

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(1234123412341234));
console.log(maskCreditCard(12345678));
console.log(maskCreditCard('123412341234123413212223'));

// repeat
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));

function planesInLine(n) {
  console.log(`There are ${n} planes in line`.repeat(n));
}

planesInLine(5);
planesInLine(3);
planesInLine(12);

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log('jonas'.toUpperCase());

// fix the capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

function correctCapitalization(name) {
  const nameLower = name.toLocaleLowerCase();
  const correct = nameLower[0].toUpperCase() + nameLower.slice(1);

  return correct;
}

console.log(correctCapitalization('kAcPeR'));

// comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();

// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

function checkEmail(enteredEmail, correctEmail) {
  return enteredEmail === correctEmail;
}

console.log(checkEmail(normalizedEmail, email));

// replacing
const priceEU = '288,97€';
const priceUS = priceEU.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// practice exercise
const checkBaggage = function (items) {
  const notAllowed = new Set(['knife', 'gun']);
  const baggage = items.toLowerCase();

  for (const item of notAllowed) {
    if (baggage.includes(item)) return false;
  }

  return true;
};

console.log(checkBaggage('I have a laptop, some Food and a pocket Knife'));
console.log(checkBaggage('Socks and camera'));
console.log(checkBaggage('Got some snacks and a gun for protection'));

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('22C');
checkMiddleSeat('3E');

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
// let events = [];

// for (const [key, event] of gameEvents) {
//   events.push(event);
// }

// events = [...new Set(events)];
// console.log(events);

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, one average, every ${90 / gameEvents.size} minutes`
);
// bonus
const time = [...gameEvents.keys()];

console.log(`-------`);

const minutes = time.pop(); // deletes but also returns the last one

console.log(`An event happened, one average, every ${90 / minutes} minutes`);

console.log(`-------`);

// 4.
for (const [minute, event] of gameEvents) {
  let output = '';

  output += minute >= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  output += ` ${minute}: ${event}`;

  console.log(output);
}



// MAPS
const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(answer === question.get('correct')));

// convert map to array
console.log(...question);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

const arr = [1, 2];

rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

console.log(rest.get(arr));

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union: ', italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// which elements are in the first set, but not in the second
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian: ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log('Symmetric: ', uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);
console.log(new Set('kacpergrzesik').size);

// LOOPING OBJECTS

// property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We're open on ${properties.length} days`;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// entire objects
const entries = Object.entries(openingHours);
// console.log(entries);

// looping through an object + desctructuring it
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// // without optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // iterating through an array

for (const [i, el] of menu.entries()) {
  // [index, element]
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10; // rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10; // rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>'; // rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// nullish values: null and undefined
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

// use ANY data type, return ANY data type, short-circuting
console.log(3 || 'Jonas');

console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 0;
const gueses1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(gueses1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('salame', 'ham');

// rest pattern and parameters
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('salame', 'ham', 'spinach', 'egg', 'broccoli');
restaurant.orderPizza('mushrooms');


// DESTRUCTURING OBJECTS

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutuating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // if there's a need to change the values. won't work without the parenthaases
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


// DESCTRUCTURING ARRAYS
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// // switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// recieve 2 return values form a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8

];
console.log(p, q, r);


// SPREAD OPERATOR (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingregient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

// 1.
console.log(players1);
console.log(players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
function printGoals(...players) {
  console.log(`${players.length} goals were scored.`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// 7.
team1 > team2 || console.log(`${game.team1} is more likely to win.`);
team2 > team1 || console.log(`${game.team2} is more likely to win`);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

console.log(`---`);

// 2.
let total = 0;

for (const odd of Object.values(game.odds)) {
  total += odd;
}

const averageOdd = (total /= Object.values(game.odds).length);

console.log(averageOdd);
s;
console.log(`---`);

// 3.
for (const [key, value] of Object.entries(game.odds)) {
  // console.log(`Odd of victory ${game?.[key] ?? 'draw'}: ${value}`);

  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  const output = `Odd if ${teamStr}: ${value}`;

  console.log(output);
}

console.log(`---`);

// 4. bonus
const scorers = {};

for (const scorer of game.scored) {
  scorers[scorer] ? (scorers[scorer] += 1) : (scorers[scorer] = 1);
}

console.log(scorers);
*/
