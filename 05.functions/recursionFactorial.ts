// Implement a recursive function factorial(n: number): number that returns the factorial of n.

// Add a base case to stop recursion.
// Then test it with 0, 1, and 5.

function factorial(n: number): number {
  // base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // recursive function
  return n * factorial(n - 1);

  /*

  factorial(5)
= 5 * factorial(4)
= 5 * (4 * factorial(3))
= 5 * (4 * (3 * factorial(2)))
= 5 * (4 * (3 * (2 * factorial(1))))
= 5 * (4 * (3 * (2 * 1)))    // factorial(1) = 1 (base case)
= 5 * (4 * (3 * 2))
= 5 * (4 * 6)
= 5 * 24
= 120

  */
}

console.log(factorial(5))
