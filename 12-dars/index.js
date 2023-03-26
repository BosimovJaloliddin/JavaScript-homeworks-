// ===========1-masala=============
//Berilgan Stringda nechta katta harf va nechta kichik harf mavjud

// let str = "Webbrain Academy";
// const getAlp = (str) => {
//   let upperAlp = 0;
//   let lowerAlp = 0;
//   Array.from(str, (v) => {
//     if (v.toUpperCase() == v && v != " ") {
//       upperAlp++;
//     } else if (v != " ") {
//       lowerAlp++;
//     }
//   });
//   return `${upperAlp}ta katta harf, ${lowerAlp}ta kichik harf`;
// };
// console.log(getAlp(str));

// ex:"Webbrain Academy", output: 2ta katta harf, 13 ta kichik harf

// =============2-masala==============
// Berilgan stringdagi @ ni a harfiga o'zgartiring
// replaceAll va /g dan foydalanilmasin

// let str = "Webbr@in Ac@demy";
// const updateStr = (str) => {
//   let res = "";
//   Array.from(str, (v) => {
//     v == "@" ? (res += v = "a") : (res += v);
//   });
//   return res;
// };
// console.log(updateStr(str));

// ex:"Webbr@in Ac@demy" , output:"Webbrain Academy"

// ============3-masala================
// Duplicate bo'lgan harflarni o'chiring

// let str = "webbbraiiin accaddemmy";
// const delDup = function (str) {
//   let res = "";
//   Array.from(str, (v) => {
//     if (res[res.length - 1] !== v) {
//       res += v;
//     }
//   });
//   return res;
// };
// console.log(delDup(str));

// ex:"webbbraiiin accaddemmy", output:"webrain academy"

// =============4-masala==========
// String ichidagi raqamlarni toping

// let str = "We66ra1n Acad4my";
// const getNum = (str) => {
//   let res = "";
//   Array.from(str, (v) => {
//     if (isFinite(v) && v !== " ") {
//       res += v;
//     }
//   });
//   return res;
// };
// console.log(getNum(str));

// ex:"We66ra1n Acad4my", output:"664"

// ============5-masala============
// String berilgan stringni har bir belgisini 2 marta takrorlab
// qiymatini qaytaring

// let str = "webbrain";
// function addDub(str) {
//   let res = "";
//   Array.from(str, (v) => {
//     res += v + v;
//   });
//   return res;
// }
// console.log(addDub(str));

// ex:"webbrain", output:"wweebbbbrraaiinn"

// ==============6-masala============
// Berilgan so'zni palindrom yoki palindrom emasligini tekshiring

// const getPal = (str) => {
//   let arRev = str.split("").reverse().join("");
//   return str == arRev ? `Bu so'z palindrom` : `Bu so'z palindrom emas`;
// };
// console.log(getPal("non"));

// ex:non=>pal, ikki=>pal, oq=>noPal

// ==============7-masala==============
//Berilgan stringdagi harflar soni bir-birga teng yoki
// teng emaslihini aniqalng.Tartibi muhim emas.

// const twoString = (str1, str2) => {
//   let resStr1 = str1
//     .split("")
//     .sort((a, b) => a.localeCompare(b))
//     .join("");
//   let resStr2 = str2
//     .split("")
//     .sort((a, b) => a.localeCompare(b))
//     .join("");

//   return resStr1 === resStr2
//     ? `Bir-biriga mos so'zlar`
//     : `Bir-biriga mos bo'lmagan so'zlar`;
// };

// console.log(twoString("web", "ebw"));
// ex:str1="web" str2="ebw" , output:teng

// =============8-masala=============
// Stringda qatnashga belgilar sanog'ini toping

// const getAlp = (str) => {
//   let res = {};
//   Array.from(str, (v) => {
//     res[v] ? res[v]++ : (res[v] = 1);
//   });
//   return res;
// };
// console.log(getAlp("webb"));

// ex:"webb", output:{w:1,e:1,b:2}

// ============9-masala===============
// Stringni ziplang

// let str = "webbraaiiin";
// const zipping = (str) => {
//   let obj = {};
//   let res = "";
//   Array.from(str, (v) => {
//     obj[v] ? obj[v]++ : (obj[v] = 1);
//   });
//   for (i in obj) {
//     if (obj[i] == 1) {
//       res += i;
//     } else {
//       res += `${i}${obj[i]}`;
//     }
//   }
//   return res;
// };
// console.log(zipping(str));

