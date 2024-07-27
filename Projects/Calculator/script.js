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


// --------- Linking HTML buttons ---------
// Clear button
const clearBtn = document.querySelector('#clearBtn');

// Operation buttons
const addBtn = document.querySelector('#addBtn');
const subtractBtn = document.querySelector('#subtractBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const divideBtn = document.querySelector('#divideBtn');
const equalBtn = document.querySelector('#equalBtn');

// Number buttons
const oneBtn = document.querySelector('#oneBtn');
const twoBtn = document.querySelector('#twoBtn');
const threeBtn = document.querySelector('#threeBtn');
const fourBtn = document.querySelector('#fourBtn');
const fiveBtn = document.querySelector('#fiveBtn');
const sixBtn = document.querySelector('#sixBtn');
const sevenBtn = document.querySelector('#sevenBtn');
const eightBtn = document.querySelector('#eightBtn');
const nineBtn = document.querySelector('#nineBtn');
const zeroBtn = document.querySelector('#zeroBtn');


