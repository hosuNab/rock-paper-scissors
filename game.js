// randomizer for the computer to play the game against us
function getComputerChoice() {
    cpu = Math.floor(Math.random() * 3);
    if (cpu === 1) {
        return "rock";
    } else if (cpu === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// player's choice
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?");
    return humanChoice;
}
console.log(getComputerChoice())
console.log(getHumanChoice())