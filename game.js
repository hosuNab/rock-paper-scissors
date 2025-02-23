// randomizer for the computer to play the game against us
function getComputerChoice() {
    cpu = Math.floor(Math.random() * 3);
    if (cpu === 1) {
        return "The Computer has chosen: Rock!";
    } else if (cpu === 2) {
        return "The Computer has chosen: Paper!";
    } else {
        return "The Computer has chosen: Scissors!";
    }
}

console.log(getComputerChoice())