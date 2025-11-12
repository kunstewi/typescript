// Write a function reverseWords(sentence: string): string that reverses each word but keeps word order the same.
// Example: "Hello world" → "olleH dlrow"

function reverseWords(sentence: string): string {
  return sentence
    .split(" ")                     // Split sentence into words
    .map(word => word.split("").reverse().join("")) // Reverse each word
    .join(" ");                     // Join words back with spaces
}

// Example:
console.log(reverseWords("Hello world")); 
// Output: "olleH dlrow"
