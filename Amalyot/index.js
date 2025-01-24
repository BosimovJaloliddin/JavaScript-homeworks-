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
// ==========================

// document.addEventListener("DOMContentLoaded", () => {
//   text.textContent = "hi";
// });

// window.onload = () => {
//   text.textContent = "hi";
// };
// text.textContent = "hi";

// window.onbeforeunload = () => true;

// let observer = new MutationObserver(() => {
//   console.log("hi");
// });
// let parent = document.querySelector("#parent");

// observer.observe(parent, {
//   childList: true,
//   charecterData: true,
//   subtree: true,
// });
// clicking.onclick = () => {
//   parent.classList.add("title");
// };

// ==============================
// const getLocation = () => {
//   console.log(window.location);
// };

// ===========================
// console.log(JSON.parse(`{name:"Ali"}`));
// try {
//   throw new Error(number);
// } catch (err) {
//   console.log(err);
// }
// console.log(number);

// let dataBaza = {
//   name: "Ali",
//   password: "778899",
// };

// console.log("start");
// const test = (name, callb) => {
//   setTimeout(() => {
//     if (dataBaza.name === name) {
//       return callb(`${dataBaza.password}`);
//     } else return callb("xatolik");
//   }, 1000);
// };
// const callb = (user) => {
//   console.log(user);
//   console.log("finish");
// };
// test("Ali", callb);

// let dataBaza = {
//   name: "Ali",
//   password: 778899,
// };

// console.log("start");

// let test = new Promise((resolve, reject) => {
//   if (dataBaza.password === 0) {
//     resolve(`${dataBaza.name}`);
//   } else reject(`Xatolik`);
// });
// test
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finished"));

// let all = Promise.all([
//   new Promise((resolve, reject) => {
//     if (1) {
//       resolve(`hi`);
//     } else reject(`Error1`);
//   }),
//   new Promise((resolve, reject) => {
//     if (0) {
//       resolve(`hi hey`);
//     } else reject(`Error2`);
//   }),
// ]);

// all.then((res) => console.log(res)).catch((err) => console.log(err));

// async function test() {}
// const get1 = async () => {};
// const get2 = async function () {};

// console.log("start");
// let test = new Promise((resolve, reject) => {
//   if (1) {
//     resolve(`Okey`);
//   } else reject(`Xatolik`);
// });
// async function get() {
//   let res = await test;
//   console.log(res);
//   console.log("finish");
// }

// get();

// ============================
// function* test() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }
// let generator = test();
// for (let vl of generator) {
//   console.log(vl);
// }

// function* test() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }
// let generator = test();
// console.log([...generator]);

// function* getId() {
//   let id = data.length;
//   while (1) {
//     yield ++id;
//   }
// }

// let generator = getId();

// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Ali" },
// ];

// // let id = data.length + 1;

// const delInfo = (id) => {
//   data = data.filter((v) => v.id !== id);
// };
// const addInfo = (name) => {
//   data = [...data, { id: generator.next().value, name: name }];
// };

// addInfo("Nodir");
// addInfo("Nodir");
// addInfo("Nodir");
// addInfo("Nodir");
// addInfo("Nodir");
// delInfo(4);
// addInfo("Nodir");
// addInfo("Munira");
// delInfo(5);
// addInfo("Adolat");

// console.log(data);

// function* test() {
//   let count = 0;
//   while (1) {
//     yield ++count;
//     if (count === 3) {
//       return count;
//     }
//   }
// }

// let generator = test();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// function* test(para) {
//   for (let v of para) {
//     console.log(v);
//     yield v;
//   }
// }
// let generator = test([1, 2, 3]);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// function* test() {
//   let i = 0;
//   while (1) {
//     let gn = yield ++i;
//     if (gn) i += gn;
//   }
// }

// let gn = test();
// console.log(gn.next());
// console.log(gn.next(3));
// console.log(gn.next(5));

// ===========================
// const operations = (type) => {
//   return (a) => (b) => (c) => {
//     switch (type) {
//       case "add":
//         return a + b + c;
//         break;
//       case "minus":
//         return a - b - c;
//         break;
//       case "multiply":
//         return a * b * c;
//         break;
//     }
//   };
// };

// let math = operations("multiply");
// console.log(math(3)(4)(5));

// ===============================
// console.log("h".charCodeAt());
// console.log("i".charCodeAt());

// let buffer = new ArrayBuffer(2);
// let view = new DataView(buffer);
// view.setInt8(0, 104);
// view.setInt8(1, 105);
// console.log(String.fromCharCode(view.getInt8(0)));
// console.log(String.fromCharCode(view.getInt8(1)));

// let buffer = new ArrayBuffer();
// let uint = new Uint8Array([104, 105]);
// let decoder = new TextDecoder();
// let encoder = new TextEncoder();
// console.log(decoder.decode(uint));
// console.log(encoder.encode("hi"));

// let blob = new Blob(["hellow"], { type: "text/hi" });

// btn.onclick = () => {
//   fetch(
//     "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
//   )
//     .then((res) => res.blob())
//     .then((res) => {
//       let url = URL.createObjectURL(res);
//       img.src = url;
//       console.log(res);
//     });

//   let a = document.createElement("a");
//   let url = URL.createObjectURL(blob);
//   console.log(url);
//   a.href = url;
//   a.download = "text";
//   document.body.append(a);
//   a.click();
// };

// const getFile = (e) => {
//   console.log(e.target.files[0]);
//   let url = URL.createObjectURL(e.target.files[0]);
//   img.src = url;
// };

// =============================================
//𝑠𝑖𝑛(𝑥2+2)∙𝑒−𝑥2  oraliq=[0,1] n=10

// let i = 0.01;
// let n = 10;

// let arr = [];
// for (let i = 0; i <= 1; i += 0.1) {
//   let integral = Math.sin(i ** 2 + 2) * Math.E ** ((-i) ** 2);
//   arr.push(+Number(integral).toFixed(3));
// }
// let res = 0;
// arr.forEach((v, i) => {
//   if (i % 2 == 0 && 0 < i < arr.length - 1) {
//     res += 2 * v;
//   } else if (i % 2 === 1 && 0 < i < arr.length - 1) {
//     res += 4 * v;
//   } else res += v;
// });

// console.log(+Number(res).toFixed(4));
// ==============================
// let map = new Set([1, 2, 4, 3, 2, 1]);
// console.log(map);
// ===========================

// let obj = {
//   name: "users",
//   getData() {
//     return fetch(
//       `https://jsonplaceholder.typicode.com/todos/${this.name}`
//     ).then((res) => res.json());
//   },
// };

// const cache = (func) => {
//   let baza = new Map();
//   console.log(baza);
//   return (x) => {
//     if (baza.has(x)) {
//       console.log(baza.get(x));
//       return baza.get(x);
//     } else {
//       let res = func.call(this);
//       console.log(res);
//       return baza.set(x, res);
//     }
//   };
// };
// obj.getData = cache(obj.getData);

// ================================================
// let arr = [1, 1, 1, 1, 2, 3, 4, 5, 6];

// Array.prototype.mosiniOchir = function (prop) {
//   return this.filter((v) => v !== prop);
// };

// console.log(arr.mosiniOchir(1));
// ==============================================
// let obj1 = {
//   name: "Ali",
// };
// let obj2 = {
//   surname: "Aliyev",
// };

// obj1.__proto__ = obj2;
// console.log(obj1.surname);

// ====================================
// console.log(Object.getOwnPropertyDescriptors(obj));
// let obj = {
//   name: "Ali",
//   surname: "Aliyev",
//   age: 20,
// };

// Object.defineProperties(obj);
// for (let vl in obj) {
//   console.log(vl);
// }

// let obj = {
//   name: "Ali",
//   get getInfo() {
//     console.log(this.name);
//   },
// };

// obj.getInfo;

// let obj = {
//   name: "Ali",
//   get getInfo() {
//     console.log(this.name, this.surname);
//   },
//   set getInfo(par) {
//     (this.name = par.name), (this.surname = par.surname);
//   },
// };
// obj.getInfo = { name: "Nodir", surname: "Holidov" };
// obj.getInfo;

// ===============================================
// class User {}

// let user1 = new User();
// let user2 = new User();

// user1.name = "Ali";
// console.log(user1);
// console.log(user2);

// class User {
//   getInfo(par) {
//     console.log(`hellow ${par}`);
//   }
// }

