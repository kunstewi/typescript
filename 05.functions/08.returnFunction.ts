// Write a function makeMultiplier(multiplier: number) that returns another function.
// That returned function should multiply its input by multiplier.

// example
// const double = makeMultiplier(2);
// console.log(double(5)); // 10

function makeMultiplier(multiplier: number) {
  return function (num: number): number {
    return num * multiplier;
  };
}

let double = makeMultiplier(2)

console.log(double(5))