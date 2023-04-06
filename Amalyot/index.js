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
