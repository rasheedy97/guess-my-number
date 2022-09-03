"use strict";
let randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
document.querySelector(".number").value = randomNum;
let score = 20;
let highscore = 0;

console.log(randomNum);

document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  if (!guess || guess > 20 || guess < 1) {
    document.querySelector(".message").textContent =
      "NO NUMBER OR OUT OF RANGE!";
  } else {
    if (
      document.querySelector(".number").value ==
      document.querySelector(".guess").value
    ) {
      
      document.querySelector(".message").textContent = "Correct!!!";
      document.querySelector(".number").textContent = guess;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".score").textContent = score;
      if (score >highscore){
      highscore =score;
              document.querySelector(".highscore").textContent=highscore;
      }
    } else {
      document.querySelector(".message").textContent = "Wrong guess";
      score--;
      document.querySelector(".score").textContent = score;
      
      if (score == 0)
        document.querySelector(".message").textContent =
          "You have lost the game!!!";
    }
  }
});

 document.querySelector(".again").addEventListener("click", function () {
 score =20;
  randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
   document.querySelector(".number").value = randomNum;
 console.log(randomNum);
  document.querySelector(".message").textContent = "Start Guessing";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
 document.querySelector(".guess").value = "";
 document.querySelector(".score").textContent=score;
 

  
 });
