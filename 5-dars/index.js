// =================
// Rewrite the code changing the for loop to while
// without altering behavior (the output should stay same)
// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}`);
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// ==================
// Rewrite the function using "?" or "||"
// function chackAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     let res = "Did parents allow you?";
//     return res;
//   }
// }
// console.log(chackAge(10));

// function chackAge(age) {
//   18 < age ? confirm(true) : confirm("Did parents allow you?");
// }
// console.log(typeof chackAge(20));

// =======================
// Write a function min(a,b) which returns the least
// of two number a and b

// function getMin(a, b) {
//   if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }

//===================
// Write a function pow(x,n) that returns x in power n.
// Or , in other words, multiplies x by itself n times and returns the result

// function getPow(x, n) {
//   let res = 1;
//   for (let i = 1; i <= n; i++) {
//     res *= x;
//   }
//   return res;
// }

// console.log(getPow(3, 4));

// ============================
// replace function expressions with arrow function
// in the code below

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   "Do you agree?",
//   () => {
//     alert("You agreed?");
//   },
//   () => {
//     alert("You agreed cnjwc?");
//   }
// );
