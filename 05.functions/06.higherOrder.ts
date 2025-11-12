// Write a function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number.

// applyOperation(5, 3, (x, y) => x + y); // 8
// applyOperation(10, 2, (x, y) => x / y); // 5

// Add at least two different operations and test them.

function applyOperation(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

// defining operations
const addition = (x: number, y: number) => x + y;
const subtraction = (x: number, y: number) => x - y;
const multiplication = (x: number, y: number) => x * y;
const division = (x: number, y: number) => x / y;
const difference = (x: number, y:number) => Math.abs(x - y)

// testing
console.log(applyOperation(5, 3, addition));       // 8
console.log(applyOperation(10, 2, division));   // 5
console.log(applyOperation(7, 4, subtraction));  // 3
console.log(applyOperation(6, 9, multiplication));  // 54
console.log(applyOperation(7, 4, difference)); // 3