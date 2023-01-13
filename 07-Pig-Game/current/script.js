'use strict';
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const playerNumber = document.querySelector('.num');
const startScreen = document.querySelector('.start');
const btnRoll = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');

let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let isThereWinner = false;

const selectStartPlayer = function () {
  const num = Math.trunc(Math.random() * 2) + 1;

  if (num === 1) {
    startScreen.style.display = 'flex';
    playerNumber.textContent = `PLAYER ${num}`;
    activePlayer = 0;
    setTimeout(() => {
      player1.classList.add('player--active');
      //reset();
    }, 700);
    setTimeout(() => {
      startScreen.style.display = 'none';
    }, 1700);
  } else if (num === 2) {
    startScreen.style.display = 'flex';
    playerNumber.textContent = `PLAYER ${num}`;
    activePlayer = 1;
    setTimeout(() => {
      player2.classList.add('player--active');
      //reset();
    }, 700);
    setTimeout(() => {
      startScreen.style.display = 'none';
    }, 1700);
  }
  console.log(num);
};

const randomNumber = function () {
  const random = Math.trunc(Math.random() * 6) + 1;
  return random;
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

const playGame = function () {
  if (!isThereWinner) {
    let dice = randomNumber();

    //show dice on screen
    diceImage.style.display = 'block';
    diceImage.setAttribute('src', `dice-${dice}.png`);
    setTimeout(() => {
      diceImage.style.display = 'none';
    }, 800);

    // chech dice 1 rolled
    if (dice !== 1) {
      setTimeout(() => {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
      }, 500);
    } else {
      setTimeout(() => {
        switchPlayer();
      }, 800);
    }
  }
};

setTimeout(selectStartPlayer, 1000);

btnRoll.addEventListener('click', playGame);
/* ------------------OLD SCRIPT------------------------- */
/* const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const playerNumber = document.querySelector('.num');
const diceImage = document.querySelector('.dice');
const btnStart = document.querySelector('.btn--start');
const startScreen = document.querySelector('.start');
const currentScore = document.querySelectorAll('.current-score');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const player = document.querySelectorAll('.player');
const winner = document.querySelectorAll('.winner');

const player1 = player[0].classList;
const player2 = player[1].classList;

let value1 = 0;
let value2 = 0;
let score1 = 0;
let score2 = 0;
let isThereWinner = false; */

/* const selectStartPlayer = function () {
  const num = Math.trunc(Math.random() * 2) + 1;

  if (num === 1) {
    startScreen.style.display = 'flex';
    playerNumber.textContent = `PLAYER ${num}`;
    setTimeout(() => {
      player1.add('player--active');
      player2.remove('player--active');
      reset();
    }, 700);
    setTimeout(() => {
      startScreen.style.display = 'none';
    }, 1700);
  } else if (num === 2) {
    startScreen.style.display = 'flex';
    playerNumber.textContent = `PLAYER ${num}`;
    setTimeout(() => {
      player1.remove('player--active');
      player2.add('player--active');
      reset();
    }, 700);
    setTimeout(() => {
      startScreen.style.display = 'none';
    }, 1700);
  }
}; */

/* const reset = function () {
  value1 = 0;
  value2 = 0;
  score1 = 0;
  score2 = 0;
  currentScore[0].textContent = value1;
  currentScore[1].textContent = value2;
  player1Score.textContent = score1;
  player2Score.textContent = score2;
  diceImage.style.display = 'none';
  player1.remove('player--winner');
  player2.remove('player--winner');
  winner[0].textContent = '';
  winner[1].textContent = '';
  isThereWinner = false;
}; */

/* const randomNumber = function () {
  const random = Math.trunc(Math.random() * 6) + 1;
  return random;
}; */

/* const switchPlayer = function () {
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
}; */

/* const holdScore = function () {
  if (player1.contains('player--active') && !isThereWinner) {
    score1 += value1;
    player1Score.textContent = score1;
    if (score1 < 100) {
      value1 = 0;
      switchPlayer();
    } else {
      player1.add('player--winner');
      winner[0].textContent = 'winner';
      isThereWinner = true;
    }
  } else if (player2.contains('player--active') && !isThereWinner) {
    score2 += value2;
    player2Score.textContent = score2;
    if (score2 < 100) {
      value2 = 0;
      switchPlayer();
    } else {
      player2.add('player--winner');
      winner[1].textContent = 'winner';
      isThereWinner = true;
    }
  }
}; */

/* const playGame = function () {
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
}; */

/* setTimeout(selectStartPlayer, 1000);

btnRoll.addEventListener('click', playGame);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', () => {
  reset();
  setTimeout(selectStartPlayer, 1000);
}); */
