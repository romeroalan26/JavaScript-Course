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

*/
