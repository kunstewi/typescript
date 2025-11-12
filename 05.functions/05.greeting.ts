// Write a function welcomeUser(name: string, greeting?: string) where:

// greeting is optional, and if not provided, defaults to "Hello".

// It should return a string like "Hello, Alice!".

// welcomeUser("Alice"); // "Hello, Alice!"
// welcomeUser("Bob", "Good morning"); // "Good morning, Bob!"

function welcomeUser(name: string, greetings: string = "Hello"): string {
  return `${greetings}, ${name}`;
}

console.log(welcomeUser("John", "Good Morning"))