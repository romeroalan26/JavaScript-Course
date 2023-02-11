'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
console.log(document.querySelector('.guess').value);
*/
let score = 10;
let Secretnumber = Math.trunc(Math.random() * 10 + 1);
let hScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  Secretnumber = Math.trunc(Math.random() * 10 + 1);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Star guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '25rem';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    // When player wins
  } else if (guess === Secretnumber) {
    if (score > 1) {
      if (score > hScore) {
        hScore = score;
        document.querySelector('.highscore').textContent = score;
      }
      document.querySelector('.message').textContent = 'Correct number!';
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = Secretnumber;
    } else {
      if (score > hScore) {
        hScore = score;
        document.querySelector('.highscore').textContent = score;
      }
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too high
  } else if (guess > Secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < Secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#960b0b';
    }
  }
});
