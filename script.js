function getComputerChoice() {
    let n = Math.round(Math.random() * 2);
    if(n === 0) {
        return  "rock"
    } else if (n === 1) {
        return "paper"
    } else if (n === 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanInput = prompt("What's your choice?");
    return humanInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function resultMessage(message) {
    const resultElement = document.querySelector(".result");
    resultElement.textContent = message;
}

function scoreMessage() {
    const scoreElement = document.querySelector(".score");
    scoreElement.textContent = `Your score is ${humanScore} and computer score is ${computerScore}.`
}

function winnerMessage() {
    const winnerElement = document.querySelector(".winner");
    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        winnerElement.textContent = "You won the game."
        winnerDisplayed = true;
    } else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        winnerElement.textContent = "Computer won the game."
        winnerDisplayed = true;
    } else {
        if (!winnerDisplayed) {
            winnerElement.textContent = "";
        }
    }
    winnerDisplayed = false;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        resultMessage("You Lose! Paper beats Rock.")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        resultMessage("You Win! Rock beats Scissors.")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        resultMessage("You Win! Paper beats Rock.")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        resultMessage("You Lose! Scissors beats Paper.")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        resultMessage("You Lose! Rock beats scissors.")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        resultMessage("You Win! Scissors beats Paper.")
        scoreMessage();
    } else if (humanChoice === computerChoice) {
        resultMessage("It's a tie!")
    } else {
        resultMessage("Invalid input!")
    }
    scoreMessage();
    winnerMessage();
}

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper",getComputerChoice());
})

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})