// let user = new User();
// user.getInfo("Webbrain");
// user.getInfo("world");

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   age = 30;
//   getInfo() {
//     console.log(this.name, this.age);
//   }
// }

// let user = new User("Ali");
// user.getInfo();

// class User {
//   set getInfo(par) {
//     this.name = par.nam;
//     this.surname = par.surname;
//   }
//   get getInfo() {
//     console.log(`My name is ${this.name} , surname ${this.surname}`);
//   }
// }

// let user = new User();
// user.getInfo = { name: "Ali", surname: "Aliyev" };
// user.getInfo;

// class User {
//   ["web" + "brain"](par) {
//     console.log(par);
//   }
// }

// let user = new User();
// user.webbrain("hellow");

// class Speed {
//   speed(speed) {
//     console.log(speed);
//   }
// }

// class Car extends Speed {
//   name(name) {
//     console.log(name);
//   }
// }

// let car = new Car();
// car.speed(400);
// car.name("bmw");

// car.speed(480);
// car.name("ferrari");

// class CarsInfo {
//   constructor(name, speed) {
//     (this.name = name), (this.speed = speed);
//   }
//   info() {
//     console.log(`My car ${this.name} and speed ${this.speed}`);
//   }
// }

// class PushInfo extends CarsInfo {
//   constructor(name, speed) {
//     super(name, speed);
//   }
//   getInfo() {
//     console.log(this.info());
//   }
// }

// let pushInfo = new PushInfo("bmw", 400);
// pushInfo.getInfo();

// class Parent {
//   parent() {
//     console.log("hellow my bro");
//   }
// }

// class Child extends Parent {
//   child() {
//     console.log("child");
//   }
//   info() {
//     this.child();
//     super.parent();
//   }
// }

// let child = new Child();
// child.info();

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
//   info() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// class Child extends Parent {}

// let child = new Child("Jahongir");
// child.info();
// ======================================

// class User {
//   static year = 0;
//   getInfo() {
//     console.log(User.year);
//   }
// }

// let user = new User();
// user.getInfo();

// class User {
//   static year = 0;
//   getInfo() {
//     console.log(++User.year);
//   }
// }

// let user1 = new User();
// let user2 = new User();
// user1.getInfo();
// user1.getInfo();
// user1.getInfo();
// user2.getInfo();
// user2.getInfo();
// user2.getInfo();

// class User {
//   static year = 0;
//   static getInfo() {
//     console.log(++this.year);
//   }
// }

// User.getInfo();
// User.getInfo();

// class Protect {
//   _name = "webbrain";
//   #protect = "tegma kuyasan";
//   getProtect() {
//     console.log(this.#protect);
//   }
// }
// let pr = new Protect();
// console.log(pr);
// pr.getProtect();

// class Protect {
//   #protect = "tegma kuyasan";
//   get getProtect() {
//     console.log(this.#protect);
//   }
//   set getProtect(v) {
//     this.#protect = v;
//   }
// }
// let pr = new Protect();
// pr.getProtect = "Ana kuyding";
// pr.getProtect;

// class Ar extends Array {}

// let ar = new Ar();
// console.log(ar.length);

// class Ar extends Array {}
// class Obj extends Object {}
// class Str extends String {}
// let ar = new Ar();
// let obj = new Obj();
// let str = new Str();
// console.log(ar instanceof Array);
// console.log(obj instanceof Object);
// console.log(str instanceof String);

// class User {
//   getName() {
//     console.log("no name");
//   }
// }

// let obj = {
//   info() {
//     console.log("no info");
//   },
// };

// Object.assign(User.prototype, obj);
// let user = new User();
// user.info();
// =================================================
// let name = "Ali";
// let age = 30;
// let info = { name, age };
// console.log(info);
// (function () {
//   var a = (b = 5);
// })();

// console.log(b);

// var myList = ["abc", "xyz", "def"];
// var [, a] = myList;
// console.log(a);

// console.log(
//   { name: "Belac", group: "JavaScript" } !==
//     { name: "Belac", group: "JavaScript" }
// );

// ======================================================
// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Ali" },
// ];

// let id = data.length + 1;

// const delInfo = (id) => {
//   data = data.filter((v) => v.id !== id);
// };
// const addInfo = (name) => {
//   data = [...data, { id: data.length + 1, name: name }];
// };

// addInfo("Nodir");
// addInfo("Nodir");
// addInfo("Nodir");
// addInfo("Nodir");
// addInfo("Nodir");
// delInfo(4);
// addInfo("Nodir");
// addInfo("Munira");
// delInfo(5);
// addInfo("Adolat");

// console.log(data);
// =======================================
// let str = "webbrain academy";
// let alf = {
//   a: "",
//   b: "",
//   c: "",
//   d: "",
//   e: "",
//   f: "",
//   g: "",
//   h: "",
//   i: "",
//   j: "",
//   k: "",
//   l: "",
//   m: "",
//   n: "",
//   o: "",
//   p: "",
//   q: "",
//   r: "",
//   s: "",
//   t: "",
//   u: "",
//   v: "",
//   w: "",
//   x: "",
//   y: "",
//   z: "",
// };

// Array.from(str, (v) => {
//   if (alf[v] === "" || alf[v]) {
//     alf[v] += v;
//   }
// });
// let res = "";
// for (let vl in alf) {
//   if (alf[vl]) res += alf[vl];
// }
// console.log(res);
// =====
// let str = "webbrain academy";
// let alf = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// let res = "";

// alf.forEach((v) => {
//   for (let val of str) {
//     if (val.localeCompare(v) === 0) res += val;
//   }
// });
// console.log(res);
// ======================================================

// const getNums = (a, b) => {
//   let c = [];
//   for (let i = b; i <= a; i += 0.2) {
//     c.push(+Number(Math.log10(i) / Math.log10(Math.E ** 2) + i + 1).toFixed(3));
//   }
//   console.log(`Fuctionning [-1;1] oralig'idagi qiymatlari`);
//   c.forEach((v) => {
//     console.log(`result=>${v}`);
//   });
// };
// getNums(1, 1 / Math.E ** 2);

// =======================================
// const obj = Object.assign(
//   {
//     name: "JavaScript",
//   },
//   {
//     name: "ECMAScript",
//   },
//   {
//     name: "LiveScript",
//   }
// );
// const result = obj.name;
// console.log(result);
// ===========
// const items = [1, 2, 3, 4, 5];
// items.splice(1, 3);
// console.log(items);
// ===============================
// let str = "+998 99 123 4567";
// let res = str.split(" ");
// let obj = {
//   coun1: res[0],
//   coun2: res[1],
//   coun3: res[2],
//   coun4: res[3],
// };
// console.log(obj);
// ============================

// let reader = new FileReader();
// const setFile = (e) => {
//   let file = e.target.files[0];
//   reader.readAsText(file);
//   reader.onload = () => {
//     console.log(reader.result);
//   };
//   reader.error = (er) => {
//     console.log(er);
//   };
// };

// ===========================
// btn.onclick = () => {
//   let file = new File(["buffer"], "text.doc", { type: "text/plain" });
//   let a = document.createElement("a");
//   url = URL.createObjectURL(file);
//   a.href = url;
//   a.download = file.name;
//   document.body.append(a);
//   a.click();
// };
// ===========================
// let ar = [1, 2, 3, 4, 5];
// ========================
// let x = 10;
// function foo() {
//   console.log(x);
//   let x = 20;
// }
// foo();
// console.log(a);
// let a = 10;
// ============================
// console.log(10 ?? null);

// ==================================
// let respons = fetch("https://jsonplaceholder.typicode.com/users");
// respons.then((res) => res.json()).then((res) => console.log(res));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// const test = async () => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();
//   console.log(data);
// };

