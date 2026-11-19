// Task: Password Checker — Level 2
// Ավելացրու ստուգում, որ գաղտնաբառը պարունակի առնվազն մեկ թիվ։
// Պահանջներ՝
// Գաղտնաբառի երկարությունը պետք է լինի 8 նիշից ավելի։
// Գաղտնաբառը պետք է պարունակի առնվազն 4 թիվ։
// Եթե երկու պայմաններն էլ ճիշտ են, վերադարձնել true, հակառակ դեպքում՝ false։
// Example:

// JavaScript
// let pass = "hello12345";

// console.log(checkPassword(pass)); // true

let pass = prompt("pasword");

function checkPassword(password) {
  if (password.length >= 8) {
    let num = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] > 0 || password[i] < 9) {
        console.log(`${password[i]}`);
        num++;
      }
    }
    if (num >= 4) {
      return true;
    }
  } else {
    return false;
  }
}

console.log(checkPassword(pass));
