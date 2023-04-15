let container = document.querySelector(".container");
let div = document.createElement("div");
let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png"
);

container.append(div);
div.append(img);
container.style.cssText = `

`;
div.style.cssText = `
    position:relative;
    width:900px;
    height:400px;
    background-color:green;
    border:3px solid red;
`;
img.setAttribute("style", "width:30px;heigth:30px");
div.onclick = function (e) {
  img.style.cssText = `
              position:absolute;  
              top:${e.y}px;
              left:${e.x}px;
              width:30px;
              height:30px;
          `;
};

// console.log(container);
