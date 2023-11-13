'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Hello World!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let target = Math.trunc(Math.random() * 50) + 1;

let score = 999;
let highscore = 0;

const losingMessage = `You lose, loser. The number was ${target}!`;

// document.querySelector(`.number`).textContent = target;
document.querySelector(`.score`).textContent = score;

document.querySelector(`.check`).addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = 'No Number!';
  } else if (guess === target) {
    document.querySelector(`.message`).textContent = 'Correct Number!';
    document.querySelector(`body`).style.backgroundColor = '#60b347';
    document.querySelector(`.number`).style.width = '30rem';
    document.querySelector(`.number`).textContent = target;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== target) {
    if (score > 49) {
      document.querySelector(`.message`).textContent =
        guess > target ? 'Too high!' : 'Too low!';
      score = score - 50;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `${losingMessage}`;
      document.querySelector(`.number`).textContent = target;
      document.querySelector(`.score`).textContent = 0;
    }
    //     else if (guess < target) {
    //     if (score > 49) {
    //       document.querySelector(`.message`).textContent = 'Too low!';
    //       score = score - 50;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector(`.message`).textContent = `${losingMessage}`;
    //       document.querySelector(`.number`).textContent = target;
    //     }

    //     // too low
    //   } else if (guess > target) {
    //     if (score > 49) {
    //       document.querySelector(`.message`).textContent = 'Too high!';
    //       score = score - 50;
    //       document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector(`.message`).textContent = `${losingMessage}`;
    //     document.querySelector(`.number`).textContent = target;
    //     }
    //   }
  }

  // challenge

  document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 999;
    target = Math.trunc(Math.random() * 50) + 1;

    document.querySelector(`.message`).textContent = 'Start guessing!';
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = '?';
    document.querySelector(`body`).style.background = '#315266';
    document.querySelector(`.number`).style.width = '15rem';
    document.querySelector(`.guess`).value = '';
  });
});
