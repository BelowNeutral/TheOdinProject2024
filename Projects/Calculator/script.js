// vvvvvvv Declaring Variables vvvvvvv
let displayValue = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';

// --------- Linking HTML Buttons ---------
// Input Bar (Screen)
const SCREEN = document.querySelector('#screen');

// Clear button
const CLEAR_SCREEN = document.querySelector('#clearBtn');

// Operation buttons
const ADD = document.querySelector('#addBtn');
const SUBTRACT = document.querySelector('#subtractBtn');
const MULTIPLY = document.querySelector('#multiplyBtn');
const DIVIDE = document.querySelector('#divideBtn');
const EQUAL = document.querySelector('#equalBtn');

// Number buttons
const numPad = document.querySelectorAll('.number');

// --------- Functions For Basic Operations ---------
let addition = function(num1, num2) {
    return num1 + num2;
}

let subtraction = function(num1, num2) {
    return num1 - num2;
}

let multiplication = function(num1, num2) {
    return num1 * num2;
}

let division = function(num1, num2) {
    if (num2 === 0) {
        return "Error"; // Handle division by zero
    }
    return num1 / num2;
}

// Function that determines which of the above functions to use
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '*':
            return multiplication(num1, num2);
        case '÷':
            return division(num1, num2);
        default:
            return "Invalid Operation";
    }
}

// --------- Event Listeners ---------
// For-loop that displays numbers on screen
numPad.forEach(button => {
    button.addEventListener('click', function(event) {
        SCREEN.value += event.target.textContent;
    });
});

// Displays operator symbols on the screen
const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(button => {
    button.addEventListener('click', function(event) {
        if (SCREEN.value !== '') {
            if (firstNumber === '') {
                firstNumber = SCREEN.value;
                operator = event.target.textContent;
                SCREEN.value = '';
            } else if (secondNumber === '') {
                secondNumber = SCREEN.value;
                firstNumber = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                operator = event.target.textContent;
                SCREEN.value = '';
            }
        } else {
            operator = event.target.textContent;
        }
    });
});

// Calculate and display result when equal button is clicked
EQUAL.addEventListener('click', function() {
    if (firstNumber !== '' && operator !== '' && SCREEN.value !== '') {
        secondNumber = SCREEN.value;
        const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        SCREEN.value = result;
        // Reset for the next operation
        firstNumber = result.toString();
        operator = '';
        secondNumber = '';
    }
});

// Clears everything from the screen
CLEAR_SCREEN.addEventListener('click', () => {
    SCREEN.value = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
});











// ---------- Testing ----------
// if (document.querySelector("#screen")) {
//     alert("Element exists");
// }
// else {
//     alert("Element does not exist");
// }

// TWO.addEventListener('click', function() {
//     SCREEN.textContent = 2;
//     console.log(2);
// });