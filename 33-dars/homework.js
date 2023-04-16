let body = document.querySelector("body");
let container = document.createElement("div");
let count = 0;

container.style.cssText = `
    max-width: 700px;
    margin:3rem auto;
    border:2px solid #888;
`;

for (let i = 1; i <= 10; i++) {
  let line = document.createElement("div");
  container.append(line);

  line.style.cssText = `
    display:flex;
    justify-content: space-around;
    align-items:center;
  `;

  for (let j = 1; j <= 10; j++) {
    count++;
    let box = document.createElement("div");
    box.innerHTML = `${count}`;
    function test(pr) {
      for (let a of container.children) {
        for (let b of a.children) {
          if (b.textContent % pr === 0) {
            b.innerHTML = "*";
            b.style.cssText = `
             background-color: red;
            `;
          }
        }
      }
    }
    box.addEventListener("click", () => test(box.textContent));
    line.append(box);

    box.style.cssText = `
        cursor:pointer;
    `;
  }
}

body.append(container);
