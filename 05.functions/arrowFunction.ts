// Rewrite the following traditional function using an arrow function:

// function multiply(x: number, y: number): number {
//   return x * y;
// }

// Then add one more arrow function called square that reuses multiply.

const multiply = (x: number, y: number): number => {
  return x * y;
};

const square = (n: number):number => {
    return multiply(n, n)
}

console.log(multiply(2,2))
console.log(square(5))