// function getData() {
//   return fetch(`https://jsonplaceholder.typicode.com/photos`).then((res) =>
//     res.json()
//   );
// }

// const getCache = (func) => {
//   let map = new Map();
//   return function (x) {
//     if (map.has(x)) {
//       console.log(map.get(x));
//       return map.get(x);
//     } else {
//       let res = func();
//       return map.set(x, res);
//     }
//   };
// };

// getData = getCache(getData);

// =============in object

// let obj = {
//   name: "users",
// };
// function getData() {
//   return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then(
//     (res) => res.json()
//   );
// }

// const getCache = (func) => {
//   let map = new Map();
//   return function (x) {
//     if (map.has(x)) {
//       console.log(map.get(x));
//       return map.get(x);
//     } else {
//       let res = func.call(obj);
//       return map.set(x, res);
//     }
//   };
// };

// getData = getCache(getData);
