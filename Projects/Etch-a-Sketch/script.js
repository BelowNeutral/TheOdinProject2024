// Function to generate a random color
function generateRandomColor() {
    let rgbValue = 0xFFFFFF;
    let randomNumber = Math.random() * rgbValue;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6, '0');
    return `#${randomColor.toUpperCase()}`;
}

// Function to return black color
function generateBlackInk() {
    return '#000000';
}

// Linking .container from the HTML file
const container = document.querySelector('.container');

// Flags to determine the current drawing mode
let isBlackInk = false;
let isRandomInk = false;
let isEraser = false;

// Adding event listeners to buttons to update the drawing mode
document.querySelector('.draw-with-black').addEventListener('click', () => {
    isBlackInk = true;
    isRandomInk = false;
    isEraser = false;
});

document.querySelector('.draw-with-rainbow').addEventListener('click', () => {
    isBlackInk = false;
    isRandomInk = true;
    isEraser = false;
});

document.querySelector('.eraser').addEventListener('click', () => {
    isBlackInk = false;
    isRandomInk = false;
    isEraser = true;
});

// ------ Creating the 16x16 square divs ------
for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    container.appendChild(squareDiv);

    // Adding mouseover event listener to each square
    squareDiv.addEventListener('mouseover', function() {
        if (isBlackInk) {
            this.style.backgroundColor = generateBlackInk();
        } else if (isRandomInk) {
            this.style.backgroundColor = generateRandomColor();
        } else if (isEraser) {
            this.style.backgroundColor = '';
        }
    });
}


