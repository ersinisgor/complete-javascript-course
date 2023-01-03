"use strict";

const calcAverage = (a, b, c) => (a + b + c) / 3;

const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

/* const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27); */

const checkWinner = function (dolhins, koalas) {
  if (dolhins > koalas && dolhins >= koalas * 2) {
    console.log(`Dolhins win (${dolhins} vs ${koalas})`);
  } else if (koalas > dolhins && koalas >= dolhins * 2) {
    console.log(`Koalas win (${koalas} vs ${dolhins})`);
  } else {
    console.log("Nobody wins");
  }
};

checkWinner(avgDolhins, avgKoalas);
