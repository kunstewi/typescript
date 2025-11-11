// Create an async function getUser() that:

// waits 2 seconds (simulate delay with setTimeout + Promise)

// then returns an object { name: "Alice", age: 25 }

// Call it and log the result with .then() and also using await.

// SOLUTION

// async function that returns a user object after 2 seconds
async function getUser(): Promise<{ name: string; age: number }> {
  // simulate a delay with a promise and a set time out
  await new Promise<void>((resolve) => setTimeout(resolve, 2000));

  // return user object
  return { name: "Alice", age: 25 };
}

// Using .then to handle the promise
getUser().then((user) => {
  console.log("Using .then:", user);
});

// Using await inside another async function
async function showUser(): Promise<void> {
  const user = await getUser();
  console.log("Using await:", user);
}

showUser();
