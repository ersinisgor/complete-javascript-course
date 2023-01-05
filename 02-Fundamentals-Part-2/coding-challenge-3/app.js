const mark = {};
const john = {};

const calcBMI = function (mass, height) {
  const bmi = mass / (height * height);
  return bmi;
};

mark.fullName = "Mark Miller";
mark.mass = 78;
mark.height = 1.69;
john.fullName = "John Smith";
john.mass = 92;
john.height = 1.95;

const markBmi = calcBMI(mark["mass"], mark["height"]);
const johnBmi = calcBMI(john["mass"], john["height"]);

if (johnBmi > markBmi) {
  console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
} else {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
}