// ex:"webbraaiiin", output:"web2ra2i3n"

// ============10-masala===============
// Object keylarini toping

// let obj = {
//   title: "webbrain",
//   age: 2,
// };
// for (i in obj) {
//   console.log(i);
// }

// output:title,
//        age

// ================11-masala=============
// Object ichidagi agelar yig'indisini toping

// let obj = {
//   title: "webbrain",
//   age: 2,
//   chiled: {
//     age: 4,
//     name: "webbrain",
//     chiled: {
//       age: 3,
//     },
//   },
// };

// let sum = 0;
// while (obj) {
//   sum += obj.age;
//   obj = obj.chiled;
// }
// console.log(sum);

//output:9

// ===========12-masala=============
// Object valuelarining boolean tipidagi
// ma'lumotlarini qaytaring keylari bilan

// let obj = {
//   id: 1,
//   name: "webbrain",
//   offline: true,
//   online: true,
//   indevidual: false,
// };

// for (let i in obj) {
//   if (typeof obj[i] === "boolean") {
//     console.log(`${i}:${obj[i]}`);
//   }
// }

// =============13-masala===========
// remove dublicates
// let ar = [1, 2, 4, 5, 5, 5, 6, 5, 3, 3, 3, 4, 5, 6, 7, 8, 9, 9];

// const removDub = (ar) => {
//   res = [];
//   let sort = ar.sort((a, b) => a - b);
//   sort.forEach((e) => {
//     if (res[res.length - 1] !== e) {
//       res.push(e);
//     }
//   });
//   return res;
// };
// console.log(res);

// ==============14-masala=============
// Arraylarni bir-biriga taqqoslang
// let ar1 = [1, 2, 3];
// let ar2 = [1, 2, 3];
// ar1.join("") === ar2.join("") ? console.log(true) : console.log(false);

// ==============15-masala===============
// Arrayni ichidagi ikki xonali sonlarni chiqaring

// let ar = [1, 64, 8, 27, 64, 13, 125];

// const getNum = (ar) => {
//   let res = [];
//   ar.forEach((e) => {
//     if (e.toString().length === 2) {
//       res.push(e);
//     }
//   });
//   return res;
// };
// console.log(getNum(ar));

// =============16-masala===============
// [2,3,2,4,5,2,3]
// [2,3,2,1,2,3]
// [2,2,1,2]
// [1,2]
// [1]
// output:[1]

// let ar = [1, 2, 4, 5, 6, 7];

// const delElememts = (ar) => {
//   let arSort = ar.sort((a, b) => a - b);
//   for (let i = arSort.length; arSort.length > 1; i--) {
//     let spl = eval(
//       arSort
//         .splice(arSort.length - 2)
//         .reverse()
//         .join("-")
//     );
//     if (spl > 0) {
//       arSort.push(spl);
//       arSort.sort((a, b) => a - b);
//     } else continue;
//   }
//   return arSort;
// };

// console.log(delElememts(ar));

// ============17-masala===========
// Misolni to'liq shartiga link. {https://t.me/webbrain_academy/53}
// Ikkita birni orasidagi eng uzun nollarni lengthni qaytaring

// let num = Math.trunc(Math.random() * 1000);

// const getManyZero = (num) => {
//   let ar = [];
//   let sum = 0;
//   let binnary = num.toString(2);
//   console.log(binnary);
//   Array.from(binnary, (v) => {
//     if (v == 0) {
//       sum++;
//     } else if (v == 1) {
//       ar.push(sum);
//       sum = 0;
//     }
//   });
//   ar.sort((a, b) => a - b);
//   return ar[ar.length - 1];
// };
// console.log(getManyZero(num));

// ex:10000100100000101 , output:5

// ===========18-masala===============
// Masalani sharti ushbu linkda to'liq berilgan=> https://pythontutor.com/

// let ar = [1, 2, 3, 4, 5, 6, 2];

// const getMiddleArfi = (ar, n) => {
//   let res = 0;
//   while (ar.length) {
//     ar.reduce((sum, curr, index) => {
//       let middleArfi = (sum + curr) / (index + 1);
//       if (middleArfi == n) {
//         res++;
//       }
//       return sum + curr;
//     }, 0);
//     ar.shift();
//   }
//   return res;
// };
// console.log(getMiddleArfi(ar, 4));
