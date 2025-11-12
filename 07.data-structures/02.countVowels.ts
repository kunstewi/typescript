// Write a function countVowels(str: string): number that counts how many vowels appear in the string.

function countVowels(strin: string): number {
  const vowels: Set<string> = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (const char of strin.toLowerCase()) {
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World"))