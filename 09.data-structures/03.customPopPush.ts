// Without using push() or pop(), simulate these operations using array indexing.
// Hint: You can use arr[arr.length] = newElement for push.

function customPush<ElementType>(
  arr: ElementType[],
  element: ElementType
): number {
  arr[arr.length] = element; // add element at the end
  return arr.length; // return new length (like push)
}

function customPop<ElementType>(arr: ElementType[]): ElementType | undefined {
  if (arr.length === 0) return undefined; // handle empty array safely

  const lastIndex = arr.length - 1;
  const lastElement = arr[lastIndex];

  // remove last element
  arr.length = lastIndex;

  return lastElement;
}


// Example usage:
let numbers2: number[] = [1, 2, 3];

customPush(numbers2, 4);
console.log(numbers2); // [1, 2, 3, 4]

const removed = customPop(numbers2);
console.log(removed); // 4
console.log(numbers2); // [1, 2, 3]
