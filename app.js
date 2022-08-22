const startGameBtn = document.getElementById("start-game-btn");
let GameisRunning = false;
const ROCK = "PIERRE";
const PAPER = "FEUILLE";
const SCISSOR = "CISEAU";
const RESULT_DRAW = "Egaliter";
const RESULT_PL_WIN = "Vous avez gagner";
const RESULT_CP_WIN = "Vous avez perdu";

const getPlayerChoise = function () {
  let selection = prompt("Pierre, Feuille, Ciseau", "").toUpperCase();
  if (
    selection !== "PIERRE" &&
    selection !== "FEUILLE" &&
    selection !== "CISEAU"
  ) {
    alert("le choix est invalide, On choisit Pierre pour vous");
    return ROCK;
  }
  return selection;
};
// fonction flechée (on enleve le mot cle function et on remplace par => )
const computerChoise = () => {
  let randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.64) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};
// c est une fonction de flechée et elle remplace le fonction juste en bas (commenté)
const getWinner = (CChoise, PChoise) =>
  // c est une expression ternaire qui remplace les if else
  PChoise === CChoise
    ? RESULT_DRAW
    : (PChoise === ROCK && CChoise === SCISSOR) ||
      (PChoise === SCISSOR && CChoise === PAPER) ||
      (PChoise === PAPER && CChoise === ROCK)
    ? RESULT_PL_WIN
    : RESULT_CP_WIN;

// const getWinner = function (PChoise, CChoise) {
//   if (PChoise === CChoise) {
//     return RESULT_DRAW;
//   } else if (
//     (PChoise === ROCK && CChoise === SCISSOR) ||
//     (PChoise === SCISSOR && CChoise === PAPER) ||
//     (PChoise === PAPER && CChoise === ROCK)
//   ) {
//     return RESULT_PL_WIN;
//   } else {
//     return RESULT_CP_WIN;
//   }
// };

startGameBtn.addEventListener("click", function () {
  if (GameisRunning) {
    return; //si le jeu est en cours donc on quitte
  }
  GameisRunning = true;
  console.log("Game is starting...");
  const PlayerSelection = getPlayerChoise();
  console.log("vous : ", PlayerSelection);
  const ComputerSelection = computerChoise();
  console.log("ordi : ", ComputerSelection);
  const reslt = getWinner(ComputerSelection, PlayerSelection);
  let message;
  if (reslt === RESULT_DRAW) {
    message = `vous avez choisi ${PlayerSelection}, et l'IA a choisi ${ComputerSelection}, donc c'est un match nul `;
  } else if (message === RESULT_PL_WIN) {
    message = `vous avez choisi ${PlayerSelection}, et l'IA a choisi ${ComputerSelection}, donc c'est un match nul `;
  } else {
    message = `vous avez choisi ${PlayerSelection}, et l'IA a choisi ${ComputerSelection}, donc c'est un match nul `;
  }
  alert(message);
  GameisRunning = false;
});
