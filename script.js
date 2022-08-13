const choices = ["Rock", "Paper", "Scissors"];
let contPlayer = 0;
let contComputer = 0;

function getComputerChoice() {
    let randElement = choices[Math.floor(Math.random() * choices.length)];
    return (randElement)
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "Rock")
            tie();
        else if (computerSelection === "Paper")
            lose(playerSelection, computerSelection);
        else if (computerSelection === "Scissors")
            win(playerSelection, computerSelection);
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "Rock")
            win(playerSelection, computerSelection);
        else if (computerSelection === "Paper")
            tie();
        else if (computerSelection === "Scissors")
            lose(playerSelection, computerSelection);
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "Rock")
            lose(playerSelection, computerSelection);
        else if (computerSelection === "Paper")
            win(playerSelection, computerSelection);
        else if (computerSelection === "Scissors")
            tie();
    }
}

const div1 = document.querySelector("#div1");
const contPlayer1 = document.querySelector("#contPlayer");
const contComputer1 = document.querySelector("#contComputer");
const winner = document.querySelector("#winner");

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function () {
    winner.textContent = "";
    playRound("Rock");
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
    winner.textContent = "";
    playRound("Paper");
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {
    winner.textContent = "";
    playRound("Scissors");
});

function tie() {
    div1.textContent = "It's a tie!";
}

function win(playerSelection, computerSelection) {
    div1.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    contPlayer++;
    contPlayer1.textContent = `Player score: ${contPlayer}`;
    contComputer1.textContent = `Computer score: ${contComputer}`;
    if (contPlayer >= 5) {
        winner.textContent = "YOU WON THE GAME :)"
        contPlayer = 0;
        contComputer = 0;
    }
}

function lose(playerSelection, computerSelection) {
    div1.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    contComputer++;
    contPlayer1.textContent = `Player score: ${contPlayer}`;
    contComputer1.textContent = `Computer score: ${contComputer}`;
    if (contComputer >= 5) {
        winner.textContent = "YOU LOST THE GAME :("
        contPlayer = 0;
        contComputer = 0;
    }
}
