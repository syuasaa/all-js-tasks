let numArray = [1, -33, 8, 9, -10, 0, 44, -834, -333];

let zuyg = [];
let kent = [];

for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] % 2 === 0 && numArray[i] !== 0) {
    zuyg.push(numArray[i]);
  } else if (numArray[i] !== 0) {
  }
  {
    kent.push(numArray[i]);
  }
}

console.log(zuyg);
console.log(kent);