// const test = () => {
//   dataList.innerText = "Loading...";
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((res) => {
//       dataList.innerHTML = `<h1>All data</h1>`;
//       res.forEach((v) => {
//         let element = document.createElement("div");
//         element.innerHTML = `<b>${v?.id}</b> - <span>${v?.name}</span> <button onclick="onSelect(${v.id})">select</button>`;
//         dataList.append(element);
//       });
//       console.log(res);
//     });
// };

// async function onSelect(id) {
//   let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "aplication/json",
//       Authorization: `Bearer `,
//     },
//     body: JSON.stringify({
//       login: "word",
//       parol: "12345",
//     }),
//   });
//   let data = await res.json();
//   select.innerHTML = `<h1>Select</h1> <b>${data.phone}</b> - <span>${data.name}</span>`;
// }

// =================================================

// Proxy
// let user = {
//   name: "Jaloliddin",
//   _stir: 1234,
// };
// let proxy = new Proxy(user, {
//   get(target, p) {
//     return "Xatolik";
//   },
// });
// console.log(proxy.name);
// console.log(proxy._stir);

// let user = {
//   name: "Jaloliddin",
//   password: 12345,
// };
// let proxy = new Proxy(user, {
//   set(target, prop, value) {
//     if (prop === "password") {
//       return false;
//     } else {
//       target[prop] = value;
//       return true;
//     }
//   },
// });
// proxy.name = "Jalol";
// proxy.password = 4567;
// console.log(proxy);
// =============================
//proxy-2
// let user = {
//   name: "Ali",
//   surname: "Aliyev",
//   _password: 12345,
// };
// let proxy = new Proxy(user, {
//   ownKeys(target) {
//     return Object.keys(target).filter((v) => !v.startsWith("_"));
//   },
// });
// for (vl in proxy) {
//   console.log(vl);
// }
// ========
// let user = {
//   start: 10,
//   end: 1,
// };
// let proxy = new Proxy(user, {
//   has(target, prop) {
//     return target.start >= prop && target.end <= prop;
//   },
// });
// console.log(7 in proxy);
// =========
// let user = {
//   name: "Ali",
//   _pw: 1234,
// };
// let proxy = new Proxy(user, {
//   get(target, prop) {
//     return !prop.startsWith("_")
//       ? target[prop]
//       : "Siz parolni olmoqchisiz, uni olib bo'lmaydi";
//   },
// });

// console.log(proxy._pw);
// ============
// let user = {
//   name: "Ali",
//   _pw: 1234,
// };
// let proxy = new Proxy(user, {
//   set(target, prop, value) {
//     return !prop.startsWith("_")
//       ? (target[prop] = value)
//       : "Siz parol qo'sha olmaysiz";
//   },
// });

// proxy._pw = 4322;
// proxy.title = "hi";
// console.log(user);
// ======================
// let data = document.getElementsByTagName("ul");
// console.log(data[0].firstElementChild.nextElementSibling);
// console.log(data[0].firstElementChild.nextSibling);
// document.getElementById(elementId);
// document.getElementsByClassName(elementId);
// document.getElementsByName(elementId);
// document.getElementsByTagName(elementId);
// document.getElementsByTagNameNS(elementId);
// document.querySelector("div");
// document.querySelector("#id");
// document.querySelector(".class");
// document.querySelectorAll("div");
// document.querySelectorAll("#id");
// document.querySelectorAll(".class");
// let headerOne = document.getElementsByTagName("h1");
// let headerTwo = document.querySelector("h2");
// headerOne[0].style.color = "red";
// headerTwo.style.color = "yellow";

// let one = document.querySelector("#one");
// one.hidden = true;
// ==================================
// console.log(null ?? undefined);
// =================================
// one.removeAttribute("class");
// ===============
// console.log(document.createElement("div"));
// console.log(document.createTextNode("Hellow world"));
// ==============================
// let box = document.createElement("h1");
// let text = document.createTextNode("hellow world");
// box.append(text);
// wrapper.append(box);
//==========================
// wrapper.insertAdjacentHTML("beforeend", '<h1 id="one">Hellow</h1>');
// one.remove();
// =======================
// let wrapper = document.querySelector(".wrapper");
// let headingOne = document.querySelector("h1");
// headingOne = wrapper.cloneNode(true);
// console.log(headingOne.hasAttribute("class"));
// ============================
// wrapper.style.backgroundColor = "red";
// wrapper.style.cssText = `
//  background:red;
//  color:green;
// `;
// ===========================
// let wrapper = document.querySelector(".wrapper");
// console.log(wrapper.offsetTop); // return =>100
// console.log(wrapper.offsetLeft); // return => 100
// console.log(wrapper.offsetWidth); // return => 220
// console.log(wrapper.offsetHeight); // return => 220
// console.log(wrapper.clientTop); // return => 10
// console.log(wrapper.clientLeft); // return => 10
// console.log(wrapper.clientWidth); // return => 189
// console.log(wrapper.clientHeight); // return =>200
// console.log(wrapper.scrollHeight); // return => 1080
// console.log(wrapper.scrollTop); // return => 0
// =========

// box.classList.remove("wrapper");

// const onClick = () => {
//   box.classList.toggle("bg");
// };
// ====================
// const onScroll = () => {
//   box.scroll(0, box.scrollHeight);
// };
// const onScroll = () => {
//   box.scrollBy(0, 20);
// };
// const onScroll = () => {
//   box.scrollTo(0, 50);
// };
// ============
// console.log(box.getBoundingClientRect());

// let str = "webbrain";
// let str1 = "";
// for (let i in str) {
//   console.log(str[str.length - 1 - i]);
// }
// =============================
// let str = "webbrain";
// console.log(str.substring(1, 4)); //ebb
// console.log(str.substr(1, 4)); //ebbr
// ============================
// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };
// a[b] = 123;
// a[c] == 456;
// console.log(a[b]);
// ======================

// let user = [
//   { id: 1, name: "Ali", username: "Aliyev" },
//   { id: 2, name: "Vali", username: "Aliyev" },
//   { id: 3, name: "Umar", username: "Aliyev" },
//   { id: 4, name: "Xolid", username: "Aliyev" },
// ];
// const data = { id: 4, name: "Joha", username: "Qoharov" };

// const update = (data) => {
//   let res = user.filter((v) => v.id !== data.id);
//   user = [...res, data];
// };
// update(data);
// console.log(user);

// ==================
// let user = { id: 1, name: "Ali", username: "Aliyev" };

// Object.defineProperty(user, "name", { enumerable: false });

// for (let i in user) {
//   console.log(i);
// }

// let str = "bhdkw mwjkew";

// console.log(str.replace(" ", "/"));

//==============================
//  1
// let sum = 0;

// for (let n = 1; n <= 10; n++) {
//   //m son beriladi
//   sum += 1 / n;
// }
// console.log(sum);

// //  2
// let sum2 = 0;

// for (let n = 1; n <= 10; n++) {
//   //m son beriladi
//   sum2 += (n+);
// }
// console.log(sum2);

// ==============================
// let obj = {
//   name: "Ali",
//   age: 30,
//   getName() {
//     return function () {
//       console.log(this);
//     };
//   },
// };

// obj.getName();
// ======================
// let obj = {
//   name: "Ali",
//   age: 40,
//   getThis() {
//     console.log(this, "getThis");

//     const arrowThis = () => {
//       console.log(this, "arrowThis");
//     };
//     arrowThis();
//   },
// };

// obj.getThis();
// /============
// function newFunction() {
//   console.log(arguments, "newFunction");
// }
// newFunction("Ali", 40);

// const arrowFunction = () => {
//   console.log(arguments);
// };

// arrowFunction("Nemat", 67);
// =================
// function User(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// }
// const user = new User("Ali", "Aliyev", 80);
// console.log(user);
// =================
// const user = {
//   name: "Ali",
//   surname: "Aliyev",
//   age: 40,
// };

// console.log(user?.name);
// ===============
// const users = [
//   {
//     id: 1,
//     name: "Ali",
//     age: 70,
//   },
//   {
//     id: 2,
//     name: "Ali",
//     age: 70,
//   },
//   {
//     id: 3,
//     name: "Ali",
//     age: 70,
//   },
// ];

// users.forEach((users) => {
//   console.log(users.name);
// });
// ===========================
// const getNumPalindrom = (num) => {
//   let res = "";
//   for (let i = num.length - 1; i >= 0; i--) {
//     res += num[i];
//   }
//   if (res == num) return "Palindrom";
//   else return "No palindrom";
// };
// console.log(getNumPalindrom("22"));

// setInterval(() => {
//   return console.log(10);
// }, 1000);

// let users = [
//   { id: 1, year: 1998, engine: 1, name: "Tico" },
//   { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//   { id: 8, year: 2005, engine: 1.2, name: "Matiz" },
//   { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//   { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//   { id: 5, year: 2012, engine: 2, name: "Malibu" },
//   { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//   { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];

// let addMiddle = users.filter((v) => v.year < 2010 && v.year > 2000);

// console.log(addMiddle);

//=================================================
// let color = "red";
// switch (color) {
//   case "yellow":
//     console.log("Sariq");
//   case "blue":
//     console.log("Ko'k");
//   case "red":
//     console.log("qizil");
//     break;
//   default:
//     console.log("Izlangan rang topilmadi.");
// }

// ====================================
// let i = 0;
// for (; i < 3; ) {
//   console.log(i);
// }
// ========================
// for (let i = 0; i < 20; i++) {
//   console.log(i);
//   if (i === 10) break;
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// output: for (let i = 0; i < 105; i++) {
//   console.log(i, "i");
//   inner: for (let j = 0; j < 3; j++) {
//     if (i === 3) break output;
//     console.log(j, "j");
//   }
// }

// let i = 10;
// while (i) {
//   console.log(i);
//   i--;
// }

// let i = 10;
// do {
//   i--;
//   console.log(i);
// } while (i);
// ============================
// let obj1 = {
//   name: "Ali",
//   age: 12,
// };
// let obj2 = {
//   surname: "Aliyev",
// };
// Object.assign(obj1, obj2);
// delete obj2.surname;
// obj2.job = "It";
// console.log(obj1);
// console.log(obj2);

// let adress = "1.1.1.1";

// const test = () => {
//   return adress.replaceAll(".", "[.]");
// };
// console.log(test());

// let adress = "1.1.1.1";

// const test = () => {
//   return adress.split(".").join("[.]");
// };
// console.log(test());

// let str = "Hellow World V";

// const getEndStr = () => {
//   let res = str.split(" ");
//   return res[res.length - 1].length;
// };
// console.log(getEndStr());

//=================================
// let bol = true;
// console.log(bol + "3");

// console.log(x);
// var x = 10;

// function test() {
//   var x = 10;
// }
// if (1) {
//   let y = 10;
// }
// console.log(x);
// console.log(y);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(eval(arr.join("+")));

// let res = arr.reduce((sum, prev) => {
//   return (sum += prev);
// }, 0);
// console.log(res);

// let sym1 = Symbol(

// let num = 5;
// let numStr = "7";
// let str = "helow";
// let bol1 = true;
// let bol2 = false;

// console.log(str + num);
// console.log(str - num);
// console.log(num - numStr);
// console.log(num + numStr);
// console.log(bol1 + num);
// console.log(bol1 + numStr);
// console.log(bol2 + num);

// function test() {
//   var x = "Hellow";
//   let y = "no";
// }
// if (1) {
//   var a = 10;
//   let b = 11;
// }

// console.log(x);
// console.log(y);
// console.log(a);
// console.log(b);

// let name = "Ali ";
// function test() {
//   let name = "Ali";
// }

// let obj = {
//   name: "Ali",
//   surname: "Aliyev",
//   age: 23,
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// let x = !0;
// console.log(x);
// let obj = {
//   true: "hi",
//   12: "no",
// };

// let map = new Map();

// map.set(2, 2);
// map.set(1, 3);
// map.set(3, 4);

// let obj = Object.fromEntries(map);
// console.log(obj);

// let set = new Set();
// set.add("Jalol");
// set.add("Jalol");
// set.add("Jalol");
// set.add("Ali");
// set.add(3);
// console.log(set);

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// console.log(unique(values));

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(new Set(arr));

// let user = {
//   name: "Ali",
// };

// let map = new Map();
// let week = new WeakMap();

// map.set(user, "1");
// week.set(user, "2");

// user = null;
// console.log(map);
// console.log(week);

// let obj = {
//   test() {
//     return 1;
//   },
//   test1(x) {
//     return x * this.test();
//   },
// };
// console.log(obj.test1(10));

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     // здесь может быть страшно тяжёлая задача для процессора
//     alert("Called with " + x);
//     return x * this.someMethod(); // (*)
//   },
// };

// alert(worker.slow(2));

// let obj1 = { name: "Ali" };
// let obj2 = { name: "Vali" };
// let obj3 = { name: "Shokir" };

// function test() {
//   console.log(this.name);
// }

// test.call(obj1); //return => Ali
// test.call(obj2); //return => Vali
// test.call(obj3); //return => Shokir

// let obj1 = { age: 12, name: "Ali" };
// let obj2 = { age: 12, name: "Vali" };
// let obj3 = { age: 12, name: "Shokir" };

// function test(arg1) {
//   console.log(`${arg1} ${this.name}!`);
// }

// test.apply(obj1, ["Hellow"]);
// test.apply(obj2, ["Hi"]);

// let sym1 = Symbol("hi");
// let sym2 = Symbol("hi");

// console.log(sym1 === sym2);

// let arr = [1, 1, 1, 1, 3, 4, 5, 6, 78];
// let set = new Set(arr);
// let arr2 = Array.from(set);
// console.log(arr2);
// let name = "Jaloliddin";

// let arr3 = Array.from(name);
// console.log(arr3);
// let obj = {
//   name: "Ali",
//   surname: "Aliyev",
//   age: 23,
// };
// let arr4 = Array.from(obj);
// console.log(arr4);

// console.log(2 || 1);
// let obj = {
//   a: 1,
//   b: 2,
// };

// let { a, b } = obj;
// console.log(a);

// function User(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// }

// let user1 = new User("Ali", "Aliyev", 23);
// let user2 = new User("Umar", "Umarov", 22);
// console.log(user1); //return => User {name:"Ali", surname:{"Aliyev"}, age:23}
// console.log(user2); //return => User {name:"Ali", surname:{"Aliyev"}, age:23}

// ============================

// let num = 4n / 2n;
// console.log(num);

// let num = 1000;
// console.log(JSBI.BigInt(num));
//===========================
// let obj = ["hi", "hellow", 1];
// let arr = Array.from(obj);
// console.log(arr);
//================================
// function getName() {
//   console.log("Hi");
// }
// let obj = {
//   name: "Jalol",
//   getName,
// };

// console.log(obj.getName());
//============================
// let obj = {
//   name: "Jalol",
//   getName() {
//     console.log(this.name);
//   },
// };
// let newObj = obj;
// obj = null;

// // obj.getName();
// newObj.getName();

// let user = {
//   name: "Jalol",
//   surname: "Jalolov",
//   age: 12,
// };

// const { name, surname, age } = user;
// console.log(name);

// let name = "Farrux";
// let user = {
//   name: "Jalol",
//   surname: "Jalolov",
//   age: 12,
// };

// const { name: newName, surname, age } = user;
// console.log(newName);

// let users = {
//   userOne: {
//     name: "Farrux",
//     age: 20,
//   },
//   userTwo: {
//     name: "Ali",
//     age: 22,
//   },
// };

// const {
//   userOne: { name: nameOne, age: ageOne },
//   userTwo: { name: nameTwo, age: ageTwo },
// } = users;
// console.log(nameOne);

//=================================================
// console.log(1e3);
// let num = 0.4343;

// console.log(num.toFixed(2));

// let num = "1.33432";
// console.log(Number.parseInt(num));
// console.log(parseInt(num));
// console.log(parseFloat(num));

// console.log(eval("1.5+1.5"));

// let num = 13;
// console.log(num.toString());

// let binaryNum = num.toString(2);
// console.log(binaryNum);
// console.log(parseInt(binaryNum, 2));

// console.log(isNaN("12d"));
// console.log(isNaN("12"));
// console.log(isNaN(12));

// console.log(Object.is(1, 1));
// console.log(Object.is(1, 2));
// console.log(Object.is("hellow", "hellow"));
// console.log(Object.is("12", "21"));

// let num1 = 1.003232;
// let num2 = 0.003232;
// console.log(num1.toPrecision(4));
// console.log(num2.toPrecision(4));

// console.log(Math.round(1.5));
// console.log(Math.random());

// let num = 3.4;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// console.log(Math.min(1, 2, 3, 4, 5, 6));
// console.log(Math.max(1, 2, 3, 4, 5, 6));

// console.log(Math.pow(2, 4));
//=====================================================

// class CliceStr {
//   constructor(str) {
//     this.str = str;
//   }
//   cliceFunc(param) {
//     return param;
//   }
// }

// let sliceStr = new CliceStr();
// console.log(sliceStr.cliceFunc(1));
// let str1 = "Hellow\tWorld";
// let str2 = "Hellow\nWorld";
// console.log(str1);
// console.log(str2);

// let str1 = "Hellow";
// let str2 = new String("Hellow");
// console.log(str1 == str2);
// console.log(str1 === str2);

// let str = "Hellow World";

// console.log(str.indexOf("ll"));
// console.log(str.indexOf("ll", 4));
// console.log(str.indexOf("lli"));

// let str = "Hellow";

// console.log(str.padStart(10, "."));

// let str = "Hellow World";
// console.log(str.slice(0, 5));
// console.log(str.slice(-3, -1));
// console.log(str.slice(0));

// let str = "Hellow World";
// console.log(str.substring(0, 10));
// console.log(str.substring(10, 0));
// console.log(str.substring(2, -2));
// console.log(str.substring(-2, -2));

// let str = "Hellow World";
// console.log(str.substr(0, 4));

// let str = "Hellow World";
// console.log(str.split());
// console.log(str.split(""));
// console.log(str.split(" "));

// let str1 = "Hellow";
// let str2 = "World";
// console.log(str1.concat(str2));

// let str = new String("Hellow");
// console.log(str.valueOf());

// let str = "web developer";
// console.log(str.replace("web", "frontend"));

// let str = "Hellow";
// for (let val of str) {
//   console.log(val);
// }

//============================================
// let arr1 = new Array();
// let arr2 = new Array(4);
// let arr3 = new Array("4");
// let arr4 = new Array(4, 5, 6);
// arr1[0] = 4;
// arr2[2] = 0;
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

//===================================================
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.toString());

//==============================================
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.join());
// console.log(arr.join(""));
// console.log(arr.join("+"));
//====================================
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];
// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, "hi", 10, [3]));
//==========================================
// let arr = [];

