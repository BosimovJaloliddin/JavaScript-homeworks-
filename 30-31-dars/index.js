// Proxy
// let obj = { title: "it", age: 90, pw: 12345 };
// let proxy = new Proxy(obj, {
//   set(target, props, value) {
//     if (props === "pw") {
//       return false;
//     } else {
//       target[props] = value;
//       return true;
//     }
//   },
// });
// proxy.age = 21;
// console.log(proxy);

// ==========
// let obj = { title: "it", age: 90, pw: 12345 };
// let proxy = new Proxy(obj, {
//   ownKeys(target) {
//     return Object.keys(target).filter((v) => v !== "pw");
//   },
// });

// for (i in proxy) {
//   console.log(i);
// }

// ==============
// let obj = { title: "it", age: 90, pw: 12345 };
// let proxy = new Proxy(obj, {
//   has(target, p) {
//     return (target[p] = p);
//   },
// });

// console.log(900 in proxy);
