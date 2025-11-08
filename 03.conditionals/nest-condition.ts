// Given three boolean values a, b, c, print:

// "All true" if all are true

// "At least one true" if at least one is true

// "All false" otherwise

// Use nested if statements.

let a = true;
let b = false;
let c = true;

// Check if all are true
if (a) {
  if (b) {
    if (c) {
      console.log("All True");
    } else {
      console.log("At least one true");
    }
  } else {
    console.log("At least one true");
  }
} else {
  if (b || c) {
    console.log("At least one true");
  } else {
    console.log("All false");
  }
}
