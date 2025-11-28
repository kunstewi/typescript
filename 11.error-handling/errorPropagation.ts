// Error propagation through functions:
// Create two functions:

// fetchUser(id: number) — throws an error "User not found" if id < 0.

// displayUser(id: number) — calls fetchUser inside try/catch and prints either the user or "Failed to fetch user: <message>".