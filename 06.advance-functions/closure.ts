// Create a function counter() that returns two functions:

// increment()

// getValue()

// These functions should share access to a private variable count (closure).
// Example:

// const c = counter();
// c.increment();
// console.log(c.getValue()); // 1

function counter(): { increment: () => void; getValue: () => number } {
  let count = 0;

  return {
    increment: () => {
      count++;
    },
    getValue: () => count,
  };
}

const cuu = counter();
cuu.increment();
console.log(cuu.getValue());
