// Demonstrate how short-circuit evaluation works by writing:

const isReady = false;

// or operator picks the first truth value it encounters if the first value is false it returns the other one
// falsy values in ts: false, 0, "", null, undefined, NaN
// if we give any of these values to "value" it will return Default
const result = value || "Default";

// The && (AND) operator returns the first falsy value it encounters.
// If all operands are truthy, it returns the last one.
// && only continues if the first operand is truthy; otherwise, it short-circuits and returns that falsy value.
const valid = isReady && "Ready!";

// Explain what happens when value is "", null, 0, and when isReady is false.

// so when values are 0, "", null, undefined, NaN 
// result = "Default"
// valid = false

// otherwise opposite