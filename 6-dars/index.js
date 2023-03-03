// ===============
// const user = {
//   name: "John",
//   surname: "Smith",
// };
// user.name = "Pete";

// delete user.name;

// ===============
// let schedule = {};

// const isEmpty = (schedule) => {
//   if (Object.keys(schedule).length == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isEmpty(schedule));

// ===============

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const sortSalary = (salaries) => {
//   let ar = [];
//   for (let i in salaries) {
//     ar.push(salaries[i]);
//   }
//   ar.sort();
//   let res = "";
//   for (let j = 0; j < ar.length; j++) {
//     for (let a in salaries) {
//       if (ar[j] == salaries[a]) {
//         res += `${a}:${salaries[a]}  `;
//       }
//     }
//   }
//   return res;
// };
// console.log(sortSalary(salaries));

// let sum = 0;
// for (let i in salaries) {
//   sum += salaries[i];
// }
// console.log(sum);

// ===============
// let meniu = {
//   width: 200,
//   height: 300,
//   title: "My meniu",
// };
// const multiplyNumeric = (meniu) => {
//   for (let i in meniu) {
//     if (typeof meniu[i] == "number") {
//       meniu[i] *= 2;
//     } else {
//       meniu[i];
//     }
//   }
// };
// multiplyNumeric(meniu);
