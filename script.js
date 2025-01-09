'use strict';

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
('use strict');

// Constractor fucntion

const User = function (userName, passWord) {
  this.userName = userName;
  this.passWord = passWord;
};

const Admin = function (user, pass) {
  this.user = user;
  this.pass = pass;
};

User.prototype.calcAge = function () {
  this.age = 2037 - this.passWord;
};

const salman = new User('salman', 1111);
const Mahmud = new User('Mhamud', 9999);
const Sejan = { Mhamud: 9999 };
const Sabbir = new Admin('Sabbir', 4444);

const AllUsers = [];
const Admins = [];

function insert(user) {
  if (user instanceof User) {
    AllUsers.push(user);
  }
  if (user instanceof Admin) {
    Admins.push(user);
  }
}

salman.calcAge();
insert(salman);
insert(Mahmud);
insert(Sejan);
insert(Sabbir);

console.log(AllUsers);
console.log(Admins);
console.log(salman.__proto__);
console.log(User.prototype.isPrototypeOf(salman));
