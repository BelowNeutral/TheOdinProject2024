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
    const human = getHumanChoice(humanChoice);
    const computer = computerChoice; // Assuming computerChoice is already numeric
    
    if (human === null) {
        console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
        return;
    }

    if (human === computer) {
        console.log("It's a tie!");
    } else if (human === rock && computer === paper) {
        computerScore++;
        console.log(`Computer wins! Paper beats Rock. Current Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (human === rock && computer === scissors) {
        humanScore++;
        console.log(`You win! Rock beats Scissors. Current Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (human === paper && computer === rock) {
        humanScore++;
        console.log(`You win! Paper beats Rock. Current Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (human === paper && computer === scissors) {
        computerScore++;
        console.log(`Computer wins! Scissors beat Paper. Current Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (human === scissors && computer === rock) {
        computerScore++;
        console.log(`Computer wins! Rock beats Scissors. Current Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (human === scissors && computer === paper) {
        humanScore++;
        console.log(`You win! Scissors beat Paper. Current Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log("Error occurred.");
    }
}

playRound("rock", getComputerChoice());

