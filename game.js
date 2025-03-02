// Global score values, starts at 0
var humanScore = 0;
var computerScore = 0;

// Greetings at the start of the game
console.log("A game of rock-paper-scissors shall be played! Five rounds! May the odds ever be in your favor!")

function playGame() {
    function playRound(humanChoice, computerChoice) {
        // Player's choice: prompt
        function getHumanChoice() {
            return humanChoice = prompt("Please choose: Rock, Paper or Scissors").toLowerCase();
        }

        // Computer's choice: randomizer for the computer to play the game against us
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

        // Round announcement, tells what each player chose
        console.log("Player chose " + humanChoice + "!");
        console.log("Computer chose " + computerChoice + "!");

        // Game logic, rock > scissors, scissors > paper, paper > rock
        if (humanChoice === computerChoice) {
            return "Draw!";
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return "1 point for human! Rock beats scissors!";
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            return "1 point for computer! Paper beats rock!";
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return "1 point for human! Paper beats rock!";
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            return "1 point for computer! Scissors beats paper!";
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return "1 point for human! Scissors beats paper!";
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            return "1 point for computer! Rock beats scissors!";
        } else {
            return "Please choose rock, paper or scissors. There are rules you know!";
        }
    }

    playRound();
}

// Game loop, play five rounds
for (let round = 0; round < 5; round++) {
    console.log("The score is: Human " + humanScore + " - " + computerScore + " Computer")
    playGame();
}

// Final score and the announcement of the winner, ends the game
console.log("The game has ended! The final tally: Human " + humanScore + " - " + computerScore + " Computer");

if (humanScore === computerScore) {
    console.log("It's a draw!");
} else if (humanScore > computerScore) {
    console.log("Human wins!");
} else {
    console.log("Computer wins!");
}