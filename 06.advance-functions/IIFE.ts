// Write an IIFE that logs "Running immediately!" and returns the string "done".
// Store its return value in a variable.

const result3 = ((): string => {
  console.log("Running immediately!");
  return "done";
})();

console.log(result); // "done"
