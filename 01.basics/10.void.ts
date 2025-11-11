// Write two functions:

// logMessage(message: string): void — logs and returns nothing

// throwError(message: string): never — throws an error and never returns

// 👉 Goal: Distinguish between void and never return types.

//A function can:

// ✅ Return a value (e.g., a number, string, boolean, etc.)

// ⚙️ Do something but return nothing (void)

// 🚫 Never finish at all (never)

// Function that returns void
function logMessage(message: string): void {
  console.log(message);
  // returns nothing (implicitly returns undefined)
}

// Function that returns never
function throwError(message: string): never {
  throw new Error(message);
  // this function never reaches the end — it either throws or loops forever
}

// Example usage
logMessage("This is a log message");
throwError("Something went wrong!");
