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
  let games = 0;
  let fairWins = 0;
  let wins = 0;
  let rounds;
  let fairResults = [];
  let results = [];

  // The whole game
  while (start !== "n") {
    games++;
    rounds = 0;
    humanScore = 0;
    computerScore = 0;

    // One game
    while(cont === "y") {
      if (rounds === 5) {
        console.log("This game is supposed to be five-round. This is the fifth round, supposedly the last. But if you want to play extra rounds, just continue answering yes to the question at the end of rounds.");
      }
      rounds++;
      playRound(getHumanChoice(), getComputerChoice());

      if (rounds === 5) {
        fairResults.push([humanScore, computerScore]);
      }
    }
    results.push([humanScore, computerScore]); 

    // One game results
    if (rounds < 5) {
      console.log("You lose the game because you quit.");
      fairResults.push([humanScore, computerScore]);
      start = prompt("Do you want to play one more game?");
    } else {
      // if humanScore was greater than computerScore by the fifth round
      if (fairResults[games - 1][0] > fairResults[games - 1][1]) { 
        fairWins++;
        wins++;
        console.log(`You win game ${games} fairly. Congratulations!`);

      // if computerScore was greater than humanScore by the fifth round but humanScore is greater than computerScore now
      } else if (fairResults[games - 1][1] > fairResults[games - 1][0] && humanScore > computerScore) {
        console.log(`You lose game ${games} fairly, but you win if you count the extra rounds.`);
        wins++;

      // if computerScore was and is greater in both cases
      } else if (fairResults[games - 1][1] > fairResults[games - 1][0] && humanScore < computerScore) {
        console.log(`You lose game ${games}.`);
      
      // if the scores were and are equal
      } else if (fairResults[games - 1][0] === fairResults[games - 1][1] && humanScore === computerScore) {
        console.log(`Game ${games} is a draw.`);

      // if the scores were equal but aren't now
      } else if (fairResults[games - 1][0] === fairResults[games - 1][1] && humanScore !== computerScore) {
        if (humanScore > computerScore) {
          console.log(`Fairly, game ${games} is a draw. But if you count the extra rounds, you win.`);
          wins++;
        } else if (computerScore) {
          console.log(`Fairly, game ${games} is a draw. But if you count the extra rounds, you lose.`);
        }
      }

      start = prompt("Do you want to play one more game?");
    }
  }

  console.log("You finished your game. The results:");
  console.log(`Fair wins: ${fairWins}\n Wins: ${wins}`);
  for(let i = 0; i < games; i++) {
    console.log(`Game ${i + 1}: ${fairResults[i][0]}-${fairResults[i][1]} fairly, ${results[i][0]}-${results[i][1]} counting extra rounds`);
  }
} else {
  console.log("You declined the offer to play the game.");
}