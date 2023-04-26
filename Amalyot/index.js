// let num = 10;
// while (1) {
//   console.log(num);
//   num--;
// }

// function decloration
// nameFunction();
// function nameFunction() {
//   console.log("Ali");
// }

//  function expression
// const nameFunction = function () {
//   console.log("Ali");
// };
// nameFunction();

// arrow function
// const nameFunction = (name) => {
//   console.log(`Name: ${name}`);
//   console.log(`surname: ${surname}`);
// };
// nameFunction("Ali");

// function with return
// const nameFunction = (a, b) => {
//   let sum = a + b;
//   //   return sum;
// };

// console.log(nameFunction(4, 5));

// let obj1 = new Object();

// let key = "name";

// let obj = {
//   [key]: "Ali", //"name":"Ali"
// };

// console.log(obj[key]); //obj["name"]
// let name = Symbol(1);
// let obj = {
//   [name]: "Ali",
// };

// console.log(obj[name]);

// console.log(+num.toFixed());
// console.log(Number.parseInt(num));
// console.log(Number.parseFloat(num));

// console.log(eval(num));

// console.log(+num.toString(2));

// console.log(isNaN("100"));
// let num = 30;

// console.log(Object.is("web", "webb"));

// let num1 = 1.3283;
// let num2 = 0.30283;
// let num3 = 0.0283;
// let num4 = 0.0003231;

// console.log(num1.toPrecision(3));
// console.log(num4.toPrecision(3));

// console.log(Math.max(1, 3, 4, 5, 5));
// console.log(Math.sign(27));
// console.log(Math.sign("27"));
// console.log(Math.sign(-27));
// console.log(Math.sign("-27"));
// console.log(Math.sign(0));
// console.log(Math.sign(-0));

// console.log(parseInt(2.9));
// console.log(parseFloat(2.5));

// ||,  &&,
// Nullish ?? =>undefined, null

// let num = 100;

// switch (num) {
//   case 10:
//     console.log(`O'n`);
//     break;
//   case 12:
//     console.log(`o'n ikki`);
//     break;
//   case 40:
//     console.log(`qirq`);
//     break;
//   default:
//     console.log(`Istalgan son`);
// }

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

// if ((a = a + b) && (b = a - b) && (a = a - b)) {
//   console.log(a, b);
// }

// console.log(a, b);
// console.log(parseInt("31d"));

// Array

// let ar2 = new Array(10, 19);
// let ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(ar1.includes(0));

// console.log(ar1, ar2)

// Array-2
// .sort(callback)
// "", 0, false, undefined, null, NaN
// let ar1 = ["nok", "olma", "limon", "a"];
// let ar = [1, [2, [3, [4, [5, [6]]], 7], 8], 9];

// console.log(ar.flatMap((value) => 1));

// console.log(Array.from("webbrain", (value) => value.toUpperCase()));

// ar.copyWithin(k, n, m);
// console.log(ar);

// ar.fill("Jalol", 1, 3);
// console.log(ar);

// console.log(ar.map((value, index) => value));

// let res = ar.reduce((sum, curr) => {
//   console.log(`${sum}+${curr}`);
//   return (sum += curr);
// }, 0);
// console.log(res);

// console.log(ar.some((value) => value === 2));

// let res = ar.findLastIndex((value, index) => {
//   return value == 0;
// });
// console.log(res);

// let res = ar.filter((value, index) => {
//   //   console.log(value, index);
//   return value === 31;
// });
// console.log(res);

// console.log(
//   ar1.sort((a, b) => {
//     return b.localeCompare(a);
//   })
// );

// l
// const read = () => {
//   list.innerHTML = null;
//   users.forEach((value) => {
//     let div = document.createElement("div");
//     div.innerHTML = `Id:${value.id} , nomi:${value.name} , yili:${value.year} , mator kuchi:${value.engine}`;
//     list.append(div);
//   });
// };

// const sort = () => {
//   list.innerHTML = null;
//   users = users.sort((a, b) => a.name.localeCompare(b.name));
//   read();
// };
// const sortByEngine = () => {
//   list.innerHTML = null;
//   users = users.sort((a, b) => b.engine - a.engine);
//   read();
// };
// const sortByEn = () => {
//   list.innerHTML = null;
//   users = users.filter((value) => value.name.toLowerCase().includes("t"));
//   read();
// };

