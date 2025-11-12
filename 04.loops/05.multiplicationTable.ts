// Use nested for loops to print a multiplication table from 1 to 5.

// example:

// 1 x 1 = 1
// 1 x 2 = 2
// ...

for (let table: number = 1; table <= 5; table++) {
  for (let multiple: number = 1; multiple <= 10; multiple++) {
    console.log(`${table} x ${multiple} = ${table * multiple}`);
  }
  console.log("");
}
