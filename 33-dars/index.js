// let body = document.querySelector("body");

// let container = document.createElement("div");
// body.prepend(container);
// let count = 101;
// for (let i = 1; i <= 10; i++) {
//   let i = document.createElement("div");
//   container.prepend(i);
//   i.setAttribute("class", "flex");
//   for (let j = 1; j <= 10; j++) {
//     count--;
//     let j = document.createElement("div");
//     j.prepend(document.createTextNode(`${count}`));
//     i.prepend(j);
//     j.setAttribute("class", "inner");
//   }
// }

// let fx = document.querySelectorAll(".flex");
// let inner = document.querySelector(".inner");

// container.style.cssText = `
//     max-width: 940px;
//     margin:0 auto;
// `;

// fx.forEach((v) => {
//   v.style.cssText = `
//         display:flex;
//         justify-content: space-between;
//     `;
// });
// inner.forEach((v) => {
//   v.style.cssText = `
//     gap:30px
//      text-align:center;
//   `;
// });

// ==============================
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// alert((window.title = "hi"));
// console.log(location.href);
// console.log(location.pathname);

// console.log(window);

// Sellectors
// let dv = document.getElementById("id");
// console.log(dv);

// let id = document.querySelector("#id");
// let id = document.querySelector("div");
// let id = document.querySelectorAll("div");
// console.log(id);

// console.log(cont.lastElementChild.previousElementSibling.nextElementSibling);

// let box = document.querySelector(".box");
// box.outerHTML = "Hellow";
