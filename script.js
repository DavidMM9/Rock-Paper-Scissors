let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randElement = choices[Math.floor(Math.random() * choices.length)];
    console.log(randElement)
}
