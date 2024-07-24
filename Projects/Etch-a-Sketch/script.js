document.addEventListener('DOMContentLoaded', function() {
    // Linking .container from the HTML file
    const container = document.querySelector('.container');

    // Creating the 16x16 grid
    for (let i = 0; i < 16 * 16; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add('grid-item');
        container.appendChild(squareDiv);
    }
});
