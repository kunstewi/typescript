let value: any = "123";

// Convert value into a number using at least three different methods in TypeScript and log their types.
// 👉 Goal: Explore Number(), parseInt(), as number, and +value.


// Method 1: Using Number() - Converts any value (string, boolean, etc.) to a number (or NaN if invalid).
let num1 = Number(value);
console.log(num1, typeof num1); // 123 'number'

// Method 2: Using parseInt() - Parses only the integer part of a string.
let num2 = parseInt(value);
console.log(num2, typeof num2); // 123 'number'

// Method 3: Using type assertion (as number) - Does not actually convert the value at runtime — it’s just a TypeScript compile-time assertion.
let num3 = value as number;
console.log(num3, typeof num3); // "123" 'string'  ❗ This does NOT convert — it just *tells* TS to treat it as number.

// Method 4: Using unary plus (+) - The unary plus operator is a shorthand to coerce strings to numbers.
let num4 = +value;
console.log(num4, typeof num4); // 123 'number'
