// Use type assertion in two different ways to treat it as a string and get its length.
// 👉 Goal: Learn both <string>someValue and someValue as string syntax.

// Type Assertion: Type Assertion tell typescript - “Trust me, I know this variable’s type better than you do.”

let someValue1: unknown = "Hello TypeScript";
let someValue2: unknown = "Hello TypeScript";


// ✅ Using the angle bracket syntax (<string>)
let length1 = (<string>someValue1).length; // () is added for the order first assert the type then count length
console.log(length1); // 16


// ✅ Using the as syntax
let length2 = (someValue2 as string).length; // () is added for the order first assert the type then count length
console.log(length2); // 16

