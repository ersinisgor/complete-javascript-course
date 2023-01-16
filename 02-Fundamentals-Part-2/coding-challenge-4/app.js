let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

function calcAverage(arr) {
  const sum = arr.reduce((x, y) => x + y, 0);
  return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(tips);
console.log(totals);
