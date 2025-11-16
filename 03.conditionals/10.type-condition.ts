// Write a function describeInput(x: any) that prints:

// "Number" if typeof x is number

// "String" if string

// "Boolean" if boolean

// "Unknown type" otherwise

// Use both if-else and a switch version for practice.

function describeInput(x: any) {
  if (typeof x === "string") {
    return "String";
  } else if (typeof x === "number") {
    return "Number";
  } else if (typeof x === "boolean") {
    return "Boolean";
  } else {
    return "Unknown Type";
  }
}

function describeInputSwitch(x: any) {
  switch (typeof x) {
    case "string":
      return "String";
    case "boolean":
      return "Boolean";
    case "number":
      return "Number";
    default:
      return "Unknwon Type";
  }
}
