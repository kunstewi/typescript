// explain the difference
const x = { name: "Alice" };
x.name = "Bob"; // we can edit the content of x as object is a mutable data type, so we can edit the content on that memory address
// x = { name: "Charlie" }; // ❌ // this can't happen because we can't point x to a new memory address as binding is immutable for const


// 👉 Goal: Understand what immutability means for const and when it applies to references vs values.

// Solution
// Mutable value → The value (or its contents) can be changed after creation (modified in the same place of the memory). it means you change the old value 
// at the memory location of the first value so the first value gets overwritten by the second value.
// Immutable value → cannot be changed after creation; if you "change" it, you actually create a new value. it means when you assign it a new value,
// it doesn't change the old value it's still stored at the old memory location, rather it creates the new value at a new memory location and the variable
// points to the new memory location and later the old value gets garbage collected.

// const doesn't make a value immutable rather it makes the binding (binding is the connection between a variable name and a memory location) immutable.
// you can't make a const variable point to a new memory address. but if the value of the variable is mutable you can change it's content.

// immutable : number, string, boolean, null, undefined, symbol, bigint
// mutable : array, object, function, map, set, date, typedarray/buffer, weakmap/weakset