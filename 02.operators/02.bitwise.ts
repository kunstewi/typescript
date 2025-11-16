// Write a TypeScript function isEven(num: number): boolean that determines if a number is even using bitwise operators (hint: num & 1).

// the binary of odd numbers end with 1 and the binary of even numbers end with 0

// 0 is false and 1 is true

// Function to check if a number is even using bitwise operator
function isEven(num: number): boolean {
  // Bitwise AND with 1 checks the least significant bit
  // If it's 0, the number is even; if it's 1, the number is odd
  return (num & 1) === 0;
}

// Example usage:
console.log(isEven(4)); // true
console.log(isEven(7)); // false
