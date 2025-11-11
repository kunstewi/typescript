// Given a student’s marks (0–100), print:

// "A" for 90+

// "B" for 80–89

// "C" for 70–79

// "D" for 60–69

// "F" for below 60
// Use if-else if-else structure.

let studentMarks: number = 68;
let studentGrade: String;

// my code
// if (studenMarks >= 90) {
//   studentGrade = "A";
// } else if (studenMarks >= 80 && studenMarks < 90) {
//   studentGrade = "B";
// } else if (studenMarks >= 70 && studenMarks < 80) {
//   studentGrade = "C";
// } else if (studenMarks >= 60 && studenMarks < 70) {
//   studentGrade = "D";
// } else {
//   studentGrade = "F";
// }

// optimised code
if (studentMarks >= 90) {
  studentGrade = "A";
} else if (studentMarks >= 80) {
  studentGrade = "B";
} else if (studentMarks >= 70) {
  studentGrade = "C";
} else if (studentMarks >= 60) {
  studentGrade = "D";
} else {
  studentGrade = "F";
}

// ternary
// let studentGrade =
//   studentMarks >= 90
//     ? "A"
//     : studentMarks >= 80
//     ? "B"
//     : studentMarks >= 70
//     ? "C"
//     : studentMarks >= 60
//     ? "D"
//     : "F";
// console.log(studentMarks, studentGrade);

console.log(studentMarks, studentGrade);
