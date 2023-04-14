// class Events {
//   handleEvent(e) {
//     console.log(e);
//   }
// }
// let evn = new Events();

// btn.addEventListener("click", evn);
// btn.addEventListener("mousedown", evn);
// btn.addEventListener("mouseup", evn);
`
let target;
tb.onclick = function (e) {
  if (target) target.classList.remove("adding");
  target = e.target;
  target.classList.add("adding");
};`;
