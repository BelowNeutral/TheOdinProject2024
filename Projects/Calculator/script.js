// vvvvvvv Declaring Variables vvvvvvv
let displayValue = 0;
// let firstNumber = "";
// let operator = "";
// let secondNumber = "";

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
// const ONE = document.querySelector('#oneBtn');
// const TWO = document.querySelector('#twoBtn');
// const THREE = document.querySelector('#threeBtn');
// const FOUR = document.querySelector('#fourBtn');
// const FIVE = document.querySelector('#fiveBtn');
// const SIX = document.querySelector('#sixBtn');
// const SEVEN = document.querySelector('#sevenBtn');
// const EIGHT = document.querySelector('#eightBtn');
// const NINE = document.querySelector('#nineBtn');
// const ZERO = document.querySelector('#zeroBtn');


// --------- Displaying Numbers On Screen ---------
const numPad = document.querySelectorAll('.number');
for (let i = 0; i < numPad.length; i++) {
    numPad[i].addEventListener('click', function(event) {
        displayValue = i;
        SCREEN.value += event.target.textContent;
    })
}


// --------- Functions For Basic Operations ---------
// Basic functions (add, sub, mult, div)
function add(num1, num2) {
    let expression = `${num1} + ${num2}`;
    let result = num1 + num2;
    let equal = ` = ${result}`;
    // console.log(result);
    return expression + equal;
}

// console.log(add(5,5));

function subtract(num1, num2) {
    let expression = `${num1} - ${num2}`;
    let result = num1 - num2;
    let equal = ` = ${result}`;
    // console.log(result);
    return expression + equal;
}

// console.log(subtract(5,2));

function multiply(num1, num2) {
    let expression = `${num1} * ${num2}`;
    let result = num1 * num2;
    let equal = ` = ${result}`;
    // console.log(result);
    return expression + equal;
}

// console.log(multiply(5,5));

function divide(num1, num2) {
    let expression = `${num1} / ${num2}`;
    let result = num1 / num2;
    let equal = ` = ${result}`;
    // console.log(result);
    return expression + equal;
}

// console.log(divide(10,5));


// Function that determines which of the above functions to use
// function operate(operator, num1, num2) {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "x":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//         case "C":
//             return clearScren();
//         default:
//             return "invalid";
//     }
// }


// --------- Event Listeners ---------
// Function that clears everything from the screen
CLEAR_SCREEN.addEventListener('click', () => {
    SCREEN.value = "";
})










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