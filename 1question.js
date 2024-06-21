function countCharacters(s) {
    let charCount = {};
    for (let char of s) {
        if (charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}

// Example usage:
const result = countCharacters("hello world");
console.log(result);
