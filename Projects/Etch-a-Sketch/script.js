
// ------ Creating the 16x16 square divs ------
function createGrid() {
    // Linking .container from html file
    const container = document.querySelector('#container');
    // For-loop: creates grid
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div")
        row.className = "row";
        container.appendChild(row);

        for (let j = 0; j < 16; j++) {
            let column = document.createElement("div");
            column.className = "column";
            container.appendChild(column);
        }
    } 
}

