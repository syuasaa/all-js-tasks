let age = 19;
let level = 15;
let hasTeam = true;
let isBanned = false;
let rank = "gold";
let hasPremium = false;

switch (rank) {
  case "bronze":
    console.log("Bronze league");
    break;
  case "silver":
    console.log("Silver league");
    break;
  case "gold":
    console.log("Gold league");
    break;
  case "diamond":
    console.log("Diamond league");
    break;
  default:
    console.log("Unkonwn rank");
    break;
}

console.log(
  age >= 16 && level >= 10 && hasTeam && !isBanned
    ? hasPremium || level > 20
      ? "Special player"
      : "low-level player"
    : "You can't participate in the game! ",
);

console.log(
  isBanned || (!hasTeam && !hasPremium)
    ? "Registration rejected"
    : "Registration is confirmed",
);

// console.log(hasPremium ? "Premium rewards" : "Standard rewards");

/////////////////////////////////////////////////////

// let age = 16;
// let hasAccount = true;
// let isBanned = false;
// let gameMode = "online";

// switch (gameMode) {
//   case "online":
//     console.log("Online mode");
//     break;
//   case "offline":
//     console.log("Offline mode");
//     break;
//   default:
//     console.log("Unknown mode");
//     break;
// }

// console.log(
//   age >= 13 && hasAccount && !isBanned
//     ? "You can participate in the game!"
//     : "Access denied",
// );

// console.log(hasAccount ? "Account exists" : "Create an account");
