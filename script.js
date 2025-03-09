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
    if ((human == "rock" && computerChoice == "scissors")
    ||  (human == "scissors" && computerChoice == "paper")
    ||  (human == "paper" && computerChoice == "rock"))
    {
        humanScore++;
        console.log(`Human wins! ${human} beats ${computerChoice}`);
    } else if (human == computerChoice) {
        console.log(`It's a tie! ${human} vs ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${human}`);
    } 
}

function playGame() {
    for (let i = 0; i <= 5; i++) {
        let humanSelection = getHumanChoice();   
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    if (humanScore > computerScore) console.log("Human wins!");
    else if (humanScore == computerScore) console.log("It's a tie!");
    else console.log("Computer wins!");

    humanScore = 0; computerScore = 0;
}

playGame();