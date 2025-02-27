var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // player's choice
    function getHumanChoice() {
        return humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    }

    // randomizer for the computer to play the game against us
    function getComputerChoice() {
        cpu = Math.floor(Math.random() * 3);
        if (cpu === 0) {
            return computerChoice = "rock";
        } else if (cpu === 1) {
            return computerChoice = "paper";
        } else {
            return computerChoice = "scissors";
        }
    }

    getHumanChoice();
    getComputerChoice();
    console.log("Player chose " + humanChoice);
    console.log("Computer chose " + computerChoice);

    if (humanChoice === computerChoice) {
        return "Draw!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "1 point for human! Rock beats scissors!";
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        return "1 point for computer! Paper beats rock!";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "1 point for human! Paper beats rock!";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "1 point for computer! Scissors beats paper!";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "1 point for human! Scissors beats paper!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "1 point for computer! Rock beats scissors!";
        computerScore++;
    } else {
        return "Error, I don't know how this happened!"
    }

}

console.log(playRound())
console.log(humanScore)
console.log(computerScore)

