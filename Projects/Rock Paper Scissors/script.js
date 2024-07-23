// Declaring values for rock, paper, scissors
const rock = 1;
const paper = 2;
const scissors = 3;

// Setting human and computer score to 0
let humanScore = 0;
let computerScore = 0;
let roundWinner = '';

// Function that plays a round
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        roundWinner = "It's a tie."
    }
    if (
        (playerChoice === rock && computerChoice === scissors) || (playerChoice === paper && computerChoice === rock) || (playerChoice === scissors && computerChoice === paper)
    ) {
        humanScore++;
        roundWinner = "The human wins!"
    }
    if (
        (computerChoice === rock && playerChoice === scissors) || (computerChoice === paper && playerChoice === rock) || (computerChoice === scissors && playerChoice === paper) 
    ) {
        computerScore++;
        roundWinner = "The computer wins!"
    }
}

// Function that randomizes a number from 1-3 (computer's choice)
function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
      case 1:
        return 'ROCK'
      case 2:
        return 'PAPER'
      case 3:
        return 'SCISSORS'
    }
}

// Function for when the game ends
function endGame() {
    return humanScore === 5 || computerScore === 5;
}

// Linking rock button
let ROCK = document.querySelector('#rockBtn');

// Function for when rock button is clicked
ROCK.addEventListener('click', function() {
    
});

// Linking paper button
let PAPER = document.querySelector('#paperBtn');

// Function for when paper button is clicked


// Linking scissors button
let SCISSORS = document.querySelector('#scissorsBtn');

// Function for when scissors button is clicked


// If-statement: After user input (from buttons), computer will randomly select numbers from 1-3 (rock, paper, or scissors)

