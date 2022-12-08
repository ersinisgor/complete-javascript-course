/* Values and Veriables */

let country = "Turkey";
let continent = "European continent";
let population = 85.0e6;

/* console.log(population); */

/* Data Types */

let isIsland = false;
let language;

/* console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); */

/* Let, Const and Var */
language = "Turkish";
const capital = "Ankara";
/* console.log(capital); */

/* Basic Operators */
let split = population / 2;
split++;
const finland = 6.0e6;
const avaragePopulation = 33.0e6;
let description =
  country +
  " is in " +
  continent +
  " ,and it's " +
  population +
  " people speak " +
  language;
/* console.log(population < avaragePopulation);
console.log(description); */

/* Template Literals */
description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
/* console.log(description); */

/* Taking Decision */
/* population = 13.0e6;
if (population > 33.0e6) {
  console.log(`${country}'s population is above avarage`);
} else {
   console.log(
    `${country}'s population is ${33.0e6 - population} below avarage`
  ); 
}
population = 85.0e6; */

/* Type Conversion and Coercion */
"9" - "5"; // 4
"19" - "13" + "17"; // 617
"19" - "13" + 17; // 23
"123" < 57; // false
5 + 6 + "4" + 9 - 4 - 2; // 1143

/* Equalty Operators */
/* let numNeighbours = prompt(
  "How many neighbour countries does your country have?"
); */

/* if (numNeighbours == 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No Border");
} */

/* numNeighbours = Number(numNeighbours);
if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No Border"); 
}*/

/* Logical Operator */
/* if (language === "English" && population < 50.0e6 && isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} doesn't meet your criteria`);
} */

/* Switch Statement */
/* switch (language.toLowerCase()) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
} */

/* Ternary Operator */
population > 33.0e6
  ? console.log(`${country}'s population is above avarage`)
  : console.log(`${country}'s population is blowe avarage`);
