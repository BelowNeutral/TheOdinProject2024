// Linking .container from the HTML file
const container = document.querySelector('.container');

// ------ Creating the 16x16 square divs ------
// For-loop: creates grid
for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    container.appendChild(squareDiv);
}
