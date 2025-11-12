// Given a string "typescript", use a for...of loop to count and print how many vowels it contains.

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