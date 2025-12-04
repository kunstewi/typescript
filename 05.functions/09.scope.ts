// Scope and Shadowing

// Define a global variable let count = 10;.

// Then write a function increment() that:

// Has a local variable count = 5;

// Increments the local one by 1

// Logs both local and global count values.

// Explain the difference in output.

let count = 10

function increment(){ // this count is block variable so it shadows the global variable count's value in its scope
    let count = 5;
    count += 1
    console.log(count)
}

increment()
console.log(count)