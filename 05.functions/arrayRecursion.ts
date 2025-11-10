// Write a recursive function sumArray(arr: number[]): number that returns the sum of all elements in the array.
// Do not use loops.

// example
// sumArray([1, 2, 3, 4, 5]); // 15

// recursion syntax
/*

function recursiveFunction(params): ReturnType {
  if (baseCaseCondition) {
    return baseValue; // stop recursion
  } else {
    return recursiveFunction(smallerParams); // recursive call
  }
}

*/

function sumArray(arr: number[]): number {
  // base case if array is empty return 0
  if (arr.length === 0) {
    return 0;
  }

  // Recursive case: add the first element + sum of the rest
  return arr[0] + sumArray(arr.slice(1)); // slice takes the array from the index 1

  /*

  sumArray([1,2,3,4,5])
= 1 + sumArray([2,3,4,5])
= 1 + 2 + sumArray([3,4,5])
= 1 + 2 + 3 + sumArray([4,5])
= 1 + 2 + 3 + 4 + sumArray([5])
= 1 + 2 + 3 + 4 + 5 + sumArray([])
= 1 + 2 + 3 + 4 + 5 + 0
= 15

  */
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
