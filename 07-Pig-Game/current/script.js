'use strict';
const btnRoll = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');
const player = document.querySelectorAll('.player');
const currentScore = document.querySelectorAll('.current-score');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const btnHold = document.querySelector('.btn--hold');

let value1 = 0;
let value2 = 0;
let score1 = 0;
let score2 = 0;
currentScore[0].textContent = value1;
currentScore[1].textContent = value2;
player1Score.textContent = score1;
player2Score.textContent = score2;

const randomNumber = function () {
  const random = Math.trunc(Math.random() * 6) + 1;
  return random;
};

const switchPalyer = function () {
  if (player[0].classList.contains('player--active')) {
    player[0].classList.remove('player--active');
    player[1].classList.add('player--active');
    currentScore[0].textContent = 0;
    currentScore[1].textContent = 0;
    //player1Score.textContent = 0;
  } else if (player[1].classList.contains('player--active')) {
    player[1].classList.remove('player--active');
    player[0].classList.add('player--active');
    currentScore[1].textContent = 0;
    currentScore[0].textContent = 0;
    //player2Score.textContent = 0;
  }
};

const holdScore = function () {
  //debugger;
  if (player[0].classList.contains('player--active')) {
    //value += currentScore[0].textContent;
    //player1Score.textContent = currentScore[0].textContent + value;
    score1 += Number(currentScore[0].textContent);
    player1Score.textContent = score1;
    switchPalyer();
  } else if (player[1].classList.contains('player--active')) {
    //player2Score.textContent = currentScore[1].textContent + value;
    //value += currentScore[1].textContent;
    score2 += Number(currentScore[1].textContent);
    player2Score.textContent = score2;
    switchPalyer();
  }
};

const playGame = function () {
  let dice = randomNumber();
  console.log(dice);

  switch (dice) {
    case 1:
      diceImage.setAttribute('src', 'dice-1.png');
      break;
    case 2:
      diceImage.setAttribute('src', 'dice-2.png');
      break;
    case 3:
      diceImage.setAttribute('src', 'dice-3.png');
      break;
    case 4:
      diceImage.setAttribute('src', 'dice-4.png');
      break;
    case 5:
      diceImage.setAttribute('src', 'dice-5.png');
      break;
    case 6:
      diceImage.setAttribute('src', 'dice-6.png');
      break;
    default:
      diceImage.setAttribute('src', '');
      break;
  }

  if (dice === 1) {
    switchPalyer();
  } else {
    if (player[0].classList.contains('player--active')) {
      value1 += dice;
      currentScore[0].textContent = value1;
    } else if (player[1].classList.contains('player--active')) {
      value2 += dice;
      currentScore[1].textContent = value2;
    }
  }
};

btnRoll.addEventListener('click', playGame);
btnHold.addEventListener('click', holdScore);
