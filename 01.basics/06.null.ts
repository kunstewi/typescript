// Write a function that takes a string or undefined and prints its length only if it’s defined.
// Try both if-checks and optional chaining (?.).
// 👉 Goal: Learn how TypeScript handles null and undefined with type safety.

// Optional Chaining: Optional chaining (?.) in TypeScript is a safe way to access properties or call functions on objects that might be null or undefined.

function printStringLength(str: string | undefined) {
  // ✅ Using an if-check
  if (str !== undefined) {
    console.log("Length (if-check):", str.length);
  } else {
    console.log("String is undefined");
  }

  // ✅ Using optional chaining
  console.log("Length (optional chaining):", str?.length);
}

// Test cases
printStringLength("hello"); // Length (if-check): 5, Length (optional chaining): 5
printStringLength(undefined); // String is undefined, Length (optional chaining): undefined


