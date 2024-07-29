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
function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 === 0) {
        return "Error"; // Handle division by zero
    }
    return num1 / num2;
}

// Function that determines which of the above functions to use
function operate(operator, num1, num2) {
    // switch (operator) {
    //     case '+':
    //         return addition(num1, num2);
    //     case '-':
    //         return subtraction(num1, num2);
    //     case '*':
    //         return multiplication(num1, num2);
    //     case '÷':
    //         return division(num1, num2);
    //     default:
    //         return "Invalid Operation";
    // }
    if (operator === addition) {
        SCREEN.value = addition();
    }
    else if (operator === subtraction) {
        SCREEN.value = subtraction();
    }
    else if (operator === multiplication) {
        SCREEN.value = multiplication();
    }
    else if (operator === division) {
        SCREEN.value = division();
    }
}

// --------- Event Listeners ---------
// For-loop that displays numbers on screen
numPad.forEach(button => {
    button.addEventListener('click', function(event) {
        if (!operator) {
            firstNumber += event.target.textContent;
            SCREEN.value = firstNumber;
        } else {
            secondNumber += event.target.textContent;
            SCREEN.value = secondNumber;
        }
    })
});

// Displays operator symbols on the screen and sets operator
const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(button => {
    button.addEventListener('click', function(event) {
        if (event.target.id === 'clearBtn') {
            SCREEN.value = '';
            firstNumber = '';
            operator = '';
            secondNumber = '';
        } else {
            // Set operator based on button text
            if (firstNumber && !operator) {
                operator = event.target.textContent;
                SCREEN.value = operator;
            }
        }
    })
});

// Calculate and display result when equal button is clicked
EQUAL.addEventListener('click', function() {
    if (firstNumber && operator && secondNumber) {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        const result = operate(operator, num1, num2);
        SCREEN.value = result;
        // Reset for the next operation
        firstNumber = result.toString();
        operator = '';
        secondNumber = '';
    }
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