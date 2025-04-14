let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() *3) + 1;
    if (random == 1) return "rock";
    else if (random == 2) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let choice = prompt(`What do you choose? Rock, paper, or scissors?`);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    const div = document.getElementById("#result");

    if ((human == "rock" && computerChoice == "scissors")
    ||  (human == "scissors" && computerChoice == "paper")
    ||  (human == "paper" && computerChoice == "rock"))
    {
        humanScore++;
        div.textContent = `Human wins! ${human} beats ${computerChoice}`;
    } else if (human == computerChoice) {
        div.textContent = `It's a tie! ${human} vs ${computerChoice}`;
    } else {
        computerScore++;
        div.textContent = `Computer wins! ${computerChoice} beats ${human}`;
    } 
}

function playGame() {
    const buttons = document.getElementById("#options");

    buttons.addEventListener("click", (e) => {
        let target = e.target;

        switch (target.id) {
            case "rock":
                playRound("rock", getComputerChoice());
            case "paper":
                playRound("paper", getComputerChoice());
            case "scissors":
                playRound("scissors", getComputerChoice());
        }   
    });
}

playGame();

