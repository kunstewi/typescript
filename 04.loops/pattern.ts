// Use nested loops to print the following pattern:

// *
// * *
// * * *
// * * * *
// * * * * *

for (let line: number = 1; line <= 5; line++) {
  let stars: string = "";
  for (let numofstars: number = 1; numofstars <= line; numofstars++) {
    stars += "* ";
  }
  console.log(stars);
}
