const students = [
  { name: "Aram", age: 18, grades: [90, 85, 95], active: true },
  { name: "Karen", age: 20, grades: [60, 70, 65], active: true },
  { name: "Anna", age: 17, grades: [100, 95, 98], active: false },
  { name: "David", age: 19, grades: [45, 55, 60], active: true },
  { name: "Mariam", age: 21, grades: [80, 90, 85], active: true },
  { name: "Gor", age: 18, grades: [30, 40, 50], active: false },
];

const mijin = students.map((item) => {
  return Math.round(
    item.grades.reduce((acc, elem) => {
      return acc + elem;
    }, 0) / 3,
  );
});

console.log(mijin);

const maxMij = mijin.reduce((max, item) => {
  return item > max ? item : max;
});

console.log(maxMij);

const highPoints = students.filter((item) => {
  return (
    item.grades.reduce((acc, el) => {
      return acc + el;
    }, 0) > 80
  );
});

console.log(highPoints);

const actives = students.filter((el) => {
  return el.active === true;
});

console.log(actives);

const is100 = students.some((el) => el.grades.includes(100));

console.log(is100);

const isAll = actives.every(
  (el) =>
    Math.round(
      el.grades.reduce((acc, elem) => {
        return acc + elem;
      }, 0) / 3,
    ) > 50,
);

console.log(isAll);

students.sort((a, b) => {
  const avgB = b.grades.reduce((acc, elem) => acc + elem, 0) / 3;
  const avgA = a.grades.reduce((acc, elem) => acc + elem, 0) / 3;
  return avgB - avgA;
});

console.log(students);

const allMijin = mijin.reduce((acc, el) => {
  return acc + el;
});

console.log(allMijin);

const done = [];
mijin.filter((el, i) => {
  if (el >= 60) {
    done.push(students[i]);
  }
});

// const done = students.filter((el, i) => mijin[i] >= 60);

console.log(done);
console.log(students);

const secStud = students[1];

console.log(secStud);

// Խնդիր 2 — Ուսանողների կառավարման համակարգ
// Դժվար
// const students = [
//   { name: "Aram", age: 18, grades: [90, 85, 95], active: true },
//   { name: "Karen", age: 20, grades: [60, 70, 65], active: true },
//   { name: "Anna", age: 17, grades: [100, 95, 98], active: false },
//   { name: "David", age: 19, grades: [45, 55, 60], active: true },
//   { name: "Mariam", age: 21, grades: [80, 90, 85], active: true },
//   { name: "Gor", age: 18, grades: [30, 40, 50], active: false },
// ];

// Խնդիրներ՝
// Հաշվեք յուրաքանչյուր ուսանողի միջին բալը՝ օգտագործելով map() և reduce() ֆունկցիաները։
// Գտեք ամենաբարձր միջին բալ ունեցող ուսանողը։
// Ստացեք ուսանողների ցանկ, որոնց միջին բալը 80-ից բարձր է։
// Գտեք բոլոր անակտիվ ուսանողներին։
// Ստուգեք, արդյոք կա ուսանող, ում գնահատականը 100 է։
// Ստուգեք, արդյոք բոլոր ակտիվ ուսանողներն ունեն 50-ից բարձր միջին բալ։
// Կարգավորեք ուսանողները՝ ըստ միջին բալի։
// Հաշվեք խմբի ընդհանուր միջին բալը։
// Ստացեք միայն ուսանողների անունների զանգված, որոնք անցել են քննությունը (միջին բալը 60-ից ցածր չէ)։
// Գտեք երկրորդ ուսանողը՝ ըստ ամենաբարձր միջին բալի։
