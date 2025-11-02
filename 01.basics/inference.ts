// Write a function that adds two numbers.
// Then, modify it to accept any type of inputs and use TypeScript’s inference to see how the inferred types change.

// 👉 Goal: Observe when TypeScript can infer types and when you need explicit annotations.

// typescript returns the infer type number as a and b are explicitly number
function add(a: number, b: number) {
  return a + b;
}

const sum = add(2, 3);


// without explicit parameter types it gives an error as p and q are of type any

// function addUntyped(p, q) {
//   return p + q;
// }

// const addUntypedResult = addUntyped(2, 3);