// console.log(Array.isArray(arr) == 1);
///========================
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// arr1.pop();
// arr2.push(5);
// console.log(arr1);
// console.log(arr2);
//====================
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// arr1.shift();
// arr2.unshift(10);
// console.log(arr1);
// console.log(arr2);
//=========================
// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = arr.slice(-4, 3);
// console.log(newArr);
// console.log(arr);
//=========================
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = arr1.splice(3, 0, "hellow");
// console.log(arr2);
// console.log(arr1);
//=================================
// let arr = [1, 2, 3, 4, 5, 1];
// console.log(arr.indexOf(1));
// console.log(arr.lastIndexOf(1));
//=============================
// let str = "Hellow,hi";
// let arr1 = str.split();
// let arr2 = str.split("");
// let arr3 = str.split(",");
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
//=============================
// let arr = [1, 2, 3, 4];
// console.log(arr.includes(1));
// console.log(arr.includes(10));
//==============================
// let arr = [1, 2, 3, 4, 5, 6, 7, 14];
// for (let i of arr) {
//   console.log(i);
// }

//===================================================================
// let arr = [4, 6, 2, 33, 4, 0, 2];
// let res = arr.sort((a, b) => a - b);
// console.log(res);

// let arr = ["nok", "anor", "banan"];
// let res = arr.sort((a, b) => a.localeCompare(b));
// console.log(res);

