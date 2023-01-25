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
way: receive input data, transofrm data and then output data*/
const friend1 = `Pedro`;
const friend2 = `Manuel`;
const friend3 = `Paul`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);
