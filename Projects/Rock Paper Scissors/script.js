// Declaring choices using number values
const rock = 1;
const paper = 2;
const scissors = 3;

// Computer generates a random number from 1-3
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

console.log(getComputerChoice());

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
    const human = getHumanChoice(humanChoice)
    const computer = getComputerChoice(computerChoice);
    
    if (human === computer) {
        return ("tie");
    }
    else if (human === rock && computer === paper) {
        computerScore++;
        return ("computer wins (paper beats rock)");
    }
    else if (human === rock && computer === scissors) {
        humanScore++;
        return ("human wins (rock beats scissors)");
    }
    else if (human === paper && computer === rock) {
        humanScore++;
        return ("human wins (paper beats rock)");
    }
    else if (human === paper && computer === scissors) {
        computerScore++;
        return ("computer wins (scissors beat paper)");
    }
    else if (human === scissors && computer === rock) {
        computerScore++;
        return ("computer wins (rock beats scissors)");
    }
    else if (human === scissors && computer === paper) {
        humanScore++;
        return ("human wins (scissors beat paper)");
    }
    else {
        return ("ERROR 101");
    }
}

console.log(playRound());
// playRound(humanSelection, computerSelection);

