# Pig Game

## About

Pig Game is a two-player game where the computer randomly selects the starting player. The selected player becomes the "Active" player and can roll a dice. The goal of the game is to reach a total score of 100 points before your opponent.

## Demo

You can see a live demo of the project 👉 [https://pig-game-er.netlify.app/](https://pig-game-er.netlify.app/)

![Demo GIF](https://github.com/ersinisgor/complete-javascript-course/blob/main/07-Pig-Game/current/img/gif/Pig%20Game.gif)

## How to Play

1- At the beginning of the game, the computer randomly selects the starting player. The selected player is marked as "Active."

2 -The "Active" player can click the "Roll Dice" button to roll a six-sided die. The number rolled will be displayed in the "Current" score section.

3- If the player rolls a "1," they lose their current score, and it becomes the other player's turn.

4- If the player rolls any other number, that number is added to their current score.

5- The player can continue rolling the die as many times as they want to accumulate points in their current score. To secure these points, they can click the "Hold" button. The current score is then added to their total score, and it becomes the other player's turn.

6- The game continues in this manner until one of the players reaches a total score of 100 points or more.

7- The player who reaches 100 points first wins the game. Their name will be displayed as the "Winner."

## Code Overview

The JavaScript code for this game controls the game logic. Here's a brief explanation of key functions:

- `selectStartPlayer:` This function randomly selects the starting player and initializes the game.

- `reset:` Resets the game to its initial state.

- `randomNumber:` Generates a random number between 1 and 6 for the dice roll.

- `switchPlayer:` Switches the active player when a "1" is rolled or the "Hold" button is clicked.

- `holdScore:` Handles the logic for holding the current score and checking if a player has won.

- `playGame:` Controls the dice rolling logic and updates the current score.

## Technologies Used

- HTML
- CSS
- JavaScript

## Credits

- [The Complete JavaScript Course 2023: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/ 'https://www.udemy.com/course/the-complete-javascript-course/') Udemy course by [Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/ 'https://www.udemy.com/user/jonasschmedtmann/')
