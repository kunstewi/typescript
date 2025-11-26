// given an array of strings

const fruits: String[] = ["apple", "banana", "cherry", "mango"];

// Use a for...of loop to print each fruit in uppercase. also use and for loop

for (let i: number = 0; i < fruits.length; i++) {
  console.log(fruits[i].toUpperCase());
}

// using for...of loop
for (const fruit of fruits) {
  console.log(fruit.toUpperCase());
}

