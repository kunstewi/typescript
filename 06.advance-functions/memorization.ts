// Memoization (Performance Optimization)

// Write a memoize function that caches results of another function.

// Example:

// const slowSquare = (n: number) => {
//   console.log("Computing...");
//   return n * n;
// };

// const memoizedSquare = memoize(slowSquare);
// memoizedSquare(5); // logs "Computing..." and returns 25
// memoizedSquare(5); // returns 25 instantly, no log

function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!; // return cached result
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

// Example usage
const slowSquare = (n: number) => {
  console.log("Computing...");
  return n * n;
};

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(5)); // logs "Computing..." then 25
console.log(memoizedSquare(5)); // returns 25 instantly (no "Computing..." log)
