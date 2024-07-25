const array1 = [1, 2, 3, 4, 5];

function sumOfTripledEvens(array) {
    return array
        .filter(function(num) {
            return num % 2 === 0;
        })
        .map(function(num) {
            return num * 3;
        })
        .reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0); // Initial value for accumulator
}

console.log(sumOfTripledEvens(array1)); // Should print 18 (2*3 + 4*3 = 6 + 12 = 18)
