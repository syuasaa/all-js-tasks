// function calculateBill(units, isMember) {
//   if (units <= 0) {
//     return "Invalid units";
//   }

//   let total = 0;

//   if (units <= 100) {
//     total = units * 2;
//   } else if (units <= 200) {
//     total = 100 * 2 + (units - 100) * 3;
//   } else {
//     total = 100 * 2 + 100 * 3 + (units - 200) * 5;
//   }

//   if (isMember === true) {
//     total = total - (total * 10) / 100;
//   }

//   return total;
// }

// console.log(calculateBill(200, true)); // 675

///////////////////////////////////////////

// let age = +prompt("tariq");
// let salary = +prompt("ashxatavardz");
// let debt = +prompt("partq");
// let creditScore = +prompt("kreditayin varkanish");
// let hasJob = confirm("ashxatanq ka?");

// function checkCredit(age, salary, debt, creditScore, hasJob) {
//   if (age < 18) {
//     return "Չափազանց երիտասարդ";
//   }
//   if (salary < 0 || debt < 0) {
//     return "Անվավեր տվյալներ";
//   }
//   if (creditScore < 300 || debt > salary * 5) {
//     return "Մերժված";
//   }
//   if (!hasJob) {
//     return "Աշխատանքի ապահովումը պարտադիր է";
//   }
//   if (creditScore >= 750 && salary >= 3000 && debt < salary) {
//     return "Պրեմիում հաստատում";
//   } else if (creditScore >= 650 && salary >= 1500 && debt < salary * 3) {
//     return "Հաստատված";
//   } else if (creditScore >= 500) {
//     return "Պահանջվում է վերանայում";
//   } else return "Մերժված";
// }

// console.log(checkCredit(age, salary, debt, creditScore, hasJob));

///////////////////////////////////////////////

// gnahatakan / ekamut / nerkayutyun

// let grade = +prompt("mijin gnahatakan");
// let familyIncome = +prompt("ekamut");
// let attendance = +prompt("nerkayutyuneri tokos");

// function getScholarship(grade, familyIncome, attendance) {
//   if (grade > 90 && familyIncome < 1000 && attendance > 90) {
//     return "Լրիվ ուսումնաթոշակ";
//   } else if (grade > 80 && familyIncome < 2000 && attendance > 80) {
//     return "Մասնակի ուսումնաթոշակ";
//   } else if (grade < 60 || attendance < 50) {
//     return "Մերժված";
//   } else return "Ստուգման տակ";
// }

// console.log(getScholarship(grade, familyIncome, attendance));

////////////////////////////////////

// function calculatePrice(price, quantity, discount) {
//   if (price <= 0 || quantity <= 0) {
//     return "Invalid input";
//   }
//   let sum = price * quantity;
//   sum -= (sum * discount) / 100;
//   if (sum > 500) {
//     return (sum -= (sum * 10) / 100);
//   } else return sum;
// }

// console.log(calculatePrice(100, 6, 5)); // 513

//////////////////////////////////////////
