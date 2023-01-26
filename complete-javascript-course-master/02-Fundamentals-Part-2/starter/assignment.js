"use strict";
/*
// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console


function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its
  capital city is ${capitalCity}`;
  return description;
}

const descriptionMade = describeCountry(
  `Dominican Republic`,
  33200,
  `Santo Domingo`
);
console.log(descriptionMade);

//Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27



const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(`${scoreDolphins} and ${scoreKoalas}`);
const checkWinner = function (averageDolphins, averageKoalas) {
  if (averageDolphins > averageKoalas && averageDolphins >= averageKoalas * 2) {
    console.log(
      `Dolphins are the winners (${averageDolphins} vs ${averageKoalas})`
    );
  } else if (
    averageKoalas > averageDolphins &&
    averageKoalas >= averageDolphins * 2
  ) {
    console.log(
      `Koalas are the winners (${averageKoalas} vs ${averageDolphins})`
    );
  } else {
    console.log(`There is no winner!`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)



function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}
console.log(
  `Dominican Republic has 33million people, so it's about ${percentageOfWorld1(
    3300000
  )}% of the world population`
);

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};

console.log(
  `Dominican Republic has 33million people, so it's about ${percentageOfWorld2(
    33000000
  )}% of the world population`
);


LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'

const percentageOfWorld3 = (population) => (population / 7900000000) * 100;
console.log(
  `Dominican Republic has 33million people, so it's about ${percentageOfWorld3(
    33000000
  )}% of the world population`
);


LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world population.`;
  console.log(description);
};

describePopulation(`Dominican Republic`, 33);
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values


const populations = new Array(33, 44, 59, 87);
console.log(populations.length);
if (populations.length === 4) {
  console.log(`The array has 4 elements`);
} else {
  console.log(`The array does not have 4 elements`);
}
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const percentages = new Array(
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
);

console.log(percentages);

LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.


const neighbours = new Array(`Paraguay`, `Brazil`, `Argentina`);
neighbours.push(`Utopia`);
neighbours.pop();
if (!neighbours.includes(`Germany`)) {
  console.log(`Probably not a central European country :D`);
}
console.log(neighbours);
console.log(neighbours.indexOf(`Brazil`));
neighbours[1] = `Dominican Republic`;
console.log(neighbours);
neighbours[2] = `Peru`;
console.log(neighbours);

Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44


const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);

LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)

const myCountry = {
  country: `Dominican Republi`,
  capital: `Santo Domingo`,
  language: `Spanish`,
  popularion: 33,
  neighbours: [`Haiti`],
};

LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.


const myCountry = {
  country: `Dominican Republic`,
  capital: `Santo Domingo`,
  language: `Spanish`,
  population: 33,
  neighbours: [`Haiti`],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring country and a capital called ${myCountry.capital}.`
);

myCountry.population = 33 + 2;
console.log(myCountry.population);
myCountry[`population`] = 35 - 2;
console.log(myCountry[`population`]);

*/
