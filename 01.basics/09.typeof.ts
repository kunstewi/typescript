// Create variables of all primitive types
// (number, string, boolean, null, undefined, symbol, bigint)
// and write a function that logs their type using typeof.

// 👉 Goal: Understand how typeof behaves with each type, especially null.


// Create variables of all primitive types
let numb: number = 42;
let str: string = "Hello TypeScript";
let bool: boolean = true;
let n: null = null;
let undef: undefined = undefined;
let sym: symbol = Symbol("id");
let bigIntNum: bigint = 123456789012345678901234567890n;

// Function to log type of each variable
function logTypes(): void {
  console.log("num:", typeof numb);        // number
  console.log("str:", typeof str);        // string
  console.log("bool:", typeof bool);      // boolean
  console.log("n:", typeof n);            // object ❗ (quirk in JS)
  console.log("undef:", typeof undef);    // undefined
  console.log("sym:", typeof sym);        // symbol
  console.log("bigIntNum:", typeof bigIntNum); // bigint
}

logTypes();

// Here’s how you can correctly check for null — since typeof gives "object" for it:
let nul: null = null;

// ❌ Wrong way (typeof gives "object")
console.log(typeof n); // "object"

// ✅ Correct way
if (n === null) {
  console.log("Value is null");
}

// You can also use this helper function
function isNull(value: unknown): boolean {
  return value === null;
}

console.log(isNull(n));       // true
console.log(isNull("hello")); // false
