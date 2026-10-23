// let students = [
//   "Aram",
//   "Ani",
//   "Karen",
//   "Mariam",
//   "David",
//   "Narek",
//   "Anna",
//   "Gor",
//   "Lilit",
//   "Hayk",
// ];
// let scores = [95, 42, 76, 0, 88, 31, 100, 59, 67, 24];

// let passed = [];
// let failed = [];
// let invalid = [];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] <= 0 || scores[i] > 100) {
//     invalid.push([students[i], scores[i]]);
//   } else if (scores[i] < 50) {
//     failed.push([students[i], scores[i]]);
//   } else if (scores[i] >= 50 && scores[i] <= 100) {
//     passed.push([students[i], scores[i]]);
//   }
// }

// console.log(failed);
// console.log(passed);
// console.log(invalid);

// console.log(`failed - ${failed.length}`);
// console.log(`passed - ${passed.length}`);
// console.log(`invalid - ${invalid.length}`);

///////////////////

let students = [
  "Aram",
  "Ani",
  "Karen",
  "Mariam",
  "David",
  "Narek",
  "Anna",
  "Gor",
  "Lilit",
  "Hayk",
];

let scores = [95, 42, 76, 0, 88, 31, 100, 59, 67, 24];

let excellent = [];
let passed = [];
let failed = [];
let invalid = [];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 0 || scores[i] > 100) {
    invalid.push(students[i]);
  } else if (scores[i] > 0 && scores[i] < 50) {
    failed.push(students[i]);
  } else if (scores[i] >= 50 && scores[i] < 90) {
    passed.push(students[i]);
  } else if (scores[i] >= 90 || scores[i] < 100) {
    excellent.push(students[i]);
  }
}

for (let i = 0; i < students.length; i++) {
  if (scores[i] === 100) {
    if (students[i] === "Aram" || students[i] === "Ani") {
      alert(`${students[i]} - ${scores[i]}`);
    }
  }
  if (scores[i] < 50) {
    if (students[i] === "David" || students[i] === "Hayk") {
      alert("Needs extra practice");
    }
  }
}
console.log(excellent);
console.log(passed);
console.log(failed);
console.log(invalid);

console.log(`failed - ${failed.length}`);
console.log(`passed - ${passed.length}`);
console.log(`invalid - ${invalid.length}`);
console.log(`excellent - ${excellent.length}`);
