"use strict";
/*
// Activating Strict Mode



let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(" I can drive :D");

//cont interface = `Audio`;
// const private = 534;
// const if = 534;


// Functions
function logger() {
  console.log(`My name is Jonas`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Function declarations and expressions.

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear){
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2)


// Arrow functions

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement}
  years`;
};

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1980, `Bob`));



function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of 
  orange`;
  return juice;
}
console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

  //return `${firstName} retires in ${retirement}
  years;
};

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1970, `Mike`));

/*Function declaration: function that can be used before it's called
Function expression: essentially a function value stored in a variable
Arrow function: great for a quick one-line functions. Has no this keyword (more later...)
Three different ways of writing functions, but they all work in a similar 
way: receive input data, transofrm data and then output data
const friend1 = `Pedro`;
const friend2 = `Manuel`;
const friend3 = `Paul`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);

const firstName = `Jonas`;
const jonas = [firstName, `Schedmann`, 2037 - 1991, `teacher`, friends];
console.log(jonas);
console.log(jonas.length);

// Exercise

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1]),
];

console.log(ages);


const friends = [`Michael`, `Steven`, `Peter`];

// Add elements
const newLength = friends.push(`Jay`);
console.log(friends);
console.log(newLength);

friends.unshift(`John`);
console.log(friends);

// Remove elements

friends.pop(); // last
console.log(friends);
const popped = friends.pop();
friends.shift(); // First
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bob`));



// Introduction to objects

const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedmann`,
  age: 2037 - 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Stevem`],
};


// Dot Vs. Bracket notation

const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedmann`,
  age: 2037 - 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Stevem`],
};
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas[`lastName`]);

// const nameKey = `Name`;
// console.log(jonas[`first` + nameKey]);
// console.log(jonas[`last` + nameKey]);

// console.log(jonas.`last` + nameKey )
// const interestedIn = prompt(
//   `What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends`
// );
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     `Wrong request! Choose between firstName, lastName, age, job, and friends`
//   );
// }

jonas.location = `Portugal`;
jonas[`twitter`] = `@jonasschmedtman`;
console.log(jonas);
console.log(jonas.friends.length);

// Challenge
// Jonas has 3 friends and his best friend is Michael.
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
);



const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedmann`,
  birthYear: 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Stevem`],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} ${
      this.lastName
    }is a ${this.calcAge()} years old ${this.job}, and he has ${
      this.hasDriverLicense ? `haas` : `no`
    } a driver's license. He has ${
      this.friends.length
    } friends, and his best friend is ${this.friends[1]}. `;
  },
};
console.log(jonas.getSummary());



//46 Iteration: The for Loop

// console.log(`Lifting weights repatition 1 🏋️`);
// console.log(`Lifting weights repatition 2 🏋️`);
// console.log(`Lifting weights repatition 3 🏋️`);
// console.log(`Lifting weights repatition 4 🏋️`);
// console.log(`Lifting weights repatition 5 🏋️`);
// console.log(`Lifting weights repatition 6 🏋️`);
// console.log(`Lifting weights repatition 7 🏋️`);
// console.log(`Lifting weights repatition 8 🏋️`);
// console.log(`Lifting weights repatition 9 🏋️`);
// console.log(`Lifting weights repatition 10 🏋️`);

// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repatition ${rep} 🏋️`);
}



// 47.Looping Arrays, Breaking and Continuing
const jonas = [
  `Jonas`,
  `Schmedtmann`,
  2037 - 1991,
  `teacher`,
  [`Michael`, `Peter`, `Steven`],
];

const types = [];
// Reading from jonas array
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  //Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// Continue and break

console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== `string`) continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === `number`) break;

  console.log(jonas[i], typeof jonas[i]);
}

*/

// 48. Looping Backwards and looping in loops
const jonas = [
  `Jonas`,
  `Schmedtmann`,
  2037 - 1991,
  `teacher`,
  [`Michael`, `Peter`, `Steven`],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
