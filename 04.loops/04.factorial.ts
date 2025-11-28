// Use a while loop to find the factorial of a given number n. also use for loop and recursive function.
// Example:
// Input → 5
// Output → 120

function factorialnew(factnum: number): number {
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
  console.log(factorialnew(-5));
} catch (err) {
  console.error((err as Error).message);
}

// while loop

function calculateFactorialUsingWhile(n: number) {
  
  if (n < 0) {
    throw new Error("Factorial isn't defined for negative numbers");
  }

  let result = 1;

  while (n > 1) {
    result *= n;
    n--;
  }

  return result;
}

// using recursion

function calculateFactorialUsingRecursion(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (n < 0) {
    throw new Error("Factorial isn't defined for negative numbers");
  }

  return n * calculateFactorialUsingRecursion(n - 1);
}
