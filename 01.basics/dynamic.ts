// Try to assign different types to a variable declared with:
// and observe what TypeScript allows or warns against.
// 👉 Goal: Feel the difference between untyped, any, and unknown.

let m; // type any as no initializer
let y: any; // explicit any
let z: unknown; // explicit unknown

// So m and y behave the same as they are of type any, while z is more restrictive.

m = 10;        // ✅ allowed
y = "hello";   // ✅ allowed
z = true;      // ✅ allowed

// ✅ All fine — any and unknown can hold values of any type.

let num: number;

num = m; // ✅ allowed (any bypasses type checking)
num = y; // ✅ allowed
// num = z; // ❌ ERROR: Type 'unknown' is not assignable to type 'number'
