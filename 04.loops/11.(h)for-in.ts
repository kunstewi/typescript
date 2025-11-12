/*

The for...in loop is used to iterate over the keys (or indexes) of an object or array.
Unlike for...of, which gives you values, for...in gives you keys or property names.

SYNTAX:

for (const key in object) {
  // code to execute for each key
}

*/

// Loop through and object
const user = {
  name: "Alice",
  age: 25,
  city: "Delhi",
};

for (const key in user) {
  console.log(`${key}: ${user[key as keyof typeof user]}`);
}

// Loop through an array
const arrNumbers: number[] = [10, 20, 30];

for (const index in arrNumbers) {
  console.log(`Index: ${index}, Value: ${arrNumbers[index]}`);
}


// Nested for in with objects
const studentGrades = {
  Alice: { math: 90, english: 85 },
  Bob: { math: 78, english: 92 },
};

for (const student in studentGrades) {
  console.log(`Grades for ${student}:`);
  const grades = studentGrades[student as keyof typeof studentGrades];

  for (const subject in grades) {
    console.log(`  ${subject}: ${grades[subject as keyof typeof grades]}`);
  }
}

// use keyof for type safety
type User = {
  name: string;
  age: number;
  city: string;
};

const user2: User = { name: "Eve", age: 22, city: "Paris" };

for (const key in user2) {
  const typedKey = key as keyof User;
  console.log(`${typedKey}: ${user2[typedKey]}`);
}

