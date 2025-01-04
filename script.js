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
let humanScore;
let computerScore;

// Declare the desire to do another round variable
let cont = "y";

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

// The whole game logic
console.log("This is a simple Rock Paper Scissors game. You will play against your computer. Each round, you'll have to choose rock, paper or scissors. The computer will choose something too. If you win, you get one point. If the computer wins, the computer gets the point. There supposed to be five rounds and if you decide to stop playing before the fifth round, you'll lose.")


let start = prompt("Type n to not play the game. Type anything else to start the game.");

if (start !== "n") {
  let games = 1;
  let rounds;
  humanScore = 0;
  computerScore = 0;
  let fair_results = [];
  let results = [];

  while (start !== "n") {
    rounds = 0;

    while(cont === "y" && rounds <= 5) {
      if (rounds === 5) {
        console.log("This game is supposed to be five-round. This is the fifth round, supposedly the last. But if you want to play extra rounds, just continue answering yes to the question at the end of rounds.");
      }
      rounds++;
      playRound(getHumanChoice(), getComputerChoice());

      if (rounds === 5) {
        fair_results.push([humanScore, computerScore])
      }
    }

    // Results
    if (rounds < 5) {
      console.log("You lose the game because you quit.")
    }
  }
}