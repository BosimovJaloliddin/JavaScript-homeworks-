let body = document.querySelector("body");
let container = document.createElement("div");
let nav = document.createElement("div");
let img = document.createElement("img");
let h3 = document.createElement("h3");
let box = document.createElement("div");
let item1 = document.createElement("div");
let item2 = document.createElement("div");
let item3 = document.createElement("div");

h3.innerHTML = `Sweeties (click me)!`;
img.setAttribute("src", "./image/arrow.png");

item1.innerHTML = `Cake`;
item2.innerHTML = `Done`;
item3.innerHTML = `Honey`;

container.style.cssText = `
  margin: 0 auto;
  margin: 20px;
  border: 1px solid #888;
  padding: 10px;
`;
nav.style.cssText = `
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;
img.style.cssText = `
  width: 20px;
  height: 20px;
`;
box.style.cssText = `
  padding-left: 20px;
`;

nav.onclick = () => {
  box.classList.toggle("none");
  img.classList.toggle("see");
};

body.append(container);
container.append(nav);
container.append(box);
nav.append(img);
nav.append(h3);
box.append(item1);
box.append(item2);
box.append(item3);
console.log(container);

// ================================================
