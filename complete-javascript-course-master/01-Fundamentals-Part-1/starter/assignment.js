/*
// LECTURE: Values and Variables

const country = "Dominican Republic";
const continent = "American Continent";
let population = 11200000;
console.log(country, continent, population);

// LECTURE: Data Types

const isIsland = true;
let language;
console.log(typeof isIsland, typeof population,
    typeof country, typeof language);

// LECTURE: let, const and var

language = "spanish";

// LECTURE: Basic Operators
// console.log(population / 2);
population++;
console.log(population);
let findlandPopulation = 6000000;
console.log(population > findlandPopulation);
let averagePopulation = 33000000;
console.log(population < averagePopulation);
let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

Conding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
- Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
- Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

let markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, markHigherBMI;
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
markBMI = markMass / markHeight ** 2;
console.log("Marks BMI =" + " " + markBMI + " " + "kg/m");
johnBMI = johnMass / johnHeight ** 2;
console.log("Johns BMI =" + " " + johnBMI + " " + "kg/m");
markHigherBMI = markBMI > johnBMI;
console.log("Is Marks BMI higher than Johns BMI?" + " " + markHigherBMI);

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBMI = markMass / markHeight ** 2;
console.log("Marks BMI =" + " " + markBMI + " " + "kg/m");
johnBMI = johnMass / johnHeight ** 2;
console.log("Johns BMI =" + " " + johnBMI + " " + "kg/m");
markHigherBMI = markBMI > johnBMI;
console.log("Is Marks BMI higher than Johns BMI?" + " " + markHigherBMI);


// LECTURE: Strings and Template Literals
let description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(description);


//LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original

let averagePopulation = 33000000,
  population = 11200000;
if (population > averagePopulation) {
  console.log(`Dominican Republic's population is above average`);
} else {
  console.log(
    `Dominican's republic population is ${
      averagePopulation - population
    } below average`
  );
}

// Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"


let markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, markHigherBMI;
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
markBMI = markMass / markHeight ** 2;
// console.log("Marks BMI =" + " " + markBMI + " " + "kg/m");
johnBMI = johnMass / johnHeight ** 2;
// console.log("Johns BMI =" + " " + johnBMI + " " + "kg/m");
markHigherBMI = markBMI > johnBMI;
// console.log("Is Marks BMI higher than Johns BMI?" + " " + markHigherBMI);
if (markBMI > johnBMI) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBMI = markMass / markHeight ** 2;
// console.log("Marks BMI =" + " " + markBMI + " " + "kg/m");
johnBMI = johnMass / johnHeight ** 2;
// console.log("Johns BMI =" + " " + johnBMI + " " + "kg/m");
markHigherBMI = markBMI > johnBMI;
// console.log("Is Marks BMI higher than Johns BMI?" + " " + markHigherBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`Johns's BMI is higher than Mark's!`);
}
console.log(`Johns's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);



let numNeighbours = Number(
  prompt(`How many neighbour countries does your country have?`)
);
if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border.`);
} else {
  console.log(`No border`);
}


// LECTURE: Logical Operators

const country = "Dominican Republic";
const population = 11200000;
const isIsland = false;
const language = `english`;

if (language === `english` && population < 50000000 && !isIsland) {
  console.log(`You should live in the ${country}. 😁👍`);
} else {
  console.log(`You should not live in the ${country}. 🫤👎`);
}

// Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolphinsScore;
let koalasScore;
dolphinsScore = (96 + 108 + 89) / 3;
koalasScore = (96 + 108 + 89) / 3;

if (dolphinsScore > koalasScore) {
  console.log(`The winner team is Dolphins. 🎉`);
} else if (dolphinsScore === koalasScore) {
  console.log(`There is a draw! They both have the same score average. 🏃‍♂️`);
} else {
  console.log(`The winner team is Koalas!🎉`);
}

let dolphinsScore;
let koalasScore;
dolphinsScore = (97 + 97 + 98) / 3;
koalasScore = (97 + 97 + 98) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log(`The winner team is Dolphins. 🎉`);
} else if (dolphinsScore > koalasScore && dolphinsScore < 100) {
  console.log(`Dolphins team has a higher score, but unfortunatelly it's less than 100, so
  there's no winner.`);
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
  console.log(`The winner team is Koalas. 🎉`);
} else if (koalasScore > dolphinsScore && koalasScore < 100) {
  console.log(`Koalas team has a higher score, but unfortunatelly it's less than 100, so
  there's no winner.`);
} else if (dolphinsScore === koalasScore && dolphinsScore >= 100) {
  console.log(`There is a draw! They both have the same score average. 🏃‍♂️`);
} else {
  console.log(`There is a draw! They both have the same score average, but unfortunatelly 
  their average is not over 100, so there's no winner.`);
}



// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

const language = `creole`;

switch (language) {
  case `chinese`:
  case `mandarin`:
    console.log(`MOST number of native speakers!`);
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers`);
    break;
  case `english`:
    console.log("3rd place");
    break;
  case `hindi`:
    console.log(`Number 4`);
    break;
  case `arabic`:
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too 😁`);
    break;
}

*/