//====================================================
// let arr = [1, 4, 5, 6, 1, 2];
// let res1 = arr.find((value, item, arr) => value === 1);
// let res2 = arr.find((value, item, arr) => item === 3);
// console.log(res1);
// console.log(res2);
//==================================================
// let arr = [2, 3, 51, 9, 4];
// let res = arr.findIndex((item, index, arr) => item === 4);
// console.log(res);

//========================================
// let arr = [2, 3, 4, 5, 6, 7, 8];
// let res = arr.filter((item, index, array) => item % 2 === 0);
// console.log(res);
//================================================
// let arr1 = [2, 2, 2, 2, 2];
// let arr2 = [2, 2, 2, 2, 4];

// let res1 = arr1.some((item) => item === 3);
// let res2 = arr2.some((item) => item === 4);
// console.log(res1);
// console.log(res2);

//=============================================
// let arr = [10, 1, 2, 3, 4];
// let res = arr.reduce((sum, cur) => {
//   return (sum += cur);
// }, 0);
// console.log(res);
//==========================================
// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach((value, item, arr) => {
//   console.log(value);
// });
//=============================================
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res1 = arr.map((value, item, arr) => {
//   return 1;
// });
// let res2 = arr.map((value, item, arr) => {
//   return value * 2;
// });
// console.log(res1);
// console.log(res2);
// ==========================================

// const getData = () => {};
//==========================================

// test();
// function test() {
//   console.log(10);
// }

//============================
// console.log([10] + [10]);
//=================================
// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.filter((v) => "hi");
// console.log(res);

// let arr = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3];
// let res = new Set(arr);
// console.log([...res]);

// {
//   function test() {
//     return this;
//   }
// }

// console.log(test());
//=============================
// let i = 0;
// while (i++ < 3) {
//   console.log(i);
// }

//================
// let test = function () {};
// test.prototype.department = "Dev";
// let prog = new test();
// prog.department = "Js";
// console.log(prog.department);
//==============
// let data = new Number(1);
// console.log(data);
// console.log(a);

// function f() {}

// let x = [f.__proto__];
// console.log(x);
// console.ta;

// console.log(null === NULL);
// console.log("h'm");
// console.log(NaN ** 2);
// console.log("hi".match(/hi / me));
// let obj = { a: 2 };
// obj = 2;
// console.log(obj);

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// let str1 = "HellowWorld";
// let str2 = `Hellow
//  World
// `;
// console.log(str1 === str2);
// console.log(str2);

// let x = 1;
// let y = (x = 2);
// console.log(y);

// let i = 0;
// for (i; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);
// let arr = [1, 2, 3];
// arr.splice(1, 2, 3);
// console.log(arr);

// console.log(/Love/.ignoreCase.test);

// let obj = {
//   mro() {
//     console.log("hi");
//   },
//   age: undefined,
// };
// console.log(JSON.stringify(obj));

// console.log("42\n".length);

// let c = new Number(3);
// console.log(c == 3);
// console.log(1 == "1");

// if ([]) {
//   console.log(2);
// } else {
//   console.log(3);
// }

// console.log([0] ? [0] == false : false);
// console.log(typeof arguments);
// let a = 137;
// console.log(a.toString(2));
//========================================
// let config = {
//   languages: [],
//   get lweng() {
//     return "hi";
//   },
//   set m(l){

//   }
// };
// console.log(config.lweng);
//=================================

// let arr = [1, 2, 3, 4, 5];
// let res = arr.fill("there", 2, 3);
// console.log(arr);
// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = arr.copyWithin("hellow", 3, 6);
// console.log(arr);
// console.log(res);

// let obj = {
//   name: "Ali",
//   surname: "Aliyev",
//   age: 24,
// };
// console.log(Array.from(obj, (v) => v));

// let user = [1, 2, 3, 4];
// let res = Array.from(user, (v) => v * 2);
// console.log(res);

// let arr = [1, 2, [3, 4, [5, [6]]]];
// let res1 = arr.flat(1);
// let res2 = arr.flat(2);
// let res3 = arr.flat(Infinity);

// console.log(arr);
// console.log(res1);
// console.log(res2);
// console.log(res3);

// let arr = [1, 2, 3, 4];

// let res = arr.map(() => 1);
// console.log(res);

// let arr = [1, 2, 3, [4, 5, [6]]];
// let res = arr.flatMap((v) => v);
// console.log(res);

//=========================
// little.addEventListener("click", (e) => e.stopImmediatePropagation());
// const students = [
//   { id: 1, name: "Eshmat", title: "CEO" },
//   { id: 2, name: "toshmat", title: "CTO" },
//   { id: 3, name: "gulmat", title: "HR" },
//   { id: 4, name: "holmat", title: "CEE" },
// ];

// const update = (data) => {
//   return students.map((v) => (v.id === data.id ? { ...v, ...data } : v));
// };
// console.log(update({ id: 4, title: "HR", name: "Ashrafxon" }));

//=================================
// let obj1 = { age: 20 };
// let obj2 = {};
// console.log(obj1.toString());

// class Age {}
// let age = 19;
// console.log(Age.__proto__);
// console.log(age.__proto__);

// function Method(data) {
//   this.keys = data && Object.keys(data);
// }
// let test = new Method();
// console.log(test);

// let a = { value: 3 };
// let b = {
//   age: a,
// };
// console.log(a === b.age);
// console.log({} === {});
// console.log({} == {});

// let obj1 = {};
// let obj2 = { age: 20 };
// let num1 = 12;
// let num2 = 1;

// console.log(obj1.__proto__ === obj2.__proto__); //return => true
// console.log(num1.__proto__ === num2.__proto__); //return => true
// console.log(obj1.__proto__ === num2.__proto__); //return => false

// let arr = [1, 2, 3, 4, 5];

// Array.prototype.addNum = function (prop) {
//   return this.map((v) => v + prop);
// };

// console.log(arr.addNum(2));

// console.log(Array.prototype); //return => Object(0) []
// console.log(Object.prototype); //return => [Object: null prototype] {}
// console.log(Function.prototype); //return => {}
// console.log(Number.prototype); //return => {}
// console.log(String.prototype); //return => {}
// console.log(Boolean.prototype); //return => {}
// console.log(Symbol.prototype); //return => Object [Symbol] {}
// console.log(BigInt.prototype); //return => Object [BigInt] {}

// //__proto__
// console.log(Array.__proto__); //return => {}
// console.log(Object.__proto__); //return => {}
// console.log(Function.__proto__); //return => {}
// console.log(String.__proto__); //return => {}
// console.log(Number.__proto__); //return => {}
// console.log(Boolean.__proto__); //return => {}
// console.log(Symbol.__proto__); //return => {}
// console.log(BigInt.__proto__); //return => {}

// function test() {}
// console.log(test.prototype);

// class Test {}

// console.log(Test.__proto__ === Function.prototype); //return => true
// console.log(Test.__proto__.__proto__ === Object.prototype); //return => true
// console.log(Test.__proto__.__proto__.__proto__ === null); //return => true

// console.log(Test.__proto__.__proto__.__proto__.__proto__ === Error);

// let buttonCar = document.querySelector(".button-cars");
// let infoCar = document.querySelector(".info-car");

// let data = [
//   { id: 1, name: "nexia", year: 2007 },
//   { id: 2, name: "matiz", year: 2007 },
//   { id: 3, name: "cobat", year: 2010 },
//   { id: 4, name: "spark", year: 2012 },
//   { id: 5, name: "teracer", year: 2022 },
//   { id: 6, name: "malibu", year: 2012 },
//   { id: 7, name: "nexia", year: 2010 },
// ];

// function getButtons() {
//   data.forEach((v) => {
//     let button = document.createElement("button");
//     button.textContent = `${v.year}`;
//     button.setAttribute("onclick", "getCarsInfo(event)");
//     buttonCar.append(button);
//   });
// }
// getButtons();

// const getCarsInfo = (e) => {
//   let arr = data.filter((v) => v.year === Number(e.target.innerHTML));
//   infoCar.innerHTML = null;
//   arr &&
//     arr.map((v) => {
//       let header = document.createElement("h3");
//       header.innerHTML = `${v.id} - ${v.name}`;
//       infoCar.append(header);
//     });
// };

// const sortFunction = () => {};

// function test(hi) {
//   console.log(hi);
// }
// console.log(test());

// //===========================
// let users = [
//   { id: 1, name: "Umar", age: 30 },
//   { id: 2, name: "Usmon", age: 10 },
//   { id: 3, name: "Ali", age: 40 },
//   { id: 4, name: "Fozil", age: 60 },
//   { id: 5, name: "Nemat", age: 20 },
//   { id: 6, name: "Ilhom", age: 20 },
// ];

// // Delete
// //filter id === 5 => delete

// let deleteUser = users.filter((v) => v.id !== 5);
// console.log(deleteUser);

//======================================
// //Update

// //filter id == 5 => name = "Holid"
// const updateName = (id, name) =>
//   users.map((v) => {
//     return v.id === id ? { ...v, name } : v;
//   });
// console.log(updateName(4, "Holid"));

//===================================

// //Read

// //filter. forEach
// let res = users.filter((v) => 1);

// users.forEach((v) => {
//   console.log(v.name.toUpperCase());
// });

// //includes with filter
// let getName = users.filter((v) => v.name.includes("Ali"));

// //sort => yili bo'yicha sort qilamiz
// let sort = users.sort((a, b) => a.age - b.age);
// console.log(sort);

//==========================================
//Create => spreat
// let res = [...users, { id: 7, name: "Ahmad", age: 90 }];
// console.log(res);

//=========================================
// class Test {
//   constructor() {
//     this.count = 0;
//   }
//   counter() {
//     this.count++;
//   }
// }
// let test = new Test();
// new Test().counter();
// console.log(test.count);

// let x = 1,
//   y = 1;

// x = ++x + y++;
// y = x-- - --y;
// console.log(y, x);

//====================================================
// let num = "1";
// let str = "$12";

// console.log(num.charCodeAt()); //return => 49
// console.log(num.charCodeAt(1)); //return => NaN

// console.log(str.charCodeAt()); //return => 36
// console.log(str.charCodeAt(1)); //return => 49
// console.log(str.charCodeAt(2)); //return => 50

// console.log(String.fromCharCode(49)); //return => 1
// console.log(String.fromCharCode(36, 49, 50)); //return => $12

// console.log("𐩕".codePointAt(0)); // 68181
// console.log("\uD800\uDC00".codePointAt(0)); // 65536

// function* testOne() {
//   yield ["a", "b", "c"];
// }

// function* testTwo() {
//   yield* ["a", "b", "c"];
// }
// let one = testOne();
// let two = testTwo();
// console.log(one.next().value);
// console.log(two.next().value);
// console.log(two.next().value);
// console.log(two.next().value);

// let num = 10;
// const test1 = () => num++;
// const test2 = (number) => number++;
// let t1 = test1();
// let t2 = test2(num);
// console.log(t1, t2);

//==========================================
// let obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

// var romanToInt = function (s) {
//   let res = 0;
//   Array.from(s, (v, i) => {
//     if (obj[v] >= obj[s[i + 1]] || i === s.length - 1) {
//       res += obj[v];
//     } else {
//       res += -obj[v];
//     }
//   });
//   console.log(res);
// };
// romanToInt("MCMXCIV");

//===============================================
// let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
// var letterCombinations = function (digits) {
//   res = [];
//   let newArr = Array.from(digits, (v) => arr[Number(v)]);
//   for (let i = 1; i < newArr.length; i++) {
//     for (let n = 0; n < newArr[0].length; n++) {
//       let m = newArr[0][n];
//       for (let j = 0; j < newArr[i].length; j++) {
//         // console.log(newArr[i][j]);
//         m += newArr[i][j];
//       }
//       console.log(m);
//     }
//   }

//   console.log(res);
// };

// letterCombinations("234");

// =========================
// var singleNumber = function (nums) {
//   let res = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let a = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) a++;
//     }
//     if (a === 1) {
//       res = nums[i];
//     } else a = 0;
//   }
//   console.log(res);
// };

// singleNumber([1, 2, 2, 2]);
// ===========================
// let arr = [33, 2, 8, 7];
// arr.sort();
// console.log(arr);

// =================================
// function getSortArr(arr) {
//   let n = arr.length;
//   let newArr = arr;
//   let res = [];
//   for (let i = 0; i < n; i++) {
//     console.log(Math.min(arr));
//     res.push(Math.min(arr));
//     newArr.splice(i, i + 1);
//   }
//   console.log(arr);
// }
// getSortArr([3, 4, 5, 1, 2, 3]);
//================================
// let p1 = Promise.reject(1);
// let p2 = Promise.resolve(2);
// let p3 = Promise.resolve(3);
// let p4 = Promise.resolve(4);

// const run = async () => {
//   let res1 = await Promise.all([p1, p2]);
//   let res2 = await Promise.all([p3, p4]);
//   console.log([res1, res2]);
//   return [res1, res2];
// };

// run()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// // =================================
// var isValid = function (s) {
//   let arr = [];
//   for (let i = 0; s.length > i; i++) {
//     let arrLeng = arr[arr.length - 1];
//     console.log(s[i]);

//     if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
//       arr.push(s[i]);
//     } else if (
//       (arrLeng == "(" && s[i] == ")") ||
//       (arrLeng == "[" && s[i] == "]") ||
//       (arrLeng == "{" && s[i] == "}")
//     ) {
//       arr.pop();
//     } else return false;
//   }
//   return arr;
// };
// // console.log(isValid("()[]{}"));

// var moveZeroes = function (nums) {
//   let index = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num !== 0) {
//       nums[index++] = num;
//     }
//   }

//   for (let i = index; i < nums.length; i++) {
//     nums[index++] = 0;
//   }
//   console.log(nums);
// };
// console.log(moveZeroes([1, 1, 3, 0, 9, 0, 9]));
// ===================================
// function getName() {
//   return "Jaloliddin";
// }

// function getInfo(userName, age) {
//   return `My name is ${userName()}, I'm ${age} years old.`;
// }

// console.log(getInfo(getName, 24));

// function getName() {
//   return function () {
//     return "Nemat";
//   };
// }
// let newName = getName();
// console.log(newName()); // Ali

//===============================
// let user = { id: 1, name: "Ali", age: 20 };
// console.log(user.country?.city);
// ===============================

// function User(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// }

// let user = new User("Jalol", "Bosimov", 24);
// console.log(user.name);
// ==========================================
// console.log(true == "true");

// function greet() {
//   name = "Ali";
//   console.log(`Hellow ${name}!`);
// }
// greet();
// console.log(name);

// ====================================
// var isValid = function (s) {
//   let arr = [];

//   for (let i = 0; s.length > i; i++) {
//     let prev = arr[arr.length - 1];

//     if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
//       arr.push(s[i]);
//     } else if (
//       (prev === "(" && s[i] === ")") ||
//       (prev === "{" && s[i] === "}") ||
//       (prev === "[" && s[i] === "]")
//     ) {
//       arr.pop();
//     } else return false;
//   }
//   console.log(arr.length);
//   return arr.length === 0 ? true : false;
// };
// console.log(isValid("()[]{}"));
// =========================================

// var findDuplicate = function (nums) {
//   for (let i = 0; nums.length > i; i++) {
//     for (let j = 1; nums.length > j; j++) {
//       if (nums[i] === nums[j] && i != j - 1) {
//         return nums[i];
//       }
//       // break;
//     }
//   }
// };
// console.log(findDuplicate([[1, 3, 4, 2, 2]]));

// =======================================

// var findMedianSortedArrays = function (nums1, nums2) {
//   let nums = nums1.length + nums2.length;
//   let allSum = sum(nums1) + sum(nums2);

//   function sum(arr) {
//     return arr.reduce((sum, prev) => sum + prev, 0);
//   }
//   let res = allSum / nums;
// };
// console.log(findMedianSortedArrays([1, 2], [3, 4]));

// ==========================================

// var num = 17;

// var num = 20;

// console.log(num);

// let str = "hellow";
// let str = "world";
// console.log(str);

// ======================================

// console.log(
//   (function func() {
//     var name = "ali";
//     return name;
//   })()
// );

// console.log(
//   (function func() {
//     var name = "vali";
//     return name;
//   })()
// );
// ===================================

// let str = "Hellow";

// let newStr = str.padEnd(10, ".");
// console.log(newStr);

// class NewClass {
//   constructor(name) {
//     console.log(name);
//     this.name = name;
//   }
//   getData(par) {
//     console.log(par + this.name);
//   }
// }
// let cl = new NewClass("Nodir");
// cl.getData("Hi");
// console.log(cl);

// if (1) {
//   var x = 1;
// }

// function test() {
//   console.log(this);
//   var a = 10;
// }
// console.log(a);

// let obj = {
//   name: "Jalol",
//   age: 12,
//   status: "o'quvchi",
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// let arr = [1, 2, 4];
// console.log(arr.slice(0, 2));
// console.log(arr.splice(0, 2));

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((sum, curr) => {
//   console.log(sum);
//   return sum + curr;
// }, 0);
// console.log(sum);

// let arr = [1, 1, 2, 3, 4, 2, 3, 4, 5];
// let sortArr = Array.from(new Set(arr));
// console.log(sortArr);

// let obj = {
//   name: "Jalol",
//   age: 12,
//   status: "o'quvchi",
// };

// console.log(Array.from(obj));

// let a = Symbol.for("hellow");
// let b = Symbol.keyFor("hellow");
// console.log(b);

// let obj = {
//   name: "Jalol",
//   age: 23,
//   [Symbol("password")]: "123",
// };

// console.log(obj[Symbol("password")]);

// var message = "Global message";

// function showMessage() {
//   var message = "Local message"; // This "shadows" the global variable
//   console.log(message); // Accessing the local variable
// }

// showMessage();
// console.log(message);

// function myFunction() {
//   if (true) {
//     var localVariable = "I'm in block scope";
//     let blockVariable = "I'm also in block scope";
//   }
//   console.log(localVariable); // Accessible
//   //   console.log(blockVariable); // Error: blockVariable is not defined
// }
// myFunction();

// if (true) {
//   console.log(this);
// }

// let obj = {
//   name: "Ali",
//   age: 10,
// };
// let arr = [1, 2, 4];
// arr.splice(1, 2, 10, 11);

// console.log(arr);

// let bool = true;
// let str = bool.toString();

// console.log(typeof str);

// console.log(null + 1);
// console.log(null + "1");
// console.log(null + true);
// console.log(y);

// let x = "1";
// var y = "1";

// let arr = [1, 2, 12, 3, 3, 4, 5, 6];
// let fil = arr.filter((v) => !(v % 2) && v);
// let ev = arr.every((v) => v === 1);
// let som = arr.some((v) => v === 1);
// let sp = arr.splice(0, 2);
// let sl = arr.slice(4);
// console.log(sp);
// console.log(sl);
// console.log(arr);

// let fun = new Function();

// console.log(fun);

// console.log(Array.prototype);

// let arr = [1, 2, 3, 4, 5, 6, 6, 6, 77, 8, 8, 9, 12];

// let num = arr.find((val) => val === 9);
// console.log(num);
// =================

// let num = 3;
// function test() {
//   let a = 3;
//   num++;
//   return num === a ? a : num;
// }
// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());
// ===================

// let num = 10;
// function* test() {
//   yield num;
//   num++;
// }
// console.log(test().next());
// console.log(test().next());
// console.log(test().next());
// console.log(test().next());

// console.log(fun());

// function fun() {
//   return 12;
// }
// "use strict";

// class NewClass {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return `My name is ${this.name}`;
//   }
// }

// let newClass = new NewClass("Jaloliddin");
// console.log(newClass.getName());

// const obj = {
//   name: "Jalol",
//   age: 23,
//   getName: () => {
//     console.log(this.name);
//   },
// };

// obj.getName();

// function getThis() {
//   let arrow = () => {
//     console.log(this);
//   };
//   arrow();
// }
// getThis();

// let obj = {
//   arrow: () => {
//     console.log(this, "hi");
//   },
// };
// obj.arrow();

// function getThis1() {
//   function getThis2() {
//     function getThis3() {
//       function getThis4() {
//         console.log(this, "this");
//       }
//       getThis4();
//     }
//     getThis3();
//   }
//   getThis2();
// }
// getThis1();

// function getThis() {
//   let obj = {
//     num: 12,
//     fun: () => {
//       console.log(this.num);
//     },
//   };
//   obj.fun();
// }
// getThis();

// let obj = () => {
//   console.log(this);
// };
// obj();

// exports.default = {
//   title: "hi",
// };

// console.log(this);
// function getThis() {
// }
// getThis();

// let obj = {
//   name: "Nemat",
//   age: 24,
//   getThisInObj() {
//     console.log(this);
//   },
// };
// obj.getThisInObj();

// function getThis() {
//   console.log(`My name ${this.name}`);
//   console.log(`Age ${this.age}`);
// }

// let obj1 = {
//   name: "Ali",
//   age: 24,
// };
// let obj2 = {
//   name: "Nemat",
//   age: 22,
// };

// getThis.call(obj1);
// getThis.call(obj2);

// function getThis(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }
// new getThis("Ali", 23);

// let obj = {
//   name: "Ali",
//   getThis: function () {
//     getFun = () => {
//       console.log(this);
//     };
//     getFun();
//   },
// };
// obj.getThis();

// let obj = {
//   name: "Ali",
//   familya: ["Nematov", "Jalolov"],

//   fun1: function () {
//     this.familya.forEach(function (val) {
//       console.log(`${this.name} ${val}`);
//     }, this);
//   },
//   fun2: function () {
//     this.familya.forEach((val) => {
//       console.log(`${this.name} ${val}`);
//     });
//   },
// };
// obj.fun1();
// obj.fun2();

// let obj = {
//   name: "Ali",
//   fun1: function () {
//     setTimeout(
//       function () {
//         console.log(this);
//       }.bind(this)
//     );
//   },
// };

// obj.fun1();

// function Fun(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }

// new Fun("Ali", 23);

// let a = 10;

// console.log(a + b);

// let b = 20;

// const carName = {
//   name: "Ali",
// };

// console.log(carName);
// var anaXalos = "Jaloliddin";

// var alert = "no alert";

// console.log(a);

// let a = 100;

// function fun() {
//   //
//   //
//   let b = 20;
// }

// let a = "Hellow";

// if (true) {
//   console.log(a);

//   //
//   //
//   let a = "Hi";
// }

// console.log("start");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// API URL manzili
// const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

// // new Promise yaratamiz
// const fetchData = new Promise((resolve, reject) => {
//   fetch(apiUrl)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         reject(`Error: ${response.status}`);
//       }
//     })
//     .then((data) => resolve(data))
//     .catch((error) => reject(`Network Error: ${error}`));
// });

// // Promise ni ishlatamiz
// fetchData
//   .then((data) => {
//     console.log("Data received:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// console.log("end");

// function fun() {
//   return { name: "Ali", age: 12 };
// }

// const { name, age } = fun();

// // console.log(name);

// let arr = [1, 2, 3];

// const [first, ...second] = arr;

// console.log(first);

// const urlUsers = "https://jsonplaceholder.typicode.com/todos/1";

// // let getData = fetch(urlUsers)
// //   .then((res) => res.json())
// //   .then((res) => console.log(res));

// async function fun() {
//   let data = await fetch(urlUsers)
//     .then((res) => res.json())
//     .then((res) => console.log(res));
//   return data;
// }

// fun();

// let a = {
//   name: "Ali",
// };

// let b = Object.assign({ age: "32" }, a);
// a = null;

// console.log(b);

// const urlUsers = "https://jsonplaceholder.typicode.com/todos/1";
// try {
//   user = fetch(urlUsers)
//     .then((res) => res.json())
//     .then((res) => console.log(res));

//   //   throw new Error("create error");
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

// let data = {
//   name: "Ali",
//   age: 12,
//   status: "O'quvchi",
// };

// let json = '{ "age": 30 }'; // данные неполны

// try {
//   let user = JSON.parse(json); // <-- забыл добавить "let" перед user

//   console.log(user);
//   // ...
// } catch (err) {
//   console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
//   // (не JSON ошибка на самом деле)
// }

// if (true) {
//   var a = (function () {
//     var str = "Hi";
//     return str;
//   })();
// }
// console.log(a);

// function fun1() {
//   console.log(1);
// }
// function fun2() {
//   console.log(2);
//   fun1();
// }
// function fun3() {
//   console.log(3);
//   fun2();
// }

// fun3();

// function fun(n) {
//   console.log(n);
//   if (n < 2) {
//     return 1;
//   }
//   return fun(n - 1);
// }

// fun(100000);

// function log(value) {
//   return value;
// }

// console.log(log(1));

// setTimeout(() => {
//   console.log(log(2));
// }, 4000);

// setTimeout(() => {
//   console.log(log(3));
// }, 2000);

// console.log(log(4));

// function fun() {
//   const x = 1;
//   function fun1() {
//     const y = 2;
//     console.log(x + y);
//   }
//   fun1();
// }
// fun();

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// console.log(arr1.concat(arr2));
// console.log(arr2);

// console.log(5 >= "3");

// class Cars {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }
//   getInfo() {
//     console.log(`Name car: ${this.name}, speed:${this.speed}`);
//   }
// }

// let cars = new Cars("Cobalt", 200);
// cars.getInfo();

// function User() {
//   this.name = "Ali";
//   this.age = 23;
// }
// let dataUser = new User();

// console.log(dataUser);

// class Cl {
//   constructor() {
//     this.name = "Ali";
//     this.age = 23;
//   }
// }
// let cl = new Cl();

// console.log(cl);

//=========================
// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

// let clock = new Clock({ template: "h:m:s" });
// // clock.start();
// // console.log(clock);

// class ClassCLock {
//   //   constructor({ template }) {
//   //     this.template = template;
//   //   }
//   timer;
//   render = function () {
//     let template = "h:m:s";
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//     // console.log(hours);
//     // console.log(template);
//   };

//   start() {
//     this.render();
//     this.timer = setInterval(this.render, 1000);
//   }
// }
// let classClock = new ClassCLock();
// classClock.start();
// // console.log(classClock);

// function Fun() {
//   function getData() {
//     console.log("hi");
//   }
// }

// let fun = new Fun();
// console.log(new Fun());

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит неподвижно.`);
//   }
// }

// let animal = new Animal("Мой питомец");

// class Rebbit extends Animal {
//   stop() {
//     console.log("Rebbit stop");
//     super.stop();
//   }
// }

// let rebbit = new Rebbit("Rebbit");
// rebbit.stop();
// animal.stop();

// let obj = {
//   name: "Ali",
// };
// let newObj = {};

// newObj.__proto__ = obj;
// console.log(newObj.name);

// let obj = new Object();

// console.log(obj.prototype);

// var options = {
//   rootMargin: "-100px",
//   threshold: 0,
// };

// var callback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };
// var observer = new IntersectionObserver(callback, options);

// var target = document.querySelector(".box1");
// var target2 = document.querySelector(".box2");
// observer.observe(target);
// observer.observe(target2);

// let map = new Map();

// map.set("name", "ali");

// // map = {};
// map.set("age", 24);

// map.forEach((v, k, m) => {
//   console.log(v);
//   console.log(k);
//   console.log(m);
// });

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// let obj = { name: "Ali", age: 32 };
// console.log(Object.keys(obj));

// let obj = { name: "Ali", age: 32 };

// let newObj = Object.entries(obj);
// console.log(newObj);

// let beforeObj = Object.fromEntries(newObj);
// console.log(beforeObj);

// let map = new Map();
// map.set(1, "one");
// map.set(2, "two");
// map.set(3, "there");

// console.log(map.entries());

// console.log(Object.fromEntries(map.entries()));

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// console.log(set);

// function fun(prop) {
//   const set = new Set(prop);
//   let res = set.values();
//   return [...res].join(",");
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// console.log(fun(values));

// function fun(prop) {
//   const set = new Set(prop);
//   return set.values();
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(fun(arr));

// let obj = {
//   name: "ali",
//   age: 24,
// };
// function getInfo() {
//   console.log(this.name, this.age);
// }

// getInfo.call(obj);

// "use strict";

// const obj = {
//   name: "Ali",
// };

// Object.defineProperty(obj, "name", {
//   writable: false,
// });
// obj.name = "Jalol";
// console.log(obj);

// let a = null;
// let b = null;

// console.log(a === b); //true

// let arr = [];
// let obj = {};

// console.log(Array.isArray(obj));

// console.log(Math.abs(-100));
// console.log(12 * (20 / 100));

// let num = 123;
// console.log(eval(`${num}`.split("").join("+")));

// let a = 2;
// let b = 3;

// function fun(a, b) {
//   return (a = b), (b = a);
// }
// fun(a, b);
// console.log(a);
// console.log(b);

// console.log(0.1 + 0.2);

// const obj = {
//   getData() {
//     return {
//       newFun: () => {
//         console.log(this);
//       },
//     };
//   },
// };

// obj.getData().newFun();

// let arr = ["eat", "tea", "bat", "nat", "ate", "tan"];

// arr.forEach((v) => {
//   v.split("").forEach((val) => {
//     console.log(val.charCodeAt());
//   });
//   //   console.log(v.split(""));
//   //   console.log(v.charCodeAt());
// });
// "use strict";
// console.log(null + undefined);
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }

// console.log("1"[2]);
// let arr = new Array(1, 2);
// let b = new Array(3, 2);
// console.log(arr[0]);
// console.log(b.length);
const repSet = (n) => {
   let result = n;

   for (let i = 0; i < n; i++) {
      result = [result];
   }

   return result;
};

console.log(repSet(0));
console.log(repSet(2));
console.log(repSet(3));
