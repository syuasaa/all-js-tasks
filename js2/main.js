let byuje = 10000;
let himToms = 5000;
let mardik = 2;
let promoCode = "GEKO10";
let prCoTo = 10;

let anun = prompt("dzer anuny");
let tariq = +prompt("dzer tariqy");
let anun2 = prompt("dzer anuny");
let tariq2 = +prompt("dzer tariqy");

if (!anun || !anun2) {
  console.log("Sxal anun "); //ifi mej grem
}

if (!tariq || !tariq2 || tariq <= 0 || tariq2 <= 0) {
  console.log("Sxal tariq ");
}

let zexj1 = 0;
let zexj2 = 0;
let tarzexj1 = 0;
let tarzexj2 = 0;

let toms1 = himToms;
let toms2 = himToms;

if (anun && tariq) {
  if (anun && tariq < 7) {
    tarzexj1 = 50;
    zexj1 = (himToms * tarzexj1) / 100;
  } else if (tariq > 7 && tariq < 18) {
    tarzexj1 = 20;
    zexj1 = (himToms * tarzexj1) / 100;
  } else {
    tarzexj1 = 5;
    zexj1 = (himToms * tarzexj1) / 100;
  }
}

toms1 = himToms - zexj1;

if (anun2 && tariq2) {
  if (tariq2 < 7) {
    tarzexj2 = 50;
    zexj2 = (himToms * tarzexj2) / 100;
  } else if (tariq2 > 7 && tariq2 < 18) {
    tarzexj2 = 20;
    zexj2 = (himToms * tarzexj2) / 100;
  } else {
    tarzexj2 = 5;
    zexj2 = (himToms * tarzexj2) / 100;
  }
}

toms2 = himToms - zexj2;

////////////////////////////////////////////
let tomsSum = toms1 + toms2;
if (anun && anun2 && tariq && tariq2) {
  let hasPromo = confirm("uneq promo code?");
  if (hasPromo) {
    let test = prompt("aseq promo code");
    test === promoCode
      ? (tomsSum -= (tomsSum * prCoTo) / 100)
      : alert("chuneq promocod");
  }
}
console.log(`yndhanur kazmec ${tomsSum}`);

if (byuje - tomsSum >= 0) {
  console.log("dzwe gumary heriqum e");
  console.log(`anun : ${anun}
tariq: ${tariq}
himnakan gin : ${himToms}
tariqayin zexj : ${tarzexj1}%
promokod : ${promoCode}
promokodi zexj : ${prCoTo}%
verjnakan gin : ${toms1}
`);
  console.log(`anun : ${anun2}
tariq: ${tariq2}
himnakan gin : ${himToms}
tariqayin zexj : ${tarzexj2}%
promokod : ${promoCode}
promokodi zexj : ${prCoTo}%
verjnakan gin : ${toms2}
`);
  console.log(`skzbnakan byuje : ${byuje}
yndhanur vjarum : ${tomsSum}
mnacac gumar : ${byuje - tomsSum}`);
} else {
  console.log("chi heriqum gumary");
}

/////////////////////////////////////////
/////////////////////////////////////////
console.log(
  "//////////////////////////////////////////////////////////////////",
);

let temperature = 25;
let isRaining = false;
let exanak;
let xorhurd;

if (temperature < 0) {
  exanak = "shat curt e";
} else if (temperature === 0 && temperature <= 15) {
  exanak = "curt e";
} else if (temperature >= 16 && temperature <= 25) {
  exanak = "hajeli exanak e";
} else if (temperature >= 26 && temperature <= 35) {
  exanak = "taq e";
} else {
  exanak = "shat shoq e";
}

if (isRaining) {
  xorhurd = "andzrevanoc petq e ";
  isRaining = "ayo";
} else {
  xorhurd = "andzrevanoc petq che";
  isRaining = "voch";
}

console.log(`
jermastijany : ${temperature}C
exnak  : ${exanak}
andzrev : ${isRaining}
xorhurd : ${xorhurd}`);
