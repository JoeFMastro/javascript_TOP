const btnR = document.querySelector("#btnR");
const btnP = document.querySelector("#btnP");
const btnS = document.querySelector("#btnS");

const res = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");


let humanScore = 0;
let computerScore = 0;

scoreDiv.textContent = `Score -> Human: ${humanScore}, Computer: ${computerScore}`;

btnR.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

btnP.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

btnS.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});



function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  if (number == 0) {
    return "rock";
  }
  else if (number == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function updateScore() {
  scoreDiv.textContent = `Score -> Human: ${humanScore}, Computer: ${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == computerChoice) {
    res.textContent += "The same choice was selected, so it's a tie!\n";
  }
  else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    res.textContent += "You win!!, rock beats scissors\n";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    res.textContent += "You win!!, paper beats rock\n";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    res.textContent += "You win!!, scissors beats paper\n";
  } else {
    computerScore++;
    res.textContent += `You lose! ${computerChoice} beats ${humanChoice} \n`;
  }
  updateScore();

  if (humanScore == 5 || computerScore == 5) {
    endGame();
  }
}

function endGame() {
  if (humanScore == 5) {
    res.textContent += "YOU WIN THE GAME!!!\n";
  } else if (computerScore == 5) {
    res.textContent += "YOU LOSE THE GAME :(\n";
  }
  btnR.disabled = true;
  btnP.disabled = true;
  btnS.disabled = true;
}




//function playGame() {
//  if (humanScore > computerScore) {
//    console.log("You win the Game!!");
//  } else if (computerScore > humanScore) {
//    console.log("You lose the Game");
//  } else {
//    console.log("The game is a tie!");
//  }
//
//}
//
//playGame();