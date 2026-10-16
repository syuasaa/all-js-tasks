let value = "245";
let price = "19.99";

console.log(typeof value);
console.log(typeof price);

value = Number(value);
console.log(value);
value = parseInt(value);
console.log(value);

price = Number(price);
console.log(price);
price = parseInt(price);
console.log(price);

////////////////////////

let user = "Aram;18;Yerevan;Student";

let userArr = user.split(";");

console.log(userArr);

let name = userArr[0];
let age = userArr[1];
let city = userArr[2];
let profession = userArr[3];

console.log(name);
console.log(age);
console.log(city);
console.log(profession);

console.log(typeof age);

age = Number(age);
console.log(typeof age);

user = userArr.join("-");
console.log(user);

//////////////////////////////

let records = [
  "Aram,18,250.50",
  "Anna,16,100.25",
  "Karen,21,0",
  "David,abc,500.75",
];

let person1 = records[0].split(",");
let person2 = records[1].split(",");
let person3 = records[2].split(",");
let person4 = records[3].split(",");

let person1Name = person1[0];
let person1Age = Number(person1[1]);
let person1Balance = Number(person1[2]);

let person2Name = person2[0];
let person2Age = Number(person2[1]);
let person2Balance = Number(person2[2]);

let person3Name = person3[0];
let person3Age = Number(person3[1]);
let person3Balance = Number(person3[2]);

let person4Name = person4[0];
let person4Age = Number(person4[1]);
let person4Balance = Number(person4[2]);

let person1ValidAge = person1[1] !== "" && !isNaN(person1[1]);
let person2ValidAge = person2[1] !== "" && !isNaN(person2[1]);
let person3ValidAge = person3[1] !== "" && !isNaN(person3[1]);
let person4ValidAge = person4[1] !== "" && !isNaN(person4[1]);

let person1IsAdult = person1ValidAge && person1Age >= 18;
let person2IsAdult = person2ValidAge && person2Age >= 18;
let person3IsAdult = person3ValidAge && person3Age >= 18;
let person4IsAdult = person4ValidAge && person4Age >= 18;

let person1HighBalance = person1Balance > 200;
let person2HighBalance = person2Balance > 200;
let person3HighBalance = person3Balance > 200;
let person4HighBalance = person4Balance > 200;

let result1 = [
  person1Name,
  person1ValidAge ? person1Age : "Անվավեր տարիք",
  person1Balance,
  person1IsAdult,
  person1HighBalance,
].join(" | ");

let result2 = [
  person2Name,
  person2ValidAge ? person2Age : "Անվավեր տարիք",
  person2Balance,
  person2IsAdult,
  person2HighBalance,
].join(" | ");

let result3 = [
  person3Name,
  person3ValidAge ? person3Age : "Անվավեր տարիք",
  person3Balance,
  person3IsAdult,
  person3HighBalance,
].join(" | ");

let result4 = [
  person4Name,
  person4ValidAge ? person4Age : "Անվավեր տարիք",
  person4Balance,
  person4IsAdult,
  person4HighBalance,
].join(" | ");

let report = result1 + "\n" + result2 + "\n" + result3 + "\n" + result4;

console.log(report);
