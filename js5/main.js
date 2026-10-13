///////// 🎮 Տնային աշխատանք — Game Challenges////////////////////////////////////////////

// let players = ["Aram", "Hayk", "Mariam", "Saro", "Ashot", "Ani"];
// let scores = [120, 45, 200, 75, 160, 30];

// let winners = [];
// let losers = [];
// let bonusPlayers = [];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] >= 100) {
//     winners.push(players[i]);
//   } else if (scores[i] < 50) {
//     losers.push(players[i]);
//   }

//   if (scores[i] >= 100 && 150 >= scores[i]) {
//     bonusPlayers.push(players[i]);
//   }
// }

// console.log(`winners :`, winners);
// console.log(`losers :`, losers);
// console.log(`bonus Players :`, bonusPlayers);

//////////// 🎮 Առաջադրանք 2 — Inventory Challenge//////////////////////////////

let items = ["Sword", "Shield", "Potion", "Bow", "Magic Stone", "Helmet"];
let prices = [150, 100, 30, 120, 300, 80];

let expensiveItems = [];
let cheapItems = [];
let specialItems = [];

for (let i = 0; i < prices.length; i++) {
  if (prices[i] > 100) {
    expensiveItems.push(items[i]);
  } else if (prices[i] <= 50) {
    cheapItems.push(items[i]);
  }
  if (prices[i] > 100 && prices[i] < 250) {
    specialItems.push(items[i]);
  }
  if (prices[i] < 50 || prices[i] > 250) {
    console.log(items[i], "-", prices[i]);
  }
}

console.log(`expens iveItems:`, expensiveItems);
console.log(`cheap Items:`, cheapItems);
console.log(`specia lItems :`, specialItems);
