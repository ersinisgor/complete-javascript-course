'use strict';
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceImage = document.querySelector('.dice');
const currentScore = document.querySelectorAll('.current-score');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const player = document.querySelectorAll('.player');

const player1 = player[0].classList;
const player2 = player[1].classList;

let value1 = 0;
let value2 = 0;
let score1 = 0;
let score2 = 0;
let isThereWinner = false;
diceImage.style.display = 'none';

const reset = function () {
  debugger;
  value1 = 0;
  value2 = 0;
  score1 = 0;
  score2 = 0;
  currentScore[0].textContent = value1;
  currentScore[1].textContent = value2;
  player1Score.textContent = score1;
  player2Score.textContent = score2;
  //diceImage.style.display = 'none';
  player1.remove('player--winner');
  player2.remove('player--winner');
};

const randomNumber = function () {
  const random = Math.trunc(Math.random() * 6) + 1;
  return random;
};

const switchPlayer = function () {
  if (player1.contains('player--active')) {
    player1.remove('player--active');
    player2.add('player--active');
    value1 = 0;
    currentScore[0].textContent = value1;
  } else if (player2.contains('player--active')) {
    player2.remove('player--active');
    player1.add('player--active');
    value2 = 0;
    currentScore[1].textContent = value2;
  }
};

const holdScore = function () {
  if (player1.contains('player--active') && !isThereWinner) {
    score1 += value1;
    player1Score.textContent = score1;
    if (score1 < 6) {
      value1 = 0;
      switchPlayer();
    } else {
      player1.add('player--winner');
      isThereWinner = true;
    }
  } else if (player2.contains('player--active') && !isThereWinner) {
    score2 += value2;
    player2Score.textContent = score2;
    if (score2 < 6) {
      value2 = 0;
      switchPlayer();
    } else {
      player2.add('player--winner');
      isThereWinner = true;
    }
  }
};

const playGame = function () {
  if (!isThereWinner) {
    let dice = randomNumber();

    switch (dice) {
      case 1:
        diceImage.style.display = 'block';
        diceImage.setAttribute('src', 'dice-1.png');
        setTimeout(() => {
          diceImage.style.display = 'none';
        }, 800);
        break;
      case 2:
        diceImage.style.display = 'block';
        diceImage.setAttribute('src', 'dice-2.png');
        setTimeout(() => {
          diceImage.style.display = 'none';
        }, 800);
        break;
      case 3:
        diceImage.style.display = 'block';
        diceImage.setAttribute('src', 'dice-3.png');
        setTimeout(() => {
          diceImage.style.display = 'none';
        }, 800);
        break;
      case 4:
        diceImage.style.display = 'block';
        diceImage.setAttribute('src', 'dice-4.png');
        setTimeout(() => {
          diceImage.style.display = 'none';
        }, 800);
        break;
      case 5:
        diceImage.style.display = 'block';
        diceImage.setAttribute('src', 'dice-5.png');
        setTimeout(() => {
          diceImage.style.display = 'none';
        }, 800);
        break;
      case 6:
        diceImage.style.display = 'block';
        diceImage.setAttribute('src', 'dice-6.png');
        setTimeout(() => {
          diceImage.style.display = 'none';
        }, 800);
        break;
      default:
        diceImage.style.display = 'none';
        break;
    }

    if (dice === 1) {
      setTimeout(() => {
        switchPlayer();
      }, 800);
    } else {
      setTimeout(() => {
        if (player1.contains('player--active')) {
          value1 += dice;
          currentScore[0].textContent = value1;
        } else if (player2.contains('player--active')) {
          value2 += dice;
          currentScore[1].textContent = value2;
        }
      }, 500);
    }
  }
};

btnRoll.addEventListener('click', playGame);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', reset);
