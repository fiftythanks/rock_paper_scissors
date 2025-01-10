
/* 
1. First time on the page. First dialog window. 
1.1. User inputs their name.
1.2. User presses Enter.
If name isn't an empty string, assign the username to a variable and move to the next dialog window.
Else ask User to input their name.
*/
const dialogWindow = document.querySelector("#dialog-window")
const content = document.querySelector("#content");
const footer = document.querySelector("footer");
const textInput = document.querySelector("input");
let userName;
const numberInput = textInput;
let rounds;
let games;

function moveToSecond(e) {

  if (e.key === "Enter") {
    if (textInput.value !== "") {
      Array.from(content.querySelectorAll("p")).forEach((para) => {
        para.remove();
      });
      document.querySelector(".label").remove();
      
      const para1 = document.createElement("p");
      const para2 = document.createElement("p");
      para1.textContent = `Nice to meet you, ${textInput.value}! Now, one more question. How many rounds do you want to play each game? You will be able to play as many rounds as you wish, but it will be somewhat unfair to the other player, therefore you must decide beforehand what amount of rounds will be considered fair.`
      para2.textContent = `As before, type the desired amount in the section below. The input has to be integers only.`;

      content.appendChild(para1);
      content.appendChild(para2);

      userName = textInput.value;
      numberInput.setAttribute("type", "number");
      numberInput.setAttribute("id", "rounds");
      numberInput.setAttribute("name", "rounds");
      numberInput.setAttribute("placeholder", "Number");
      numberInput.value = ""; 

      document.removeEventListener("keypress", moveToSecond);
      document.addEventListener("keypress", moveToIntroduction);

    } else {
      textInput.classList.add("shake-lr");
      document.addEventListener("animationend", () => {
        textInput.classList.remove("shake-lr");
      });
      if (e.target !== textInput) textInput.focus();
    } 
  } else {
    if (e.target !== textInput) {
      textInput.focus();
      textInput.value += `${e.key}`;
    }
  }
}

function moveToIntroduction(e) {
  if (parseInt(e.key)) {
    if (e.target !== numberInput) {
      numberInput.value += `${e.key}`;
      numberInput.focus();
    }
  } else if (e.key === "Enter") {
    if (numberInput.value !== "") {
      rounds = parseInt(numberInput.value);
      numberInput.remove();
      Array.from(content.querySelectorAll("p")).forEach((para) => {
        para.remove();
      });
      for(let i = 1; i <= 5; i++) {
        const para = document.createElement("p");
        switch (i) {
          case 1:
            para.textContent = `${rounds} rounds. Got it!`;
            break;
          case 2:
            para.textContent = "Just a brief intro. Every round, you’ll have to choose your weapon. To do this, click on the button that displays the corresponding weapon.";
            break;
          case 3:
            para.textContent = "You have a few seconds to choose. If you don’t choose before the time is up, your weapon will be rock.";
            break;
          case 4:
            para.textContent = "This is done to make the game a little more realistic. (I don’t know about you, but it has happened to me many times when I lagged and didn’t form a weapon with my hand in time and had to pretend I’d chosen the rock.)";
            break;
          case 5:
            para.textContent = "You can change your weapon before the time is over.";
            break;
        }
        content.appendChild(para);
      }
      content.style.overflow = "scroll";
      footer.querySelector("kbd").replaceWith("any key");
      document.removeEventListener("animationend", () => {
        textInput.classList.remove("shake-lr");
      });
      document.removeEventListener("keypress", moveToIntroduction); 
      document.addEventListener("keypress", startGame);
    } else {
      numberInput.classList.add("shake-lr");
      if (e.target !== numberInput) textInput.focus();
    }
  } else if (e.key !== "Enter") {
    e.preventDefault(); // why?
  }
}

