// ================1-masala===============
// Array ichidagi sonlar yig'indisini toping.
// let ar = [431, 412, 654, 1, 435, 43, 76, 765, 65];
// const getSum = (ar) => {
//   let res = ar.reduce((sum, curr) => {
//     return (sum += curr);
//   }, 0);
//   return res;
// };
// console.log(getSum(ar));

// ==================2-masala================
// ["webrain", "academy"]-array ichidagi char sanog'ini toping

// let ar = ["webrain", "academy"];
// let str = ar.join("");
// const sortChats = (value) => {
//   let res = {};
//   for (i of value) {
//     res[i] ? res[i]++ : (res[i] = 1);
//   }
//   return res;
// };

// console.log(sortChats(str));

// ================3-masala=================
// arraylarni bir-biriga taqqoslang. Ichidagi malumot bir xil
// bo'lsa true aks holda false

// const moslik = (ar1, ar2) => {
//   ar1.map((v1) => {
//     ar2.map((v2) => {
//       console.log(v2, v1);
//       if(v1==v2){

//       }
//     });
//   });
// };

// console.log(moslik([9, 8, 7], [1, 2, 0]));

// ================4-masala==================
// Chiziqdan keyngi harfni kattaga o'zgartiring

// let str = "background-color";
// const delMinus = function (str) {
//   let res = "";
//   for (i in str) {
//     if (str[i] === "-") {
//       continue;
//     } else if (str[i - 1] == "-") {
//       res += str[i].toUpperCase();
//     } else res += str[i];
//   }
//   return res;
// };

// console.log(delMinus(str));

// ==========6-masala==============
let user = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 1, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 1, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 1, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 1, year: 2012, engine: 2, name: "Malibu" },
  { id: 1, year: 2000, engine: 1.2, name: "Damas" },
  { id: 1, year: 2018, engine: 2.4, name: "Tracer" },
];

// ==6.1-masala==
//2000-yildan oldingi mashinalar ro'yxatini chiqaring
// const oldCars = function (user) {
//   let res = user.filter((value) => value.year < 2000);
//   return res;
// };
// console.log(oldCars(user));

// ==6.2==
//2010-yildan keyngi mashinalar ro'yxatini chiqaring
// const keyingi = function (user) {
//   let res = user.filter((value) => value.year > 2010);
//   return res;
// };
// console.log(keyingi(user));

// ==6.3==
//2010-yildan oldingi mashinalar ro'yxatini chiqaring
// const oldingi = function (user) {
//   let res = user.filter((value) => value.year < 2010);
//   return res;
// };
// console.log(oldingi(user));

// ==6.4==
//engine kuchiga qarab ma'lumotlarni sartirovka qiling

// const enginSort = function () {
//   let res = user.sort((a, b) => a.engine - b.engine);
//   user = res;
// };
// enginSort();
// console.log(user);
