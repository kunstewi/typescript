// Write a function that accepts a parameter of type string | number and:

// Adds 10 if it’s a number

// Appends "!" if it’s a string
// 👉 Goal: Practice type narrowing using typeof checks.

function processValue(value: number | string) {
  if (typeof value === "number") {
    return value + 10; // add 10 if it's number
  } else if (typeof value === "string") {
    return value + "!"; // appends ! if value is a string
  }
}

console.log(processValue(3));
console.log(processValue("whatever"));
