// Write a program that takes a number (1–7) and prints the corresponding day of the week using a switch statement.
// If the number is not 1–7, print "Invalid day".


// Program to print day of the week using switch

const dayNumber: number = 3; // You can change this number (1–7)

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