// const creat = () => {
//   list.innerHTML = null;
//   users = [...users, { year: 2000, name: "Nexia", engine: 2 }];
//   read();
// };
// const del = (id) => {
//   list.innerHTML = null;
//   users = users.filter((value) => value.id !== id);
//   read();
// };
// const update = (id) => {
//   list.innerHTML = null;
//   users = users.map((value) => {
//     if (id === value.id) {
//       return { ...value, name: title.value };
//     } else return value;
//   });
//   read();
// }
// let obj1 = {
//   name: "Ali",
//   age: 20,
// };
// let obj2 = {
//   name: "Demo",
//   age: 20,
// };
// let obj3 = {
//   name: "Vali",
//   age: 20,
// };
// function getInfo(bir, ikki, uch) {
//   console.log(this.name, this.age, bir, ikki, uch);
// }
// getInfo.bind(obj1, 1, 2, 3)();

// let webbrain = {
//   frontend: [
//     { name: "John", salary: 2500 },
//     { name: "tom", salary: 2500 },
//   ],
//   mobile: {
//     android: [
//       { name: "tom", salary: 2500 },
//       { name: "tom", salary: 2500 },
//     ],
//     ios: [
//       { name: "tom", salary: 2000 },
//       { name: "tom", salary: 2000 },
//     ],
//   },
// };

// let res = 0;

// const getSal = (sal) => {
//   Object.values(sal).forEach((v) => {
//     if (Array.isArray(v)) {
//       let sum = v.reduce((pre, cur) => pre + cur.salary, 0);
//       res += sum;
//       // v.filter((v) => (res += v.salary));
//     } else {
//       getSal(v);
//     }
//   });
// };
// getSal(webbrain);
// console.log(res);

// let ar = [
//   { id: 1, name: "Ali", title: "ceo" },
//   { id: 2, name: "Vali", title: "teo" },
//   { id: 3, name: "Nodir", title: "ceo" },
//   { id: 4, name: "Eshmatjon", title: "teo" },
//   { id: 5, name: "Toshmatjon", title: "ceo" },
//   { id: 5, name: "Toshmatjon", title: "peo" },
//   { id: 5, name: "Toshmatjon", title: "cheo" },
//   { id: 5, name: "Toshmatjon", title: "peo" },
//   { id: 5, name: "Toshmatjon", title: "peo" },
// ];

// let res = {};

// const sortTitle = (arr) => {
//   ar.forEach((v) => {
//     if (res[v.title]) {
//       res[v.title].push(v);
//     } else {
//       res[v.title] = [v];
//     }
//   });
// };

// sortTitle(ar);
// console.log(res);

// let obj = {
//   name: "Ali",
//   age: 23,
// };

// console.log(Object.getOwnPropertyDescriptor(obj));

// class User {
//   name = "Ali";
//   set welcom(value) {
//     console.log(value);
//     this.name = value;
//   }
//   get welcom() {
//     console.log(this);
//   }
// }

// let user = new User();
// user.welcom = "hi";
// user.welcom;

// class Users {
//   getInfo() {
//     console.log("no name");
//   }
// }
// let obj = {
//   getName() {
//     console.log("no info");
//   },
// };

// Object.assign(Users.prototype, obj);

// let inf = new Users();
// inf.getName();

// try {
//   throw new SyntaxError("hi");
// } catch (err) {
//   console.log(err.stack);
// }

// const test = (lg, pw) => {
//   return setTimeout(() => {
//     return `hi`;
//   }, 1000);
// };

// let usr = test();
// console.log(usr);

// let user = new Promise((resolve, reject) => {
//   if (0) {
//     resolve(`welcom`);
//   } else {
//     reject(`error gays`);
//   }
// });

// user.then((res) => console.log(res)).catch((err) => console.log(err));

// let user = Promise.all([
//   new Promise((resolve, reject) => {
//     if (1) {
//       resolve(`welcom`);
//     } else {
//       reject(`error gays`);
//     }
//   }),
//   new Promise((resolve, reject) => {
//     if (1) {
//       resolve(`welcom`);
//     } else {
//       reject(`error gays`);
//     }
//   }),
//   new Promise((resolve, reject) => {
//     if (0) {
//       resolve(`welcom`);
//     } else {
//       reject(`error gays`);
//     }
//   }),
//   new Promise((resolve, reject) => {
//     if (0) {
//       resolve(`welcom`);
//     } else {
//       reject(`error`);
//     }
//   }),
// ]);
// user.then((res) => console.log(res)).catch((er) => console.log(er));