function startGame(e) {
  // First game logic start
  Array.from(content.querySelectorAll("p")).forEach((para) => {
    para.remove();
  });

  // centralize content elements
  content.classList.toggle("flex-centralize");

  ready = document.querySelector("#tip");
  ready.innerHTML = `Press <kbd>Enter</kbd> to start`;
  content.appendChild(tip);

  games = 1;
  const game = document.createElement("h1");
  game.textContent = `Game ${games}`;
  dialogWindow.insertBefore(game, content);
  
  let round = 1;
  const roundTitle = document.createElement("h2");
  roundTitle.textContent = `Round ${round}`;
  dialogWindow.insertBefore(roundTitle, content);

  var footerToggle = 1;
  function toggleFooter() {
    if (footerToggle === 1) {
      footer.style.display = "none";
      content.style.height = "100%";
      footerToggle = 0;
    } else if (footerToggle === 0) {
      footer.style.cssText = "";
      content.style.height = "";
      footerToggle = 1;
    }
  }

  toggleFooter();
  // first game logic end

  removeEventListener("keypress", startGame);
  addEventListener("keypress", startRound);

  function startRound(e) {
    Array.from(content.children).forEach((child) => {
      if (child === ready) {
        child.style.display = "none";
      } else {
        child.remove();
      }
    });
    content.classList.toggle("flex-centralize");
    content.classList.toggle("flex-vertical");

    const choose = document.createElement("p");
    choose.textContent = "Choose your weapon:";
    choose.style.alignSelf = "start";
    choose.style.marginTop = "0";
    content.appendChild(choose);
  
    const weapons = document.createElement("div");
    weapons.classList.add("weapons");
    content.appendChild(weapons);
  
    const rock = document.createElement("img");
    rock.classList.add("weapon");
    rock.setAttribute("src", "img/rock.svg");
    rock.style.width = "87px";
    rock.style.height = "98px";
    rock.style.transform = "rotate(90deg)";
    weapons.appendChild(rock);
  
    const paper = document.createElement("img");
    paper.classList.add("weapon");
    paper.setAttribute("src", "img/paper.svg");
    paper.style.width = "87px";
    paper.style.height = "87px";
    paper.style.transform = "rotate(90deg)"
    weapons.appendChild(paper);
  
    const scissors = document.createElement("img");
    scissors.classList.add("weapon");
    scissors.setAttribute("src", "img/scissors.svg");
    scissors.style.width = "90px";
    scissors.style.height = "87px";
    scissors.style.transform = "scaleX(-1)"
    weapons.appendChild(scissors);

    toggleFooter();
    const rockCount = document.createElement("img");
    rockCount.classList.add("rock-count");
    rockCount.setAttribute("src", "img/rock.svg");
    rockCount.style.width = "87px";
    rockCount.style.height = "98px";
    footer.appendChild(rockCount);
  }
}

document.addEventListener("keypress", moveToSecond);


/*
2. Second dialog window.
*/



// --- Game logic ---

// let pick = ["rock", "paper", "scissors"];

// // The computer gives a random choice between rock, paper and scissors
// function getComputerChoice() {
//   return pick[Math.floor(Math.random() * 3)];
// }

// // The player picks rock, paper or scissors 
// function getHumanChoice() {
//   return prompt("Rock, paper, scissors?").toLowerCase();
// } 

// // Declare the players score variables
// let humanScore;
// let computerScore;

// // Declare the desire to do another round variable
// let cont;

// // Single round logic
// // Rock beats scissors, paper beats rock, scissors beat paper
// function playRound(humanChoice, computerChoice) {

//   // User picks something different from what the computer picks
//   if (computerChoice !== humanChoice && (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {

//     // User picks rock
//     if (humanChoice === "rock") {
//       if (computerChoice === "scissors") {
//         console.log(`You win! The other player chose scissors. Rock beats scissors. \nUser: ${++humanScore}, computer: ${computerScore}`);
//       } else if (computerChoice === "paper") { 
//         console.log(`You lose! The other player chose paper. Paper beats rock. \nUser: ${humanScore}, computer: ${++computerScore}`);
//       }
    
//     // User picks paper
//     } else if (humanChoice === "paper") {
//       if (computerChoice === "rock") {
//         console.log(`You win! The other player chose rock. Paper beats rock. \nUser: ${++humanScore}, computer: ${computerScore}`)
//       } else if (computerChoice === "scissors") {
//         console.log(`You lose! The other player chose scissors. Scissors beat paper. \nUser: ${humanScore}, computer: ${++computerScore}`);
//       }

