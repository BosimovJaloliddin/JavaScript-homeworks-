// 1
// if ("0") {
//   console.log("hellow"); //hello
// }

// ==========

// 2
// let nameJS = "ECMAScript";
// if (nameJS == "ECMAScript") {
//   console.log("Right");
// } else {
//   console.log("Your don't know");
// }

// nameJS == "ECMAScript" ? console.log("Right") : console.log("Your don't know");

// =========
// 3

// let num = 0;
// if (num > 0) {
//   console.log(1);
// } else if (num < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

// ===========

// 4
// let result;
// a + b < 4 ? (result = "Below") : (result = "Over");

// // =============
// // 5
// let message;
// logen == "Empolliye"
//   ? (message = "Hellow")
//   : logen == "Director"
//   ? (message = "Greetings")
//   : (logen = "" ? (message = "No logen") : (message = ""));

// ================
// Karra jadvalini chiqarish

// for (let i = 2; i <= 10; i++) {
//   console.log(`${i}lik karra jadvali`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i}x${j}=${i * j}`);
//   }
// }

// ===============
// Toq va juft sonlar
// for (let i = 1; i < 20; i++) {
//   i % 2 == 0 ? console.log(`${i} juft son`) : console.log(`${i} toq son`);
// }

// ===============
//Tub sonlarni chiqarish
// for (let i = 1; i <= 10; i++) {
//   let str = 0;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       str = 1;
//     }
//   }
//   if (i > 1 && str == 0) {
//     console.log(i);
//   }
// }
