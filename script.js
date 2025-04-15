let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");
const humanScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const buttons = document.querySelectorAll("button");
const winnerDisplay = document.querySelector("#winner");

function getComputerChoice() {
    let random = Math.floor(Math.random() *3) + 1;
    if (random == 1) return "Rock";
    else if (random == 2) return "Paper";
    else return "Scissors";
}

// function getHumanChoice() {
//     let choice = prompt(`What do you choose? Rock, paper, or scissors?`);
//     return choice;
// }

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "Rock" && computerChoice == "Scissors")
    ||  (humanChoice == "Scissors" && computerChoice == "Paper")
    ||  (humanChoice == "Paper" && computerChoice == "Rock"))
    {
        humanScore++;
        result.textContent = `Human wins! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice == computerChoice) {
        result.textContent = `It's a tie! ${humanChoice} vs ${computerChoice}`;    
    } else {
        computerScore++;
        result.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
    } 

    humanScoreDisplay.textContent = `User Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

function playGame() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);

            if (humanScore == 5) {
                winnerDisplay.textContent = "You win the game!";
            }
            if (computerScore == 5) {
                winnerDisplay.textContent = "Computer wins the game!";
            }
        });
    });
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    winnerDisplay.textContent = "";
    humanScoreDisplay.textContent = "User Score: 0";
    computerScoreDisplay.textContent = "Computer Score: 0";
}

playGame();

