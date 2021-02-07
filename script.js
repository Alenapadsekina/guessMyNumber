"use strict";
let maxNumber = 20;
let minNumber = 1;
let myNumber = Math.trunc(Math.random() * maxNumber) + 1;
console.log(myNumber);
let score = maxNumber;
let highscore = 0;

function changeRecord(element, record) {
  document.querySelector(element).textContent = record;
}
changeRecord("#highscore", highscore);
function disableButton(button, value) {
  document.querySelector(button).disabled = value;
}
// set the rules and scores
function startGame() {
  disableButton("#check-button", false);
  changeRecord("#message", "⌛ Start guessing...");
  changeRecord("#correct-answer", "?");
  changeRecord("#game-title", "Guess my number!");
  score = maxNumber;
  changeRecord("#score", score);
  document.querySelector("#user-guess").value = null;
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(
    "#rules"
  ).textContent = `(between ${minNumber} and ${maxNumber})`;
}

startGame();

function gameOver() {
  changeRecord("#game-title", "GAME OVER");
  document.querySelector("body").style.backgroundColor = "#DC143C";
  disableButton("#check-button", true);
}

// click Check button V2
document.querySelector("#check-button").addEventListener("click", function () {
  let guess = Number(document.querySelector("#user-guess").value);
  // NO NUMBER
  if (guess == null) {
    changeRecord("#message", "No number!");
  } else {
    // CAN PLAY
    if (score > 0) {
      // INCORRECT NUMBER
      if (guess !== myNumber) {
        changeRecord(
          "#message",
          guess < minNumber || guess > maxNumber
            ? "⛔ Invalid number"
            : guess > myNumber
            ? "📈 Too high!"
            : "📉 Too low!"
        );

        document.querySelector("#user-guess").value = null;
        score--;
        changeRecord("#score", score);

        if (score == 0) gameOver();
        // CORRECT NUMBER
      } else if (guess === myNumber) {
        changeRecord("#message", "⭐ Correct!");
        changeRecord("#correct-answer", guess);
        if (score > highscore) {
          highscore = score;
        }
        changeRecord("#highscore", highscore);
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector("#correct-answer").width = "30 rem";
        disableButton("#check-button", true);
      }
      // CAN NOT PLAY
    } else {
      gameOver();
    }
  }
});

// click Again button

document.querySelector("#replay-button").addEventListener("click", function () {
  myNumber = Math.trunc(Math.random() * maxNumber) + 1;
  console.log(myNumber);
  startGame();
});
