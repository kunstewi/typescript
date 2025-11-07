// Write a function canVote(age: number, citizenship: string): boolean that returns true if:

// age is 18 or older, and

// citizenship is 'Indian'.

// Test it with different values to understand && and ||.

function canVote(age: number, citizenship: string): boolean {
  return age >= 18 && citizenship === "Indian";
}

// Testing the function
console.log(canVote(20, "Indian"));   // true  ✅ (age >= 18 and Indian)
console.log(canVote(17, "Indian"));   // false ❌ (age < 18)
console.log(canVote(25, "American")); // false ❌ (not Indian)
console.log(canVote(18, "Indian"));   // true  ✅
