function fibonacci(n) {
    if (n < 0) return null; // Fibonacci sequence is not defined for negative numbers
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Example usage:
console.log(fibonacci(10)); 
// Output: 55
