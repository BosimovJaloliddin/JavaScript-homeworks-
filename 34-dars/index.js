// let con = document.querySelector(".container");

// console.log(con.getBoundingClientRect());

// function btn() {
//   con.scrollTo(0, 100);
// }

// console.log(con.clientHeight);
// console.log(con.offsetHeight);
// console.log(con.clientWidth);
// console.log(con.offsetWidth);
// console.log(con.clientTop);
// console.log(con.clientLeft);
// console.log(con.offsetTop);
// console.log(con.offsetLeft);
// console.log(con.scrollHeight);
// console.log(con.scrollTop);

// function btn() {
//   con.classList.remove("container");
// }
// style
// con.style.cssText = `
//     background-color:red;
//     color:white;
// `;

// Clone Node
// let box = document.querySelector(".box");
// box = con.cloneNode(true);
// console.log(box);

// Creating element
// let box = document.createElement("div");
// let text = document.createTextNode("qwertyuiop");
// box.prepend(text);
// con.prepend(box);

// Attribute
// console.log(con.removeAttribute("class"));
// console.log(con.setAttribute("id", "id"));
// console.log(con.getAttribute("class"));
// console.log(con.hasAttribute("id"));

// =================================
// homework
let con = document.querySelector(".container");
let conButton = document.querySelector(".button1");
let button = document.querySelectorAll("button");

con.style.cssText = `
    font-size:24px;
    font-weight:400;
    width:400px;
    height:400px;
    padding:10px;
    margin:0 auto;
    overflow:auto;
    border:2px solid aqua;
`;

conButton.style.cssText = `
    display:flex;
    justify-content: center;
    gap:20px;
    margin-top:20px;
`;

button.forEach((v) => {
  v.style.cssText = `
      font-size:24px;
      font-weight:400;
      width:200px;
      height:40px;
      background-color:blue;
      color:white;
      text-transle;
      text-transform:uppercase;
      border:none;
  `;
});

function btnBottom() {
  return con.scrollBy(0, 40);
}
function btnTop() {
  return con.scrollBy(0, 340 - con.clientHeight);
}
