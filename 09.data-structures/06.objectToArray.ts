// Write a function that:

// Takes an object like { a: 1, b: 2 }

// Converts it to an array of key-value pairs

// Then reconstructs the object from that array.

// Use both Object.entries() and Object.fromEntries().

function objectToArrayAndBack<T extends Record<string, any>>(obj: T): T {
  // Convert object to array of key-value pairs
  const entries = Object.entries(obj);
  console.log("Entries:", entries); // [["a", 1], ["b", 2]]

  // Reconstruct object from the entries array
  const reconstructed = Object.fromEntries(entries) as T;
  console.log("Reconstructed:", reconstructed); // { a: 1, b: 2 }

  return reconstructed;
}

// Example usage
const original = { a: 1, b: 2 };
const resultnew = objectToArrayAndBack(original);
