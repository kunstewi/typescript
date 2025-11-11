// Write a function largestOfThree(a, b, c) that returns the largest number using only if and else if (no Math.max).

function largestThree(a: number, b: number, c: number): number {
  return a >= b && a >= c ? a : b >= a && b >= c ? b : c;
}

console.log(largestThree(2,3,5))