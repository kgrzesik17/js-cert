// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = "23";
// if (x === 23) console.log(23);

// function dsa() {
//   return 1;
// }

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(1991));

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// // 1) understanding the problem
// // - what is temp amplitude - difference between highest and lowerst temp
// // - how do we caltulate highest and lowest temperatures
// // - what does a sensor error look like? what to do if one occurs?

// // 2) breaking into sub-problems
// // - how to ignore errors
// // - find max value in temp array
// // - find min value in temp array
// // - subtract min from max and return it

// function calcTempAmplitude(temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// }

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // problem 2:
// // function should now recieve 2 arrays of temps

// // 1) understanding the problem
// // - with 2 arrays, do we need to implement functionality twice? - no! just merge two arrays

// // 2) breaking into sub-problems
// // merge 2 arrays

// function calcTempAmplitudeNew(t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
// 10   if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// }

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// function measureKelvin() {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     // c) fix the bug
//     // value: Number(prompt("Degrees celcius:")),
//     value: 10,
//   };

//   // b) find the bug
//   // console.log(measurement);
//   console.table(measurement);
//   // console.log(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// }

// // a) identify the bug
// console.log(measureKelvin());

// // using a debugger
// function calcTempAmplitudeBug(t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// }

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 1, 5]);
// // a) identify
// console.log(amplitudeBug);

// CHALLENGE 3.1
/*
1. UNDERSTAND THE PROBLEM
2. DIVIDE AND CONQUER
- translate arrays to strings 
- make sure to auto update it
*/

// function printForecast(arr) {
//   let output = "";

//   for (let i = 0; i < arr.length; i++) {
//     output += `${arr[i]}°C in ${i + 1} days ... `;
//   }

//   return "... " + output;
// }

// const test1 = [17, 21, 23];
// const test2 = [12, 5, -5, 0, 4];

// const forecast1 = printForecast(test1);
// const forecast2 = printForecast(test2);
// console.log(forecast1);
// console.log(forecast2);

// // CHALLENGE 3.1 - what it should be
// /*
// 1. UNDERSTAND THE PROBLEM
// - array transformed to string, separated by ...
// - what is X days? andwer: index + 1
// 2. DIVIDE AND CONQUER
// - transform array into string
// - transform each elements to string with °C
// - strings need to containd day (index + 1)
// - add ... betwee nelements and start and end of the string
// */

// challenge 2.1
/*
1. understanding
- how to output the day with the most hours worked? - index to str
- what's the output type? - object
- what's the input format? - [0]: mon, [6]: sun
2. divide and conquer
- sum total hours worked ✔️
- check average daily hours ✔️
- check the max index ✔️
- transform max index to string (day) ✔️
- check the number where hours > 0 ✔️
- check if sum > 35
- write it down to an object
*/

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function checkMaxIndex(arr) {
  let max = arr[0];
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

function workHours(hours) {
  const sum = sumArray(hours); // check the sum
  const avg = sum / hours.length; // check the average
  const maxIndex = checkMaxIndex(hours); // check the index of max value
  let mostWorkedDay = ""; // busiest work day
  let workingDays = 0;
  const fullTime = sum >= 35 ? true : false; // check if work was full time

  // convert index to string
  switch (maxIndex) {
    case 0:
      mostWorkedDay = "Monday";
      break;
    case 1:
      mostWorkedDay = "Tuesday";
      break;
    case 2:
      mostWorkedDay = "Wednesday";
      break;
    case 3:
      mostWorkedDay = "Thursday";
      break;
    case 4:
      mostWorkedDay = "Friday";
      break;
    case 5:
      mostWorkedDay = "Saturday";
      break;
    case 60:
      mostWorkedDay = "Sunday";
      break;
  }

  // check the number of working days
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] !== 0) {
      workingDays++;
    }
  }

  return {
    totalHours: sum,
    averageDailyHours: avg,
    mostHoursWorkedDay: mostWorkedDay,
    daysWorked: workingDays,
    isFullTime: fullTime,
  };
}

const test = [1, 3, 2];
const data = [7.5, 8, 6.5, 0, 8.5, 5, 0];

// console.log(sum([1, 2, -3, 10]));
const work = workHours(data);
console.log(work);