// const get = function async() {};

// function* test() {
//   yield 1;
//   yield 2;
// }

// let generator = test();
// console.log(generator);

// function* getId() {
//   let id = users.length;
//   while (1) {
//     yield ++id;
//   }
// }

// let generator=getId()

// let users = [
//   { id: 1, name: "Hi1" },
//   { id: 2, name: "Hi2" },
//   { id: 3, name: "Hi3" },
//   { id: 4, name: "Hi4" },
//   { id: 5, name: "Hi5" },
//   { id: 6, name: "Hi6" },
// ];

// const onDalete = (id) => {
//   let res = users.filter((v) => v.id !== id);
//   users = res;
// };

// const add = (usr) => {
//   users = [...users, { id: generator.next().value, name: usr }];
// };

// add("hellow1");
// onDalete(3);
// add("hellow2");
// add("hellow3");
// add("hellow4");
// add("hellow5");

// console.log(users);

// function* test() {
//   let count = 0;
//   while (1) {
//     yield ++count;
//     if (count === 10) {
//       return;
//     }
//   }
// }
// for (vl of test()) {
//   console.log(vl);
// }

// function* test(para) {
//   for (v of para) {
//     console.log(v);
//     yield v;
//   }
// }
// let gr = test([1, 2, 3, 4]);
// console.log(gr.next());

// function* test() {
//   let gn = yield 1;
//   console.log(gn);
// }
// let generator = test();

// console.log(generator.next(3));
// console.log(generator.next(3));

// export let users = [
//   { id: 1, name: "Ali" },
//   { id: 1, name: "Ali" },
//   { id: 1, name: "Ali" },
//   { id: 1, name: "Ali" },
//   { id: 1, name: "Ali" },
//   { id: 1, name: "Ali" },
//   { id: 1, name: "Ali" },
//   { id: 1, name: "Ali" },
//   { id: 1, name: "Ali" },
//   { id: 1, name: "Ali" },
//   { id: 1, name: "Ali" },
//   { id: 1, name: "Ali" },
// ];
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
// name = "ali";
// let sum = 0;
// const test = (pr) => {
//   sum += pr;
//   if (pr === 0) {
//     return 1;
//   } else {
//     return test(pr - 1);
//   }
// };
// console.log(test(10));
// console.log(sum);

// let user = {
//   name: "Ahmad",
//   pw: 1234,
//   _noInfo: "secrot",
// };

// let proxy = new Proxy(user, {
//   get(target, p) {
//     if (p.startsWith("_")) {
//       return `no exsesbal`;
//     }
//     return target[p];
//   },

//   set(target, p, value) {
//     if (p === "pw") {
//       return `good by gays`;
//     }
//     target[p] = value;
//   },
// });
// proxy.name = 234;

// console.log(proxy);
// name = "Ali";
// function test() {
//   console.log(this.name);
// }
// let data = test;
// console.log(data());

// console.log("start");
// let user = new Promise((resolve, reject) => {
//   if (0) {
//     resolve(`Hi my bro`);
//   } else {
//     reject(`no no`);
//   }
// });

// user
//   .then((res) => console.log(res))
//   .catch((er) => console.log(er))
//   .finally(() => console.log("finish"));

// ====================================
// let ul = document.getElementsByTagName("ul")[0];

// console.log(ul.lastChild.previousElementSibling);
// let id = document.querySelector("#bir");
// console.log(id);
// 2;
// console.log(d.innerText);
// console.log(d.outerHTML);

// const d = document.getElementById("d");
// let one = document.createElement("div");
// d.insertAdjacentHTML("beforebegin", "<h1>hi</h1>");

// function cor(e) {
//   console.log(e);
// }

// let body = document.querySelector("body");
// let div = document.createElement("div");

// for (let i = 0; i < 10; i++) {
//   let box = document.createElement("div");
//   box.setAttribute("id", `item${i}`);

//   div.append(box);
// }
// body.append(div);

// let hi = document.querySelector("#item1");
// console.log(hi);

// ===========================
// let obj = {
//   x: 23,
//   y: 2,
//   z: 21,
// };
// const calc = (s, obj) => {
//   let res = 0;
//   for (let i in obj) {
//     if (i === 0) {
//       res = s - obj[i];
//     } else if (res > s - obj[i]) res = s - obj[i];
//   }
//   return res;
// };
// calc(12, obj);
