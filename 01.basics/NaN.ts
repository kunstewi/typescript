// Write a function that takes a number input and logs whether it’s NaN, Infinity, or a valid number.
// 👉 Goal: Understand how to use isNaN() and Number.isFinite() properly.

function checkNumberStatus(value: number): void {
  if (isNaN(value)) {
    console.log("The value is NaN (Not a Number)");
  } else if (!Number.isFinite(value)) {
    console.log("The value is Infinity or -Infinity");
  } else {
    console.log("the value is a valid finite number", value);
  }
}

// ✅ Test cases
checkNumberStatus(NaN); // The value is NaN (Not a Number)
checkNumberStatus(Infinity); // The value is Infinity or -Infinity
checkNumberStatus(-Infinity); // The value is Infinity or -Infinity
checkNumberStatus(42); // The value is a valid finite number: 42
