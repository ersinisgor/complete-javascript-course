//let bill = 275;
//let bill = 40;
let bill = 430;
let tip;

bill >= 50 && bill <= 300 ? (tip = 0.15 * bill) : (tip = 0.2 * bill);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }`
);
