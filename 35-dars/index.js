import { users } from "./data.js";

let dat = users;

function del(id) {
  dat = dat.filter((vl) => vl.id !== id);
  container.innerHTML = null;
  newDat();
}

function newDat() {
  if (!dat.length) container.innerHTML = "No date";
  dat.forEach((v) => {
    let div = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerHTML = "delete";
    div.innerHTML = `${v.id}-${v.name}`;
    btn.addEventListener("click", () => del(v.id));
    div.append(btn);
    container.append(div);
  });
}

newDat();

// =====================================================

// import { users } from "./data.js";

// let dat = users;

// function del(id) {
//   dat = dat.filter((v) => v.id !== id);
//   container.innerHTML = null;

//   if (!dat.length) container.innerHTML = "No date";
//   dat.forEach((v) => {
//     let div = document.createElement("div");
//     let btn = document.createElement("button");
//     div.innerHTML = `${v.id}-${v.name}`;
//     btn.innerHTML = "delete";
//     btn.addEventListener("click", () => del(v.id));
//     container.append(div);
//     div.append(btn);
//   });
// }
// del();
