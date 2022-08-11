const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randElement = choices[Math.floor(Math.random() * choices.length)];
    return (randElement)
}

function playRound(playerSelection, computerSelection) {
    console.log(`Computer Selection: ${computerSelection}`)
    if (playerSelection === "rock") {
        if (computerSelection === "Rock")
            return "It's a tie!";
        else if (computerSelection === "Paper")
            return "You Lose! Paper beats Rock";
        else if (computerSelection === "Scissors")
            return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "Rock")
            return "You win! Paper beats Rock";
        else if (computerSelection === "Paper")
            return "It's a tie!";
        else if (computerSelection === "Scissors")
            return "You lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "Rock")
            return "You lose! Rock beats Scissors";
        else if (computerSelection === "Paper")
            return "You win! Scissors beats Paper";
        else if (computerSelection === "Scissors")
            return "It's a tie!";
    }
}

let playerSelection = prompt("Make your choice: ");
console.log(`Player Selection: ${playerSelection}`)
playerSelection = playerSelection.toLowerCase();

console.log(playRound(playerSelection, getComputerChoice()));