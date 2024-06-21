function sortNumbers(arr) {
    // Use the built-in sort method with a comparator function
    return arr.slice().sort((a, b) => a - b);
}

// Example usage:
const numbers = [5, 3, 8, 1, 2, 7];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers); // [1, 2, 3, 5, 7, 8]
