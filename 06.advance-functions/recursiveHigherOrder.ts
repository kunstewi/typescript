// Create a recursive function repeat(fn, times) that calls a function fn a specified number of times.

// Example:

// repeat(() => console.log("Hello"), 3);
// // Output: Hello (3 times)

function repeat(fn: () => void, times: number): void {
  if (times <= 0) return; // base case
  fn();
  repeat(fn, times - 1); // recursive call
}

// ✅ Example usage
repeat(() => console.log("Hello"), 3);
// Output:
// Hello
// Hello
// Hello
