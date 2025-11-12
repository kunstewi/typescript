// mplement a compose function that takes two functions and returns a new function that applies them in sequence.

// Example:

// const double = (x: number) => x * 2;
// const square = (x: number) => x * x;
// const doubleThenSquare = compose(square, double);
// console.log(doubleThenSquare(3)); // (3*2)^2 = 36

// Compose function that takes two functions and returns their composition
function compose<A, B, C>(
  f: (arg: B) => C,
  g: (arg: A) => B
): (arg: A) => C {
  return (arg: A) => f(g(arg));
}

// Example usage
const double2 = (x: number) => x * 2;
const square2 = (x: number) => x * x;

const doubleThenSquare = compose(square2, double2);

console.log(doubleThenSquare(3)); // (3 * 2)^2 = 36
