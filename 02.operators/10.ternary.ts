// Given a number marks, write a single-line expression using the ternary operator that prints:

// "Pass" if marks ≥ 40,

// "Fail" otherwise.

// Then try nesting ternaries to categorize:

// ≥ 90 → "A"

// ≥ 75 → "B"

// ≥ 50 → "C"

// else → "F"

let marks = 66;

console.log(marks >= 40 ? "Pass" : "Fail");

let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 50 ? "C" : "F";

console.log(grade)
