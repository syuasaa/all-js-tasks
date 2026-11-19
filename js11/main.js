let user = ["Joe", "joe1134%joe"];

let nike = "Joe";
let pass = "joe1134%joe";

function checkUser(username) {
  if (!username) {
    return "Username chkaara";
  }
  for (let i = 0; i < username.length; i++) {
    if (username[i] >= "A" && username[i] <= "Z") {
      return username;
    }
  }
  return username.toUpperCase();
}

console.log(checkUser(nike));

function checkPassword(password) {
  if (password.length < 8) {
    return "nshanery pakas en 8ic";
  }
  let num = 0;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      num++;
    }
  }

  let signs = [".", ",", ";", "%", "№", "#"];
  if (num >= 4) {
    for (let i = 0; i < password.length; i++) {
      for (let j = 0; j < signs.length; j++) {
        if (password[i] === signs[j]) {
          return "hamapatasxan gaxtnabar";
        }
      }
    }
    return "chka hatuk nshan";
  }
  return "chka arnvazn 4 tvanshan";
}

console.log(checkPassword(pass));

if (nike === user[0]) {
  if (pass === user[1]) {
    console.log("Login successful");
  } else {
    console.log("Invalid username or password");
  }
}

// function login(username, password) {
//   let checkedUsername = checkUser(username);
//   let checkedPassword = checkPassword(password);

//   if (checkedPassword === false) {
//     return "Invalid password format";
//   }

//   if (checkedUsername === user[0] && password === user[1]) {
//     return "Login successful";
//   }

//   return "Invalid username or password";
// }

// console.log(login("Joe", "joe1134%joe"));

////////////CODEWARS//////////////////////////

function well(x) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      count++;
    }
  }
  if (count <= 0) {
    return "Fail!";
  } else if (count > 0 && count <= 2) {
    return "Publish!";
  } else if (count > 2) {
    return "I smell a series!";
  }
}

//////////////////////////////////////////

function reverseWords(str) {
  let spacedStr = str.split(" ");
  let arr = [];
  for (let i = spacedStr.length - 1; i >= 0; i--) {
    arr.push(spacedStr[i]);
  }
  arr = arr.join(" ");

  return arr; // reverse those words
}

console.log(
  reverseWords("The greatest victory is that which requires no battle"),
);

/////////

const calculateSalary = (hours, rate) => hours * rate;

console.log(calculateSalary(40, 5));

/////////////////////////////////////////////////////

const calculateDiscount = (price, discount) =>
  price > 0 ? price - (price * discount) / 100 : "sxal tver";

console.log(calculateDiscount(100, 20));
