const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randElement = choices[Math.floor(Math.random() * choices.length)];
    return (randElement)
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        console.log("I'm in rock")
        if (computerSelection === "Rock")
            return "It's a tie!";
        else if (computerSelection === "Paper")
            return "You Lose! Paper beats Rock";
        else if (computerSelection === "Scissors")
            return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "paper") {
        console.log("I'm in paper")
        if (computerSelection === "Rock")
            return "You win! Paper beats Rock";
        else if (computerSelection === "Paper")
            return "It's a tie!";
        else if (computerSelection === "Scissors")
            return "You lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors") {
        console.log("I'm in scissors")
        if (computerSelection === "Rock")
            return "You lose! Rock beats Scissors";
        else if (computerSelection === "Paper")
            return "You win! Scissors beats Paper";
        else if (computerSelection === "Scissors")
            return "It's a tie!";
    }
}


/* let playerSelection = prompt("Make your choice: ");
console.log(`Player Selection: ${playerSelection}`)
console.log((playerSelection, computerSelection)); */

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function () {
    console.log(playRound("Rock"));
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
    console.log(playRound("Paper"));
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {
    console.log(playRound("Scissors"));
});