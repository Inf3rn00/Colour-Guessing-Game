let resetGame = document.getElementById("reset-game");
let gameStatus = document.getElementById("game-status");
let gameScore = document.getElementById("game-score");
let targetColourBox = document.querySelector(".target-colour-box");
let btns = document.querySelectorAll(".btn");
let score = 0;

const coloursArray = [
  "#FF6733",
  "#33FF57",
  "#3357FF",
  "#F1C40F",
  "#9B59B6",
  "#E74C3C",
];

gameStatus.innerHTML = "";

  let target = coloursArray[Math.floor(Math.random() * 6)];

  targetColourBox.style.background = target;


//function for shuffling the colours array so the button colours don't repeat
function shuffleArray(array) {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

let result = shuffleArray(coloursArray);

btns.forEach((btn, index, btnColour) => {
  btnColour = btn.style.background = result[index];
  btn.addEventListener("click", () => {
    if (btnColour == target) {
      score = score + 1;
      gameScore.innerText = `Score: ${score}`;
      gameStatus.innerText = `Correct!`;
      target = coloursArray[Math.floor(Math.random() * 6)];
      targetColourBox.style.background = target;
    } else {
      gameStatus.innerText = "Wrong!";
      target = coloursArray[Math.floor(Math.random() * 6)];
      targetColourBox.style.background = target;
    }
  });
});

//game reset function
function gameReset() {
  resetGame.addEventListener("click", () => {
    score = 0;
    gameScore.innerText = `Score: ${score}`;
    gameStatus.innerText = "";
  });
}
gameReset();
