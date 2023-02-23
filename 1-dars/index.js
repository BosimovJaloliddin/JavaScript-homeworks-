// JS data turlarni misollar orqali tushintirib bering.

// 1. Number
let num = 12345;
console.log(typeof num); //number

// 2. Bigint
let bigInt = 9007199254740991n + 10n;

// String
let str1 = "Hello world";
let str2 = `Hello world ${str1}`;
let str3 = "Hello \n world";
// let str4 = "Hello \"....\" world";
let str5 = "Hellow\tworld";

// console.log(typeof str1, typeof str2);

// Boolean

let bl1 = Boolean(0);
let bl2 = Boolean(1);

let obXavo = "issiq";
if (obXavo == "sovuq") {
  console.log("Yengilroq kiyining");
} else if (obXavo == "sovuq") {
  //false
  console.log("Qalin kiyining");
} else if (obXavo == "yomgir") {
  //false
  console.log("Soyabon oling");
} else if ((obXavo = "issiq")) {
  //true
  console.log("Yengil kiyining");
} else {
  console.log("bilganizni qiling");
}
// Null

let a = null;
// console.log(a); //null

// undifined

let b;
// console.log(b); //undefined
// console.log(b == a); //true
// console.log(undefined == null); //true

//Symbol

let sym1 = Symbol(100);
let sym2 = Symbol(100);
// console.log(sym1 == sym2); //false

// Object
let obj = {
  name: "Ali",
  surname: "Aliyev",
  age: 25,
};
// console.log(obj);

// String. Consolda qanday javob chiqadi

let name = "Ilya";

// console.log(`Hello ${1}`); //Hello 1
// console.log(`Hello ${"name"}`); //Hello name
// console.log(`Hello ${name}`); //Hello Ilya


