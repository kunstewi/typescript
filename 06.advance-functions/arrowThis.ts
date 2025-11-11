// Arrow Functions with this Context

// Create an object user with:

// a name property

// a sayLater method that logs "Hi, I’m <name>" after 1 second

// Use both a normal function and an arrow function version to observe how this behaves differently.

let objuser = {
  name: "kanai",

  // Arrow function works no problem for this keyword
  sayLaterArrow: function () {
    setTimeout(() => {
      console.log("Hello I'm " + this.name);
    }, 1000);
  },

  /*
  Normal function doesn't work reason being the this inside setTimeout function doesn't refer to the object,
  it refers to by default undefined in strict mode and the global object in non strict mode
  */

  /*
  sayLaterNormal: function () {
    setTimeout(function () {
      console.log("Hello I'm" + this.name);
    }, 1000);
  },
  */
};
