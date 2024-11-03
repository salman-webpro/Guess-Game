'use strict';

// problems
// - set a secret number between 1-20.
// - Compare input value with the secret number on check button click.
// - Show a status dpending on the gap between two numbers.
// - Count the score and set highscore.
// - On correct guess make the body color green.
// - Reset the game on Again button click.

// solution
// - scrap the values and tags from html;
// - set a secret number between 1-20.
// - create a function to compare the secret value and input value;
// - also update score and highscore in the function;
// - return score , highscore , status ,
// - reset function for reseting the all the values and fields.

const inputValue = document.querySelector('.guess');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const secretNumber = document.querySelector('.number');
let statusMassage = document.querySelector('.message');
const checkButton = document.querySelector('.check');
const resetButton = document.querySelector('.again');

let mySecretNumber = Math.trunc(Math.random() * 20) - 1;
let currentScore = 20;
let currentHighScore = 0;
const currentStatus = function (massage) {
  statusMassage.textContent = massage;
};

const ButtonInputDisable = function (which) {
  checkButton.disabled = which;
  inputValue.disabled = which;
};

checkButton.addEventListener('click', () => {
  const compareValue = Number(inputValue.value);

  if (!compareValue) {
    currentStatus('Input a number first 🤷‍♂️');
  } else if (compareValue === mySecretNumber) {
    if (currentScore > currentHighScore) {
      currentHighScore = currentScore;
      highScore.innerHTML = currentHighScore;
    }
    currentStatus('Success 😍😍');
    secretNumber.innerHTML = mySecretNumber;
    document.body.style.backgroundColor = 'Green';
    ButtonInputDisable(true);
  } else if (compareValue !== mySecretNumber) {
    if (currentScore > 1) {
      currentScore--;
      score.innerHTML = currentScore;
      if (compareValue >= mySecretNumber + 5) {
        currentStatus('📈 Too High');
      } else if (compareValue <= mySecretNumber - 5) {
        currentStatus('📉 Too Low');
      } else {
        currentStatus('✌️ Too close');
      }
    } else {
      currentStatus('You lost the game 😭');
      score.textContent = 0;
      ButtonInputDisable(true);
      document.body.style.backgroundColor = '#ff5d5d';
    }
    // currentScore !== 0 ? currentScore-- : currentScore;
  }
});

resetButton.addEventListener('click', () => {
  currentScore = 20;
  score.textContent = currentScore;
  currentStatus('Start Guessing Again');
  mySecretNumber = Math.trunc(Math.random() * 20) + 2;
  inputValue.value = '';
  ButtonInputDisable(false);
  document.body.style.backgroundColor = 'black';
  secretNumber.innerHTML = '?';
});
