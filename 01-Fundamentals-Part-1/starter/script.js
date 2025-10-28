
// let js = 'amazing';

// console.log(40 + 8 + 23 - 10);

// console.log('Jonas')
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);

// // ASSIGNMENT 1.1
// let country = 'Poland';
// let continent = 'Europe';
// let population = 40000000;

// console.log(country, continent, population);


// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;

// const job;

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// // math operators
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// const firstName = "Kacper";
// const lastName = "Grzesik";
// console.log(firstName + ' ' + lastName);

// // asignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// console.log(x);

// // comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const firstName = 'Jonas'
// const job = 'teacher'
// const birthYear = 1991;
// const year = 2037;

// const jonas = `I'm ${firstName}. I'm a ${year - birthYear} year old ${job}.`

// console.log(jonas);

// const age = 19;
// const isOldEnough = age >= 18;

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old.');

// let n 

/* Write your code below. Good luck! 🙂 */

// CHALLENGE 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 95;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// CHALLENGE 3
/* Write your code below. Good luck! 🙂 */

// const scoreDolphins = (97 + 112 * 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// const minimumScore = 100;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
//     console.log("Dolphins win the trophy");
// } else if (scoreKoalas < scoreDolphins && scoreKoalas >= minimumScore) {
//     console.log("Koalas win the trophy");
// } else if (scoreKoalas < minimumScore && scoreDolphins < minimumScore) {
//     console.log("No one wins the trophy");
// } else {
//     console.log("Both win the trophy")
// }

// const day = 'sunday';

// switch(day) {
//     case 'monday':  // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day');
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day');
// }

// const age = 23;
// // age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(`I like to drink ${drink}`);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// CHALLENGE 4
const bill = 430;


/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`)