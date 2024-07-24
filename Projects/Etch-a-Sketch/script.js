// Function that generates a random color
function generateRandomColor() {
    let rgbValue = 0xFFFFFF;
    let randomNumber = Math.random() * rgbValue;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6,0);
    return `#${randomColor.toUpperCase()}`;
}

// Linking .container from the HTML file
const container = document.querySelector('.container');

// ------ Creating the 16x16 square divs ------
// For-loop: creates grid
for (let i = 0; i < 256; i++) { // The 256 comes from 16*16
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    container.appendChild(squareDiv);

    // Adding mouseover event listener to each square (hover effect)
    squareDiv.addEventListener('mouseover', function() {
        this.style.backgroundColor = generateRandomColor();
    })
}

