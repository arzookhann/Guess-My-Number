'use strict';

let guessedCorrect = false;
let highscore = 0; // state variable
let score = 5; // state variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const display = function (attribute, textContent)
{
  document.querySelector(attribute).textContent = textContent;
}

display(".score", score);
display(".highscore", highscore);

// When player clicks on Check! button
document.querySelector(".check").addEventListener("click", function() 
{
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) 
  {
    display(".message", "❌ No Number");
  }

  // When player wins
  else if (guess === secretNumber && score > 0 && !guessedCorrect) 
  {
    guessedCorrect = true;

    display(".number", secretNumber);
    display(".message","✔ Correct Number");
    score++;

    // Changing background color
    document.querySelector("body").style.backgroundColor = "#60b347";

    // Changing width of secretNumber box
    document.querySelector(".number").style.width = "20rem";

    if (score > highscore) 
    {
      highscore = score;
      display(".highscore", highscore);
    }
  }

  // When player guesses wrong number
  else if (guess !== secretNumber && score > 0) 
  {
    if (score > 0) 
    {
      display(".message", guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
    }
    // If score is 0, game will be over
    else 
    {
      display(".message", "Game Over!!");
      display(".number", secretNumber);
    }
  }

  display(".score", score);
});

// When player clicks on Again! button
document.querySelector(".again").addEventListener("click", function () 
{
  guessedCorrect = false;

  display(".number", "?");

  display(".message", "Start Guessing ...");

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";

  score = 5;
  display(".score", score);

  document.querySelector("input").value = "";

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});