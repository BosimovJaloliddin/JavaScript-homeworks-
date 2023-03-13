// 1. ===============================
// check(str1,str2) nomli funksiya yozilsin. Berilgan parametrlar bir-biriga
// mos yoki umuman to'g'ri kelmasligni va qisman to'g'ri ekanligni ifodalovchi
//natija qaytarsin

// const check = (str1, str2) => {
//   if (str1.indexOf(str2) == 0 && str1.length == str2.length) {
//     return "Bir-birga mos";
//   } else if (str1.indexOf(str2) >= 0) {
//     return "Qisman mos";
//   } else return "Umuman mos emas";
// };

// console.log(check("webbrain", "web"));

// ex: str1="webbrain academy" , str2="web"

// 2. ===============================
// getCount(str)-function yozilsin. function str dagi harflar sanog'ini
// chiqarib bering.

// const getCount = function (str) {
//   let getRes = {};

//   for (i in str) {
//     getRes[str[i]] = 0;
//   }
//   for (let j in getRes) {
//     for (let n in str) {
//       if (j == str[n]) {
//         getRes[j]++;
//       }
//     }
//   }
//   return getRes;
// };
// console.log(getCount("webbrain"));

// console.log(getRes);

// ex: str="webbrain" {w:1,e:1,b:2,r:1,i:1,n:1}

// 3. ==============================
// truncate(str,n)-function yozilsin.Berilgan stringdan n ta harf
// ajratib berilsin.

// const truncate = (str, n) => {
//   let getRes = str.slice(0, Math.trunc(n));
//   return getRes;
// };

// console.log(truncate("webbrain academy", 5));

// ex: str="webbrain academy" , n=5
// output: webbr

// 4.==============================
//getCurrency(str)-function tuzilsin.Berilgan pul birligni faqat
// raqamlarini ajratib chiqarib bersin.

// const getCurrency = (str) => {
//   let res = "";
//   for (let i in str) {
//     if (!isNaN(Number(str[i]))) {
//       res += str.slice(+i, +i + 1);
//     }
//   }
//   return res;
// };

// console.log(getCurrency("$1200"));

// ex: $1200=>1200

// 5. ==========================
// berilgan stringni ichida raqam string va characterlarni alohida
// sonini chiqaring

// const getCharacter = (str) => {
//   let alfabit1 = "AEIOUYBCDFGHJKLMNPQRSTVWXYZ";
//   let alfabit2 = alfabit1.toLowerCase();
//   let res = {
//     letters: 0,
//     chars: 0,
//     numbers: 0,
//   };
//   for (char of str) {
//     if (!isNaN(Number(char))) {
//       res.numbers++;
//     } else if (alfabit1.includes(char) || alfabit2.includes(char)) {
//       res.letters++;
//     } else {
//       res.chars++;
//     }
//   }
//   return res;
// };

// console.log(getCharacter("webbr@!in_2022"));

// ex: "webbr@!in_2022", res:{letter:6,char:3,numbers:4}

// 6. =================================
// capitilize(str)-function yozilsin.Berilgan stringdagi barcha so'zlarni
//faqat bosh harfini katta harflarga o'zgartirib chiqish kerak.

// const capitilize = function (str) {
//   let res = "";
//   for (let i in str) {
//     if (i == 0) {
//       res += str[0].toUpperCase();
//     } else if (str[+i - 1] == " ") {
//       res += str[i].toUpperCase();
//     } else res += str[i];
//   }
//   return res;
// };

// console.log(capitilize("webbrain academy "));

// ex:"webbrain academy", output:"Webbrain Academy"
