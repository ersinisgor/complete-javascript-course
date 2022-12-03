// Test
let dolphinsAvarage = (96 + 108 + 89) / 3;
let koalasAvarage = (88 + 91 + 110) / 3;

if (dolphinsAvarage < koalasAvarage) {
  console.log("Koala wins");
} else if (koalasAvarage > dolphinsAvarage) {
  console.log("Dolphin wins");
} else if (dolphinsAvarage === koalasAvarage) {
  console.log("Both wins");
}

// Bonus-1
dolphinsAvarage = (97 + 112 + 101) / 3;
koalasAvarage = (109 + 95 + 123) / 3;

if (dolphinsAvarage < koalasAvarage && koalasAvarage >= 100) {
  console.log("Koala wins");
} else if (dolphinsAvarage > koalasAvarage && dolphinsAvarage >= 100) {
  console.log("Dolphin wins");
} else if (dolphinsAvarage === koalasAvarage) {
  console.log("Both wins");
}

// Bonus-2
dolphinsAvarage = (97 + 112 + 101) / 3;
koalasAvarage = (109 + 95 + 106) / 3;

if (dolphinsAvarage < koalasAvarage && koalasAvarage >= 100) {
  console.log("Koala wins");
} else if (dolphinsAvarage > koalasAvarage && dolphinsAvarage >= 100) {
  console.log("Dolphin wins");
} else if (
  dolphinsAvarage === koalasAvarage &&
  dolphinsAvarage >= 100 &&
  koalasAvarage >= 100
) {
  console.log("Both wins");
} else {
  console.log("Nobody wins");
}
