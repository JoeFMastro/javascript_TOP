//console.log("Hello World");



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
//console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("Elige: rock, paper o scissors");
  return choice.toLowerCase();
}
//console.log(getHumanChoice());


//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();
//
//playRound(humanSelection, computerSelection);
//console.log("Human:", humanScore);
//console.log("Computer:", computerScore);
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
      console.log("The same choice was selected, so it's a tie!");
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;
      console.log("You win!!, rock beats scissors");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;
      console.log("You win!!, paper beats rock");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;
      console.log("You win!!, scissors beats paper");
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}`);
  }
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log("You win the Game!!");
  } else if (computerScore > humanScore) {
    console.log("You lose the Game");
  } else {
    console.log("The game is a tie!");
  }

}

playGame();