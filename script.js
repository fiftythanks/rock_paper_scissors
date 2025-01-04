let pick = ["rock", "paper", "scissors"];

// The computer gives a random choice between rock, paper and scissors
function getComputerChoice() {
  return pick[Math.floor(Math.random() * 3)];
}

// The player picks rock, paper or scissors 
function getHumanChoice() {
  return prompt("Rock, paper, scissors?").toLowerCase();
} 
