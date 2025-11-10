// The for...of loop is used to iterate over iterable objects, such as:

// Arrays

// Strings

// Sets

// Maps

// or anything that implements the iterable protocol.

// It gives you each element (value) of the iterable, not the index (unlike for...in).

// syntax

// for (const element of iterable) {
//   // code to execute for each element
// }

// loop through an array
const numbers: number[] = [10, 20, 30, 40];

for (const num of numbers) {
  console.log(num);
}

// loop through an string
const word: string = "TypeScript";

for (const char of word) {
  console.log(char);
}


// loop through a set
const mySet: Set<string> = new Set(["a", "b", "c"]);

for (const item of mySet) {
  console.log(item);
}


// loop through a map
const userRoles: Map<string, string> = new Map([
  ["Alice", "Admin"],
  ["Bob", "User"],
  ["Eve", "Guest"],
]);

for (const [name, role] of userRoles) {
  console.log(`${name} → ${role}`);
}
