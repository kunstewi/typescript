// Demonstrate how short-circuit evaluation works by writing:

const isReady = false;
const result = value || "Default";
const valid = isReady && "Ready!";

// Explain what happens when value is "", null, 0, and when isReady is false.
