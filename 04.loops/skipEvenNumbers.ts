// Print all numbers from 1 to 20, but skip even numbers using the continue statement.

for (let i: number = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
