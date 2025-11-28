// Write a function reverseArray(arr: number[]): number[] that returns the reversed version of the given array without using reverse().

function reverseArray(arr: number[]): number[] {
  const reversed: number[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

// Example
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
