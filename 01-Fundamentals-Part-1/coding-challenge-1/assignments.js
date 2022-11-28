// Test-1

/* const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95; */

// Test-2

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
