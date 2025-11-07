// Write a TypeScript function calculateArea(length: number, width: number): number that returns the area of a rectangle.
// Then test it with sample values and also compute the perimeter using arithmetic operators.

// Function to calculate the area of a rectangle
function calculateArea(length: number, width: number): number {
  return length * width;
}

// Function to calculate the perimeter of a rectangle
function calculatePerimeter(length: number, width: number): number {
  return 2 * (length + width);
}

// Test the functions with sample values
let length = 10;
let width = 5;

console.log("Area:", calculateArea(length, width));         // 10 * 5 = 50
console.log("Perimeter:", calculatePerimeter(length, width)); // 2 * (10 + 5) = 30

