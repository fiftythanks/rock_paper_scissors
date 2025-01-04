let pick = ["rock", "paper", "scissors"];

// The computer gives a random choice between rock, paper and scissors
function getComputerChoice() {
  return pick[Math.floor(Math.random() * 3)];
}

// The player picks rock, paper or scissors 
function getHumanChoice() {
  return prompt("Rock, paper, scissors?").toLowerCase();
} 

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Single round logic
// Rock beats scissors, paper beats rock, scissors beat paper
function playRound(humanChoice, computerChoice) {

  // User picks something different from what the computer picks
  if (computerChoice !== humanChoice) {

    // User picks rock
    if (humanChoice === "rock") {
      if (computerChoice === "scissors") { 
        humanScore++;
        console.log("You win! The other player chose scissors. Rock beats scissors.")
        return `User: ${humanScore}, computer: ${computerScore}`;
      } else if (computerChoice === "paper") { 
        computerScore++;
        console.log("You lose! The other player chose paper. Paper beats rock.")
        return `User: ${humanScore}, computer: ${computerScore}`;
      }
    }
    
    // User picks paper

    // User picks scissors
  }

  // User picks the same thing the computer picked
}