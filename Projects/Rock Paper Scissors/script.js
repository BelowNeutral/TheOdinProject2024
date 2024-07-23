// --------- CONSOLE STUFF ---------

// Declaring values for rock, paper, scissors
const rock = 1;
const paper = 2;
const scissors = 3;

// Setting human and computer score to 0
let humanScore = 0;
let computerScore = 0;
let roundWinner = '';

// Function for getting the player's choice
function getPlayerChoice(buttonID) {
    return choicesList[buttonID];
}

// Function that plays a round
function playRound(playerChoice) {
    const human = getPlayerChoice(playerChoice);
    const computer = getComputerChoice();

    if (human === computer) {
        roundWinner = "It's a tie.";
    } else if (
        (human === rock && computer === scissors) || 
        (human === paper && computer === rock) || 
        (human === scissors && computer === paper)
    ) {
        humanScore++;
        roundWinner = "The human wins!";
    } else {
        computerScore++;
        roundWinner = "The computer wins!";
    }

    // Update the result on the page
    let result = document.querySelector('.current-score-panel');
    result.textContent = `${roundWinner} Current Scores - Human: ${humanScore}, Computer: ${computerScore}`;
}

// Function that randomizes a number from 0-2 (computer's choice)
function getComputerChoice() {
    const choices = [rock, paper, scissors];
    let randomNumber = Math.floor(Math.random() * 3); // Random number from 0 to 2
    return choices[randomNumber];
}

// Function for when the game ends
function endGame() {
    return humanScore === 5 || computerScore === 5;
}

//--------- USER INTERFACE --------- 

// Identifying the buttons and their values
const choicesList = {
    rockBtn: rock,
    paperBtn: paper,
    scissorsBtn: scissors
};

// Function to add event listeners to buttons
function setupButton(buttonID) {
    const button = document.querySelector(`#${buttonID}`);
    button.addEventListener('click', function() {
        playRound(buttonID);
        if (endGame()) {
            alert(`Game Over! ${humanScore === 5 ? "Human" : "Computer"} wins!`);
            humanScore = 0;
            computerScore = 0;
            document.querySelector('.current-score-panel').textContent = '';
        }
    });
}

// Setting up event listeners
setupButton('rockBtn');
setupButton('paperBtn');
setupButton('scissorsBtn');
