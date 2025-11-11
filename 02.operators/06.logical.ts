// Given three boolean variables:

const hasTicket = true;
const isVIP = false;
const hasInvitation = true;

// Write a TypeScript expression that prints "Allowed" if any of the conditions are true (hasTicket, isVIP, or hasInvitation), otherwise "Not Allowed".


// short form of writing if else. condition ? valueIfTrue : valueIfFalse

console.log(hasTicket || isVIP || hasInvitation ? "Allowed" : "Not Allowed");

