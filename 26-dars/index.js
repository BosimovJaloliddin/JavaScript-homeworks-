// Error handling
// let name = "noj";
// try {
//   //   console.log(name);
//   throw new Error("hi my bro");
// } catch (err) {
//   console.log(err.name);
// }

// =======================
// callback
// console.log("start");
// function test(callback) {
//   setTimeout(() => {
//     return callback("Hi");
//   }, 1000);
// }
// const callback = (user) => {
//   console.log(user);
//   console.log("finish");
// };

// test(callback);

// =========================
// Promise
// let pw = 1000;
// console.log("start");

// let user = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (pw === 100) {
//       resolve(`Hi gays`);
//     } else reject(`Good by`);
//   }, 3000);
// });
// user
//   .then((res) => console.log(res))
//   .catch((er) => console.log(er))
//   .finally(() => console.log("finish"));

// Promise All
// let pw = 100;
// console.log("start");

// let user = Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (pw === 100) {
//         resolve(`Hi gays`);
//       } else reject(`Good by1`);
//     }, 3000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (pw === 100) {
//         resolve(`Hi gays`);
//       } else reject(`Good by2`);
//     }, 3000);
//   }),
// ]);
// user
//   .then((res) => console.log(res))
//   .catch((er) => console.log(er))
//   .finally(() => console.log("finish"));

// ==========================
// Async await
// async function name() {}
// const test = async function () {};
// const test2 = async () => {};
// let pw = 100;
// console.log("start");
// let user = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (pw === 100) {
//       resolve(`Hi gays`);
//     } else reject(`Good by`);
//   }, 3000);
// });

// async function test() {
//   let res = await user;
//   console.log(res);
// }
// test();
// console.log("finish");
