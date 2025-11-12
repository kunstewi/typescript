// Write a function isPalindrome(str: string): boolean that returns true if the string is the same when reversed.

function isPalindrome(stri: string): boolean {
  const cleaned = stri.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStri = cleaned.split("").reverse().join("");

  return cleaned === reversedStri;
}

console.log(isPalindrome("kanai"));
console.log(isPalindrome("Madam"));      // true
console.log(isPalindrome("race car"));   // true
console.log(isPalindrome("hello"));      // false
