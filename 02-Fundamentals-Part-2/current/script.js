/* Functions */

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("Turkey", 86, "Ankara");
const country2 = describeCountry("Portugal", 10, "Lisbon");
const country3 = describeCountry("Germany", 83, "Berlin");

console.log(country1, country2, country3);
