'use strict';

const checkBtn = document.querySelector('.check');
const guessNumber = document.querySelector('.guess');
const correctNumber = document.querySelector('.number');
const repeatGame = document.querySelector('.again');

let guessText = document.querySelector('.message');
let scoreText = document.querySelector('.score');
let highScoreText = document.querySelector('.highscore');

let score = 20;
let highScore = 0;
let randomNumber = Math.floor(Math.random() * 20) + 1;

function gameHandler() {
  if (+guessNumber.value < 1 || +guessNumber.value > 20) {
    alert('Please enter number between 1 and 20');
    return;
  }

  if (+guessNumber.value > randomNumber) {
    score--;
    scoreText.textContent = score;
    guessText.textContent = '📈 Too high!';
  } else if (+guessNumber.value < randomNumber) {
    score--;
    scoreText.textContent = score;
    guessText.textContent = '📉 Too low!';
  } else if (+guessNumber.value === randomNumber) {
    guessText.textContent = '🎉🎉🎉 You win!';
    correctNumber.textContent = randomNumber;
    correctNumber.style.background = 'green';
    correctNumber.style.color = '#fff';
    highScore = score;
    highScoreText.textContent = highScore;
    checkBtn.disabled = true;
    guessNumber.readOnly = true;
  }
}

function repeatGameHandler() {
  randomNumber = Math.floor(Math.random() * 20) + 1;

  score = 20;
  scoreText.textContent = score;

  guessNumber.value = '';
  guessText.textContent = 'Start guessing...';
  checkBtn.disabled = false;
  guessNumber.readOnly = false;

  correctNumber.textContent = '?';
  correctNumber.style.color = '#333';
  correctNumber.style.background = '#eee';
}

checkBtn.addEventListener('click', gameHandler);
repeatGame.addEventListener('click', repeatGameHandler);
