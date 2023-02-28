// =======================
// Bu yerda o'zgaruvchini qiymatini case lardan tekshiryabdi
// va shart bajarilsa alert ni ichidagini chiqaryabdi. Agar
// hech qaysi shart bajarilmasa defaultdagi qiymat chiqadi
// let browser = "Chrome";
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okey we support there browsers too");
//     break;
//   default:
//     alert("We hope that this page looks ok!");
// }

// =====================
// Bu yerda prompt ga son kiritdik va kiritilgan son
// qaysidir ifni shartini bajarsa alert dagi qiymat ekranga
// chiqdi
// let a = +prompt("a?", "");
// if (a === 0) {
//   alert(0);
// }
// if (a === 1) {
//   alert(1);
// }
// if (a === 2 || a === 3) {
//   alert("2, 3");
// }

// ===============
// Bu yerda while ham huddi for loopga o'xshab aylantiryabdi
// ya'ni a==0 teng bo'lish holatini kutyabdi
// let a = 3;
// while (a) {
//   console.log(a);
//   a--;
// }

// ===============
// Bu yerda i ga 1 qo'shib ketyabdi toki u beshga teng bo'lguncha
// let i = 0;
// while (++i < 0) {
//   console.log(i);
// }

// let i = 0;
// while (i++ < 0) {
//   console.log(i);
// }

// ================
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// let i = 0;
// while (i++ < 3) {
//   console.log(i);
// }

// ================
// Karra jadvalini chiqarish

// for (let i = 2; i <= 10; i++) {
//   console.log(`${i}lik karra jadvali`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i}x${j}=${i * j}`);
//   }
// }

// ===============
// Toq va juft sonlar
// for (let i = 1; i < 20; i++) {
//   i % 2 == 0 ? console.log(`${i} juft son`) : console.log(`${i} toq son`);
// }

// ===============

//Tub sonlarni chiqarish
// for (let i = 1; i <= 10; i++) {
//   let str = 0;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       str = 1;
//     }
//   }
//   if (i > 1 && str == 0) {
//     console.log(i);
//   }
// }
