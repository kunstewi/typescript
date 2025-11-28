// Write a function findMinMax(arr: number[]): { min: number; max: number } that returns both the smallest and largest numbers in the array.

function findMinMax(arr: number[]): { min: number; max: number } {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let min = arr[0];
  let max = arr[0];

  for (const num of arr) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }

  return { min, max };
}

// Example usage:
const solution = findMinMax([3, 7, 2, 9, 5]);

console.log(solution); // { min: 2, max: 9 }
