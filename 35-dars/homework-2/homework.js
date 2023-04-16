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
// console.log(container);

// ================================================

let con = document.createElement("div");
let wrapper = document.createElement("div");
let minWrap = document.createElement("div");
let image1 = document.createElement("img");
let image2 = document.createElement("img");

image1.setAttribute("src", "./image/arrow1.jpg");
image2.setAttribute("src", "./image/arrow1.jpg");

con.style.cssText = `
  display:flex;
  align-items:center;
  width:800px;
  margin:0 auto;
`;
wrapper.style.cssText = `
  width:450px;  
  margin:40px auto;
  border:5px solid green;
  border-radius:7px;
  overflow:hidden;
`;
minWrap.style.cssText = `
  display:flex;
  transform: translate(0px);
`;
image1.style.cssText = `
  width:40px;
  height:40px;
  transform: rotate(180deg);
  cursor:pointer;
`;
image2.style.cssText = `
  width:40px;
  height:40px;
  cursor:pointer;
`;

for (let k = 1; k <= 9; k++) {
  let creatImg = document.createElement("img");
  creatImg.setAttribute("src", `./image/${k}.png`);

  creatImg.style.cssText = `
    width:150px;
    height:150px;
  `;
  minWrap.prepend(creatImg);
}

let count = 0;
image1.onclick = () => {
  if ((count = 0)) {
    image1.style.cssText = `
      border:2px solid red;
      width:40px;
      height:40px;
      cursor:pointer;
      transform: rotate(180deg);
    `;
  } else {
    minWrap.style.cssText = `
    display:flex;
    transform: translate(${(count += 150)}px);
    scroll-behavior: smooth;
    `;
  }
  console.log(count);
};
image2.onclick = () => {
  if (count <= -900) {
    image2.style.cssText = `
      border:2px solid red;
      width:40px;
      height:40px;
      cursor:pointer;
    `;
  } else {
    minWrap.style.cssText = `
    display:flex;
    transform: translate(${(count -= 150)}px);
    scroll-behavior: smooth;
  `;
  }
  console.log(count);
};

body.append(con);
con.append(wrapper);
wrapper.append(minWrap);
wrapper.before(image2);
wrapper.after(image1);
// ========================================

let wrapCon = document.createElement("div");

for (let i = 1; i <= 3; i++) {
  let wrapBox = document.createElement("div");
  let wrapTitle = document.createElement("div");
  let title2 = document.createElement("h4");
  let del2 = document.createElement("p");
  let text2 = document.createElement("p");

  wrapCon.append(wrapBox);
  wrapBox.append(wrapTitle);
  wrapBox.append(text2);
  wrapTitle.append(title2);
  wrapTitle.append(del2);

  title2.innerHTML = `Hellow my friend ${i}`;
  del2.innerHTML = "x";
  text2.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti distinctio voluptatum delectus libero ratione ad.
    Incidunt, laudantium porro harum quas velit voluptatum voluptate fugiat illum dolore natus. Laudantium accusamus
    distinctio in hic, fugiat tenetur, eum maiores nihil, repudiandae architecto dicta beatae animi voluptas sequi et.
    Nesciunt laudantium ratione dolor possimus?`;

  wrapTitle.style.cssText = `
    display:flex;
    justify-content:space-between;
    padding-left:40px;
    padding-right:40px;
`;
  del2.style.cssText = `
    cursor:pointer;
    border:1px solid black;
    padding:3px 7px;
`;
  text2.style.cssText = `
    padding-left:30px;
    padding-right:30px;
`;

  del2.onmouseover = () => {
    del2.style.cssText = `
      cursor:pointer;
      color:red;
      border:1px solid black;
      padding:3px 7px;
      background-color:yellow;
  `;
  };
  del2.onmouseout = () => {
    del2.style.cssText = `
      cursor:pointer;
      border:1px solid black;
      padding:3px 7px;
  `;
  };
  function delInfo() {
    if (wrapCon.children.length === 0) {
      wrapCon.innerText = "No info";
    } else {
      wrapBox.outerHTML = null;
    }
  }
  del2.addEventListener("click", () => delInfo());
}

// console.log(wrapCon.children);
body.append(wrapCon);

wrapCon.style.cssText = `
  width:800px;
  border:1px solid #888;
  margin:30px auto;
`;
