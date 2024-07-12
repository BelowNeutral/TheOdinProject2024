// Declaring choices using number values
const rock = 1;
const paper = 2;
const scissors = 3;

// Computer generates a random number from 1-3
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

// console.log(getComputerChoice());

function getHumanChoice() {
    // Prompts user for input
    let userInput = prompt("Rock, Paper, or Scissors?");
    userInput = userInput.toLowerCase();

    // Converts the user input from string to corresponding number values
    switch (userInput) {
        case "rock":
            return rock;
        case "paper":
            return paper;
        case "scissors":
            return scissors;
        default:
            return null;
    }
}

// console.log(getHumanChoice());

// Initializing scores for human player and computer
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    if (humanChoice == rock && computerChoice == scissors) {
        console.log("The player wins with rock!");
        humanScore++;
    }
    console.log(humanScore);
}

console.log(playRound());
// playRound(humanSelection, computerSelection);