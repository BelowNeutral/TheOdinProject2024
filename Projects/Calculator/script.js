// --------- Functions For Basic Operations ---------
// Basic functions (add, sub, mult, div)
function add(num1, num2) {
    let expression = `${num1} + ${num2}`;
    let result = num1 + num2;
    let equal = `= ${result}`;
    // console.log(result);
    return expression;
}

function subtract(num1, num2) {
    let expression = `${num1} - ${num2}`;
    let result = num1 - num2;
    let equal = `= ${result}`;
    // console.log(result);
    return expression;
}

function multiply(num1, num2) {
    let expression = `${num1} * ${num2}`;
    let result = num1 * num2;
    let equal = `= ${result}`;
    // console.log(result);
    return expression;
}

function divide(num1, num2) {
    let expression = `${num1} / ${num2}`;
    let result = num1 / num2;
    let equal = `= ${result}`;
    // console.log(result);
    return expression;
}


// Function that determines which of the above functions to use
// function operate() {
    // If user clicks on add button, call add() function

    // If user clicks on subtract button, call subtract() function

    // If user clicks on multiply button, call multiply() function

    // If user clicks on divide button, call divide() function
// }

// Function that clears everything on the screen
function clear() {
    // If user clicks on CLEAR, then reset screen
}


// --------- Linking HTML Buttons ---------
// Input Bar (Screen)
const INPUT = document.querySelector('#screen');

// Clear button
const CLEAR = document.querySelector('#clearBtn');

// Operation buttons
const ADD = document.querySelector('#addBtn');
const SUBTRACT = document.querySelector('#subtractBtn');
const MULTIPLY = document.querySelector('#multiplyBtn');
const DIVIDE = document.querySelector('#divideBtn');
const EQUAL = document.querySelector('#equalBtn');

// Number buttons
const ONE = document.querySelector('#oneBtn');
const TWO = document.querySelector('#twoBtn');
const THREE = document.querySelector('#threeBtn');
const FOUR = document.querySelector('#fourBtn');
const FIVE = document.querySelector('#fiveBtn');
const SIX = document.querySelector('#sixBtn');
const SEVEN = document.querySelector('#sevenBtn');
const EIGHT = document.querySelector('#eightBtn');
const NINE = document.querySelector('#nineBtn');
const ZERO = document.querySelector('#zeroBtn');


// --------- Event Listeners ---------
