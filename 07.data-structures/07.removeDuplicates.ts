// Write a function removeDuplicates(arr: number[]): number[] that removes duplicate elements from an array.

function removeDuplicates(arr: number[]): number[] {
  const unique: number[] = [];

  for (const num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  return unique;
}
