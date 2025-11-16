// Write a switch-case that prints:

// "Small" for 1

// "Medium" for 2

// "Large" for 3

// But use fall-through so that 1 and 2 both print "Small or Medium".

const scnum: number = 3;

switch (scnum) {
  case 1:
    console.log("Small");
    break;
  case 2:
    console.log("Medium");
    break;
  case 3:
    console.log("Large");
    break;
  default:
    console.log("Invalid number");
    break;
}


// fall through version 

/*
const scnum: number = 3;

switch (scnum) {
  case 1:
  case 2:
    console.log("Small or Medium");
    break;

  case 3:
    console.log("Large");
    break;

  default:
    console.log("Invalid number");
    break;
}
*/