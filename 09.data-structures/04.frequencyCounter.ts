// Write a function charFrequency(str: string): Record<string, number> that counts how many times each character appears in a string.

function charFrequency(str: string): Record<string, number> {
  const frequency: Record<string, number> = {};

  for (const char of str) {
    frequency[char] = (frequency[char] ?? 0) + 1;
  }

  return frequency;
}

// Example
console.log(charFrequency("banana"));
// Output: { b: 1, a: 3, n: 2 }
