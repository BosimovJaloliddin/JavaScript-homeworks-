// text.oncontextmenu = () => {
//   alert("hellow world");
// };
// text.oncopy = () => {
//   return false;
// };

// function onKeypress(e) {
//   text.innerHTML = e.target.value;
//   console.log(e.target.value);
// }

// =============
// let box = document.querySelector(".box");
// box.onmousemove = (e) => {
//   //   box.style.backgroundColor = `rgb(${e.y},0,0)`;
//   //   if (e.ctrlKey) box.style.backgroundColor = `rgb(${e.y},0,0)`;
// };

//==============
// let box = document.querySelector(".box");
// box.addEventListener("scroll", (e) => {
//   if (e.target.scrollTop + e.target.clientHeight + 50 > e.target.scrollHeight) {
//     box.textContent += box.textContent;
//   }
// });

// oncontextmenu

// text.addEventListener("contextmenu", () => {
//   alert("Hellow");
// });

// oncopy
// text.oncopy = () => false;

// onkeypress
// text.onkeypress = (e) => {
//   head1.textContent = e.target.value;
//   console.log(e.target.value);
// };

// onmousemove
// let box = document.querySelector(".box");
// box.onmousemove = (e) => {
//   box.style.backgroundColor = `rgb(0,${e.y},0)`;
//   console.log(e.y);
// };

// ondblclick
// let box = document.querySelector(".box");
// box.ondblclick = () => {
//   box.style.backgroundColor = "red";
// };

// keyboard
// ctrlKey=> Ctrl
// shiftKey=>shift
// altKey => alt (mac => opt)
// metaKey=>window (mac=>cmd)
// let box = document.querySelector(".box");
// box.onmousemove = (e) => {
//   if (e.metaKey) box.style.backgroundColor = `rgb(0,${e.y},0)`;
// };

// ===============
// Keyboard actions
// e.key
// e.code
// e.type

// text.onkeypress = (e) => {
//   console.log(e.key, e.code, e.type);
// };

// Scroll

// let box = document.querySelector(".box");

// box.addEventListener("scroll", (e) => {
//   if (e.target.scrollTop + e.target.clientHeight + 50 > e.target.scrollHeight) {
//     box.textContent += box.textContent;
//   }
// });

// ===================
// window.onscroll = (e) => {
//   if (window.scrollY >= 20) {
//     nav.style.boxShadow = "20px 10px 20px red";
//   } else nav.style.boxShadow = null;
// };
