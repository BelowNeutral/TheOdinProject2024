// --------- Linking HTML Buttons ---------
// Input Bar (Screen)
const SCREEN = document.getElementById('screen');

// Clear button
const CLEAR = document.getElementById('clearBtn');

// Operation buttons
const ADD = document.getElementById('addBtn');
const SUBTRACT = document.getElementById('subtractBtn');
const MULTIPLY = document.getElementById('multiplyBtn');
const DIVIDE = document.getElementById('divideBtn');
const EQUAL = document.getElementById('equalBtn');

// Number buttons
const ONE = document.getElementById('oneBtn');
const TWO = document.getElementById('twoBtn');
const THREE = document.getElementById('threeBtn');
const FOUR = document.getElementById('fourBtn');
const FIVE = document.getElementById('fiveBtn');
const SIX = document.getElementById('sixBtn');
const SEVEN = document.getElementById('sevenBtn');
const EIGHT = document.getElementById('eightBtn');
const NINE = document.getElementById('nineBtn');
const ZERO = document.getElementById('zeroBtn');

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
//     // If user clicks on add button, call add() function
//     // if (this.ADD === true) {
//     //     return add();
//     // }

//     // If user clicks on subtract button, call subtract() function

//     // If user clicks on multiply button, call multiply() function

//     // If user clicks on divide button, call divide() function
// }


// Function that clears everything from the screen
function clear() {
    SCREEN.textContent = "";
}


// --------- Event Listeners ---------
// CLEAR.addEventListener('DOMContentLoaded', clear);



// ---------- Testing ----------
if (document.getElementById("screen")) {
    alert("Element exists");
}
else {
    alert("Element does not exist");
}