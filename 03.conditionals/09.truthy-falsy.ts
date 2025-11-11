// Write a function checkTruthy(value: any) that logs whether the given value is truthy or falsy.
// Test it with:
// 0, "", "hello", null, undefined, [], {}, NaN.


// Function to check if a value is truthy or falsy
function checkTruthy(value: any): void {
  if (value) {
    console.log(`${JSON.stringify(value)} is truthy`);
  } else {
    console.log(`${JSON.stringify(value)} is falsy`);
  }
}

// Test cases
checkTruthy(0);          // falsy
checkTruthy("");         // falsy
checkTruthy("hello");    // truthy
checkTruthy(null);       // falsy
checkTruthy(undefined);  // falsy
checkTruthy([]);         // truthy
checkTruthy({});         // truthy
checkTruthy(NaN);        // falsy
