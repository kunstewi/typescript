// Find intersection of two arrays using Sets
// Write a function findIntersection(a: number[], b: number[]): number[] that returns an array containing elements common to both arrays using Set.

function findIntersection(a: number[], b: number[]): number[] {
  const setA = new Set(a);
  const setB = new Set(b);

  const intersection: number[] = [];

  for (const num of setA) {
    if (setB.has(num)) {
      intersection.push(num);
    }
  }

  return intersection;
}

// Example usage:
console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); 
// Output: [3, 4]
