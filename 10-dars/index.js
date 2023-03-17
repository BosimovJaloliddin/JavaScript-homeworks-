// ============================
// Array ichidagi sonlar yig'indisini toping
// 1-usul

// let ar = [4, 6, 6, 8, 9];
// let res = 0;
// const getSum = (nums) => {
//   for (let i in nums) {
//     if (isFinite(nums[i])) res += nums[i];
//   }
// };
// getSum(ar);
// console.log(res);

// 1 - usul;
// console.log(eval(ar.join("+")));

// ============================
// Arrayni ichidagi stringlarni bir xil xarflarini yig'ing

// let ar = ["webbrain", "academy"];
// const getAlphabit = (ar) => {
//   let str = ar.join("");
//   let res = {};
//   for (char1 of str) {
//     res[char1] = 0;
//   }

//   for (i in res) {
//     for (char2 of str) {
//       if (i == char2) {
//         res[i]++;
//       }
//     }
//   }

//   return res;
// };

// console.log(getAlphabit(ar));

// ex: let ar=["webbrain" , "academy"],
// res = {
//   w: 1,
//   e: 2,
//   b: 2,
//   r: 1,
//   n: 1,
//   c: 1,
//   a: 3,
//   i: 1,
//   d: 1,
//   m: 1,
// };
