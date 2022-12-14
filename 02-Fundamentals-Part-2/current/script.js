/* Functions */

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("Turkey", 86, "Ankara");
//const country2 = describeCountry("Portugal", 10, "Lisbon");
//const country3 = describeCountry("Germany", 83, "Berlin");

//console.log(country1, country2, country3);

/* Function Declaration */
function persantageOfWorld1(population) {
  const worldPopulation = 7900;
  return (population * 100) / worldPopulation;
}

/* const turkey = persantageOfWorld1(86);
const portugal = persantageOfWorld1(10);
const germany = persantageOfWorld1(83);

console.log(turkey, portugal, germany); */

/* Function Expression */
/* const persantageOfWorld2 = function (population) {
  const worldPopulation = 7900;
  return (population * 100) / worldPopulation;
}; */

/* const turkey = persantageOfWorld2(86);
const portugal = persantageOfWorld2(10);
const germany = persantageOfWorld2(83); */

//console.log(turkey, portugal, germany);

/* Arrow Function */
/* const persantageOfWorld3 = (population) => {
  (population * 100) / 7900;
};

const turkey = persantageOfWorld3(86);
const portugal = persantageOfWorld3(10);
const germany = persantageOfWorld3(83);

console.log(turkey, portugal, germany); */

/* Funcion in Other Function */
/* const describePopulation = function (country, population) {
  const percentage = persantageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
  console.log(description);
};

describePopulation("Turkey", 86); */

/* Introduction Array */

const populations = [50, 622, 33, 86];
const persantages = [
  persantageOfWorld1(populations[0]),
  persantageOfWorld1(populations[1]),
  persantageOfWorld1(populations[2]),
  persantageOfWorld1(populations[3]),
];
console.log(persantages);
