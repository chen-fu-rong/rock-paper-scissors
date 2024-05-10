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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        console.log("You Lose! Paper beats Rock.")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        console.log("You Win! Rock beats Scissors.")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        console.log("You Win! Paper beats Rock.")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        console.log("You Lose! Scissors beats Paper.")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        console.log("You Lose! Rock beats scissors.")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        console.log("You Win! Scissors beats Paper.")
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else {
        console.log("Invalid input!")
    }

    
}


function playGame(times) {
    for (let i=0; i < times; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Your score is ${humanScore} and Computer score is ${computerScore}.`)
        
    }
    winner();
}

function winner() {
    if(humanScore > computerScore) {
        console.log("You Win!");
    } else if (computerScore > humanScore) {
        console.log("Computer Wins!")
    } else if (humanScore === computerScore) {
        console.log("It's a tie! Play more!")
    }
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

