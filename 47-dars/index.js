// fetch("./txt.txt")
//   .then((res) => res.text())
//   .then((res) => {
//     console.log(res);
//   });

formEvent.onsubmit = (e) => {
  e.preventDefault();
  let body = new FormData(formEvent);
  body.append("userImg", file.files[0]);
  body.append("secretNum", "12");
  body.delete("email");
  fetch("http://httpbin.org/post", {
    method: "POST",
    body,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};
