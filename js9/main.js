let salary = +prompt("amsakan ashxatavardz");
salary ? salary : +prompt("sxal e, nsheq amsakan ashxatavardzy krkin");

let goal = +prompt("meqenayi gin");
goal ? goal : +prompt("sxal e, nsheq meqenayi giny krkin");

let usagePercent = +prompt(
  "ashxatavardzi ayn tokosty, voey caxsvum e amen amis",
);

let bank = null;

if (usagePercent >= 100) {
  alert("ayd ashxatavardzov hnaravor che xnayel ");
} else {
  bank = +prompt("skzbnakan xnayoxutyun");
  bank >= goal ? console.log("0 amis") : bank;
}

let unUsagePercent = 0;
let month = 1;

while (bank <= goal) {
  unUsagePercent = salary - (salary * usagePercent) / 100;
  bank += unUsagePercent;
  month++;
  console.log(bank);
}
console.log(`${month} amis e anhrajesht ${bank} dram xnayelu hamar`);

console.log(`${bank - goal} gumar mnacel e `);

// let tiv = +prompt("tiv");

// if (tiv >= 1 && tiv <= 10) {
//   for (let i = 1; i <= tiv; i++) {
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${j}*${i} = ${j * i} `);
//     }
//     console.log("/////////////////");
//   }
// }
