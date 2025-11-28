// Given a string "typescript", use a for...of loop to count and print how many vowels it contains. also use if else, switch case and Set() with .has

let thestring: string = "typescript";
let vowelCount: number = 0;
let vowels: string = "aeiou";

for (const char of thestring){
    
  /*
    vowels.includes(char) it means "aeiou".includes("t") false and it checks for all charecters of typescript
    returns true if the charecter is there otherwise false
    */

  if (vowels.includes(char.toLowerCase())) {
    vowelCount++;
  }

}

console.log(`the word ${thestring} has ${vowelCount} vowels`)

// using if
for (const char of thestring) {
  const c = char.toLowerCase();

  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    vowelCount++;
  }
}

// using switch
for (const char of thestring) {
  switch (char.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      vowelCount++;
      break;
  }
}

// using set
// const vowels = new Set(["a", "e", "i", "o", "u"]);

// let thestring = "typescript";
// let vowelCount = 0;

// for (const char of thestring) {
//   if (vowels.has(char.toLowerCase())) {
//     vowelCount++;
//   }
// }

// console.log(vowelCount);