//     // User picks scissors
//     } else if (humanChoice === "scissors") {
//       if (computerChoice === "paper") {
//         console.log(`You win! The other player chose paper. Scissors beat paper. \nUser: ${++humanScore}, computer: ${computerScore}`)
//       } else if (computerChoice === "rock") {
//         console.log(`You lose! The other player chose rock. Rock beats scissors. \nUser: ${humanScore}, computer: ${++computerScore}`);
//       }
//     }

//   // User picks the same thing the computer picked
//   } else if (humanChoice === computerChoice) {
//     console.log(`It's a draw! The other player chose ${computerChoice} as well.`);
//   } else {
//     console.error("Try again.");
//     return cont = "again";
//   }

//   // Let user decide if he/she wants to play another round
//   return cont = prompt("Do you want to play another round? Type n or no for no or anything else for yes.").toLowerCase();
// }

// // The whole game logic
// console.log("This is a simple Rock Paper Scissors game. You will play against your computer. Each round, you'll have to choose rock, paper or scissors. The computer will choose something too. If you win, you get one point. If the computer wins, the computer gets the point. There supposed to be five rounds and if you decide to stop playing before the fifth round, you'll lose.");

// let start = prompt("Type n to not play the game. Type anything else to start the game.");

// if (start !== "n") {
//   let games = 0;
//   let fairWins = 0;
//   let wins = 0;
//   let rounds;
//   let fairResults = [];
//   let results = [];

//   // The whole game
//   while (start !== "n") {
//     games++;
//     rounds = 0;
//     humanScore = 0;
//     computerScore = 0;
//     cont = "y";

//     // One game
//     while(cont !== "n" && cont !== "no") {
//       rounds++;
//       if (rounds === 5 && cont !== "again") {
//         console.log("This game is supposed to be five-round. This is the fifth round, supposedly the last. But if you want to play extra rounds, just continue answering yes to the question at the end of rounds.");
//       }
//       playRound(getHumanChoice(), getComputerChoice());
//       if (cont === "again") { 
//         rounds--;
//         continue; 
//       } 

//       if (rounds === 5) {
//         fairResults.push([humanScore, computerScore]);
//       }
//     }
//     results.push([humanScore, computerScore]); 

//     // One game results
//     if (rounds < 5) {
//       console.log("You lose the game because you quit.");
//       fairResults.push([humanScore, computerScore]);
//       start = prompt("Do you want to play one more game?");
//     } else {
//       // if humanScore was greater than computerScore by the fifth round
//       if (fairResults[games - 1][0] > fairResults[games - 1][1]) { 
//         fairWins++;
//         wins++;
//         console.log(`You win game ${games} fairly. Congratulations!`);

//       // if computerScore was greater than humanScore by the fifth round but humanScore is greater than computerScore now
//       } else if (fairResults[games - 1][1] > fairResults[games - 1][0] && humanScore > computerScore) {
//         console.log(`You lose game ${games} fairly, but you win if you count the extra rounds.`);
//         wins++;

//       // if computerScore was and is greater in both cases
//       } else if (fairResults[games - 1][1] > fairResults[games - 1][0] && humanScore < computerScore) {
//         console.log(`You lose game ${games}.`);

//       // if the scores were and are equal
//       } else if (fairResults[games - 1][0] === fairResults[games - 1][1] && humanScore === computerScore) {
//         console.log(`Game ${games} is a draw.`);

//       // if the scores were equal but aren't now
//       } else if (fairResults[games - 1][0] === fairResults[games - 1][1] && humanScore !== computerScore) {
//         if (humanScore > computerScore) {
//           console.log(`Fairly, game ${games} is a draw. But if you count the extra rounds, you win.`);
//           wins++;
//         } else if (computerScore) {
//           console.log(`Fairly, game ${games} is a draw. But if you count the extra rounds, you lose.`);
//         }
//       }

//       start = prompt("Do you want to play one more game?");
//     }
//   }

//   console.log("You finished your game. The results:");
//   console.log(`Fair wins: ${fairWins}\nWins: ${wins}`);
//   for(let i = 0; i < games; i++) {
//     console.log(`Game ${i + 1}: ${fairResults[i][0]}-${fairResults[i][1]} fairly, ${results[i][0]}-${results[i][1]} counting extra rounds`);
//   }
// } else {
//   console.log("You declined the offer to play the game.");
// }