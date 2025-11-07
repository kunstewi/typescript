// Write a function maxOfThree(a: number, b: number, c: number): number
// that returns the largest of three numbers without using Math.max().
// Try solving it with ternary and logical operators combined.


// same as 

// if (a >= b && a >= c) return a;
// else if (b >= a && b >= c) return b;
// else return c;


function maxOfThree(a: number, b: number, c: number): number {
  return a >= b && a >= c ? a : b >= a && b >= c ? b : c;
}

console.log(maxOfThree(5, 20, 30));
