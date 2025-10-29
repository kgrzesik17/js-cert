// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // strict mode showcase
// const interface = 'Audio';
// const private = 534;
// const if = 23;

// function logger() {
//     console.log('My name is Jonas');
// }

// // calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age2);

// // arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037- birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement(1991, 'Kacper'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
    
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }
// console.log(calcAge1(2003));

// const calcAge2 = function(birthYear) {
//     return 2025 - birthYear;
// }
// console.log(calcAge2(2003));

// const calcAge3 = birthYear => 2025 - birthYear;
// console.log(calcAge3(2003));

// const process = (apples, oranges) => {
//     return `Juice made with ${apples} apples and ${oranges} oranges.`
// }
// console.log(process(2, 3));

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3; 
// }

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);            

//     } else {
//         console.log(`No team wins...`);
//     }

//     return 0;
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// let friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2007, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice'];
// // console.log(friends);

// const kacper = ['Kacper', 'G', 2025 - 2003, 'programmer', friends];
// console.log(kacper);

// // excercise 
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

// add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven'));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter.');
}