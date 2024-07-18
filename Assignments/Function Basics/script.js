// Exercise 1
function add7(number) {
    return number + 7;
}

console.log(add7(5));


// Exercise 2
const multiply = (a, b) => a * b;

console.log(multiply(5,2));


// Exercise 3 (struggled a bit on this one)
function capitalize(text) {
    // Check if the string is empty
    if (text.length === 0) {
        return text; // Return empty string if input is empty
    }

    // Capitalize the first letter and concatenate with the rest of the string
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

console.log(capitalize("Hello World"));


// Exercise 4 (struggled a bit on this one)
function lastLetter(text) {
    // Check if the string is empty
    if (text.length === 0) {
        return ""; // Return empty string if input is empty
    }

    // Return the last character of the string
    return text.charAt(text.length - 1);
}

console.log(lastLetter("Greetings"));