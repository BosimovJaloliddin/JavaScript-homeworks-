// ==============1-masala===========
// function yozilsin va recorsion orqali n gacha bo'lgan sonlar yig'indisini toping

// const sumTo = (n) => {
//   if (n === 1) return 1;
//   else {
//     return n + sumTo(n - 1);
//   }
// };

// console.log(sumTo(3));

// ==============2-masala===========
// function yozilsin va recorsion orqali n factorial topilsin

// const getFuc = (n) => {
//   return n === 1 ? 1 : n * getFuc(n - 1);
// };
// console.log(getFuc(4));

// ==============3-masala===========
//n-fibonacci sonini toping
//F(n)=F(n-1)+F(n-2)

// let ar = [0, 1];
// let sum = 0;
// const getFib = (n) => {
//   if (n === 1);
//   else {
//     let num = ar[ar.length - 2] + ar[ar.length - 1];
//     ar.push(num);
//     getFib(n - 1);
//   }
// };
// getFib(77);
// console.log(ar[ar.length - 1]);

// ==============4-masala===========
// recorsionda salarylar yig'indisini toping
//
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

// const sum = (obj) => {
//   Object.values(obj).forEach((v) => {
//     if (Array.isArray(v)) {
//       let s = v.reduce((sum, cur) => {
//         return sum + cur.salary;
//       }, 0);
//       res += s;
//     } else {
//       return sum(v);
//     }
//   });
// };
// sum(webbrain);
// console.log(res);
