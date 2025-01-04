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
let cont;

// Single round logic
// Rock beats scissors, paper beats rock, scissors beat paper
function playRound(humanChoice, computerChoice) {

  // User picks something different from what the computer picks
  if (computerChoice !== humanChoice) {

    // User picks rock
    if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        console.log(`You win! The other player chose scissors. Rock beats scissors. \nUser: ${++humanScore}, computer: ${computerScore}`);
      } else if (computerChoice === "paper") { 
        console.log(`You lose! The other player chose paper. Paper beats rock. \nUser: ${humanScore}, computer: ${++computerScore}`);
      }
    
    // User picks paper
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log(`You win! The other player chose rock. Paper beats rock. \nUser: ${++humanScore}, computer: ${computerScore}`)
      } else if (computerChoice === "scissors") {
        console.log(`You lose! The other player chose scissors. Scissors beat paper. \nUser: ${humanScore}, computer: ${++computerScore}`);
      }

    // User picks scissors
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        console.log(`You win! The other player chose paper. Scissors beat paper. \nUser: ${++humanScore}, computer: ${computerScore}`)
      } else if (computerChoice === "rock") {
        console.log(`You lose! The other player chose rock. Rock beats scissors. \nUser: ${humanScore}, computer: ${++computerScore}`);
      }
    }

  // User picks the same thing the computer picked
  } else {
    console.log(`It's a draw! The other player chose ${computerChoice} as well.`);
  }

  // Let user decide if he/she wants to play another round
  return cont = prompt("Do you want to play another round? Type y or yes for yes and anything else for no.").toLowerCase();
}