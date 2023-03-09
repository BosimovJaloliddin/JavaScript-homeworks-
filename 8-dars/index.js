//Istalgan sonni baynary ko'rinishiga o'tqazib nechta 1 va nechta 0
// qatnashganligni chiqaring?

// const getBinar = () => {
//   let randomNum = Math.trunc(Math.random() * 100);
//   let binarNum = randomNum.toString(2);

//   let res1 = 0;
//   let res0 = 0;

//   for (let i in binarNum) {
//     if (binarNum[i] == 1) {
//       res1 += 1;
//     } else {
//       res0 += 1;
//     }
//   }
//   console.log(binarNum);
//   console.log(`${res1}ta bir va ${res0}ta nol`);
// };

// getBinar();

//ex: 5===101
// res:2 ta bir, 1ta 0 qatnashgan

// ====================================
// Berilgan sonlar ichida eng katta va eng kichigni ayirmasini toping
// manfiy son chiqmasin

// console.log(
//   Math.max(1, 2, 3, 0, 5, 6, -10, 34) - Math.min(1, 2, 3, 0, 5, 6, -10, 34)
// );

// =====================================
// Math ning trunc vs floor va ceil , parseInt lar bilan farqini
// tushintirib bering

// parseInt() sonni butun qismini olib beradi
// console.log(parseInt(12.439));
// console.log(Number.parseInt(100.921));

// trunc bu istalgan kasr sonning nuqtadan keyingi sonlarini tashlab yuboradi
// console.log(Math.trunc(10.421));  //10

// floor har doim pastga qarab yaxlitlaydi
// console.log(Math.floor(10.99)); //10

// ceil har doim yuqoriga yaxlitlaydi
// console.log(Math.ceil(10.001)); //11

// floor ham trunc bilan birxilga o'xshab ko'rinadi lekin ularning farqi manfiy sonlarda bilinadi
// bir xil xolati
// console.log(Math.floor(10.4)); //10
// console.log(Math.floor(10.4)); //10

// farqli xolati
// console.log(Math.floor(-10.4)); //11
// console.log(Math.trunc(-10.4)); //10

// ================================
// randomIntiger(min,max) function yozilsin. min max oralig'idagi
// radom raqamini chiqarib bersin

// const randomIntiger = (min, max) => {
//   let res = Math.trunc(Math.random() * (max - min) + min);
//   return max > min ? res : "max qiymat min qiymatdan katta bo'lish kerak";
// };
// console.log(randomIntiger(100, 200));

// ex: min=1 max=50
// output: 1 dan 50 gacha ixtiyoriy raqam
