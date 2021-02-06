"use strict";
let maxNumber = 5;
let minNumber = 1;
//let myNumber = 7;
let myNumber = Math.trunc(Math.random() * maxNumber) + 1;
console.log(myNumber);
let score = maxNumber;
let highscore = 0;

// set the rules and scores
document.querySelector(
  "#rules"
).textContent = `(between ${minNumber} and ${maxNumber})`;
document.querySelector("#score").textContent = score;
document.querySelector("#highscore").textContent = highscore;

function gameOver() {
  document.querySelector("#game-title").textContent = "GAME OVER";
  document.querySelector("body").style.backgroundColor = "#DC143C";
  document.querySelector("#check-button").disabled = true;
}

// click Check button
document.querySelector("#check-button").addEventListener("click", function () {
  let guess = Number(document.querySelector("#user-guess").value);
  //if there's no value
  if (guess == null) {
    document.querySelector("#message").textContent = "No number!";
    document.querySelector("body").style.backgroundColor = "#000000";
  } else {
    if (score > 0) {
      // if the value is out of the range
      if (guess < minNumber || guess > maxNumber) {
        document.querySelector("#message").textContent = "Invalid number!";
        document.querySelector("#user-guess").value = null;
        score--;
        document.querySelector("#score").textContent = score;
        document.querySelector("body").style.backgroundColor = "#000000";
        if (score == 0) gameOver();
      } else {
        // player wins

        if (guess === myNumber) {
          document.querySelector("#message").textContent = "Correct!";
          document.querySelector("#correct-answer").textContent = guess;
          if (score > highscore) {
            highscore = score;
          }
          document.querySelector("#highscore").textContent = highscore;
          document.querySelector("body").style.backgroundColor = "#60b347";
          document.querySelector("#correct-answer").width = "30 rem";
          document.querySelector("#check-button").disabled = true;
        } else {
          if (guess > myNumber) {
            document.querySelector("#message").textContent = "Too high!";
          } else if (guess < myNumber) {
            document.querySelector("#message").textContent = "Too low!";
          }
          score--;
          document.querySelector("#score").textContent = score;
          document.querySelector("#user-guess").value = null;
          if (score == 0) gameOver();
        }
      }
      //player loses
    } else {
      gameOver();
    }
  }
});

// click Again button

document.querySelector("#replay-button").addEventListener("click", function () {
  myNumber = Math.trunc(Math.random() * maxNumber) + 1;
  console.log(myNumber);
  score = maxNumber;
  document.querySelector("#check-button").disabled = false;
  document.querySelector("#message").textContent = "Start guessing...";
  document.querySelector("#correct-answer").textContent = "?";
  document.querySelector("#game-title").textContent = "Guess my number!";
  document.querySelector("#score").textContent = score;
  document.querySelector("#user-guess").value = null;
  document.querySelector("body").style.backgroundColor = "#00CED1";
});
