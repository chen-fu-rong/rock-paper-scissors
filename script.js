function getComputerChoice(computerChoice) {
    let n = Math.round(Math.random() * 2);
    if(n === 0) {
        return computerChoice = "rock"
    } else if (n === 1) {
        return computerChoice = "paper"
    } else if (n === 2) {
        return computerChoice = "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("What's your choice?");
    return humanChoice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        return "You Lose! Paper beats Rock."
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You Win! Rock beats Scissors."
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "You Win! Paper beats Rock."
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "You Lose! Scissors beats Paper."
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "You Lose! Rock beats scissors."
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You Win! Scissors beats Paper."
    } else if (humanChoice === computerChoice) {
        return "It's a tie!"
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);