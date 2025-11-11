// Write a curried function add(a)(b) that adds two numbers like this:

// add(5)(3); // 8


// Then extend it to add(a)(b)(c) for three numbers.

// for n-ary addition

type CurriedAdd = (a: number) => (b: number) => number;
type CurriedAdd3 = (a: number) => (b: number) => (c: number) => number;

// Example usage
const add2: CurriedAdd = (a) => (b) => a + b;
const add3: CurriedAdd3 = (a) => (b) => (c) => a + b + c;

console.log(add2(5)(3)); // 8
console.log(add3(2)(3)(4)); // 9
