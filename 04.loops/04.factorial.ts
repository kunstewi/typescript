// Use a while loop to find the factorial of a given number n.
// Example:
// Input → 5
// Output → 120

function factorial(factnum: number): number {
  if (factnum < 0) {
    throw new Error("Factorial isn't defined for negative numbers");
  }

  let factresult: number = 1;
  let i: number = factnum;

  while (i > 0) {
    factresult *= i;
    i--;
  }

  return factresult;
}

try {
  console.log(factorial(-5));
} catch (err) {
  console.error((err as Error).message);
}
