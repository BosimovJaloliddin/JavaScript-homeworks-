let container = document.querySelector(".container");
let div = document.createElement("div");
let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://parspng.com/wp-content/uploads/2022/02/ballpbg.parspng.com-8.png"
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
    border:7px solid red;
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
