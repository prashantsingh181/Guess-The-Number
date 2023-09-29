'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let numberElement = document.querySelector('.number');

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

// Functionality of check button
function handleCheckClick() {
  if (score > 1) {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      displayMessage('🚫 No Number');
    } else if (guess === secretNumber) {
      displayMessage('✅ Correct');
      numberElement.textContent = secretNumber;
      numberElement.style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document
        .querySelector('.check')
        .removeEventListener('click', handleCheckClick);
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      score--;
      displayScore(score);
      if (guess > secretNumber) {
        displayMessage(guess - secretNumber > 5 ? '😱 Too High' : '🔺 High');
      } else if (guess < secretNumber) {
        displayMessage(secretNumber - guess > 5 ? '😱 Too Low' : '🔻 Low');
      }
    }
  } else {
    displayMessage('You lost the game!');
    displayScore(0);
  }
}

// Functionality of again button
function handleAgainClick() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  numberElement.style.width = '15rem';
  numberElement.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.check').addEventListener('click', handleCheckClick);
}

document.querySelector('.check').addEventListener('click', handleCheckClick);
document.querySelector('.again').addEventListener('click', handleAgainClick);
