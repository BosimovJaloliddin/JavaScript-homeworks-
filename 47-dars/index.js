// fetch("./txt.txt")
//   .then((res) => res.text())
//   .then((res) => {
//     console.log(res);
//   });
const login = async () => {
  fetch("http://localhost:8081/api/public/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res?.authenticationToken);
    });
};

const onSubmit = async () => {
  let res = await fetch(`http://localhost:8081/api/v1/categories/list`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => res.json());
  console.log(res);
};

const getCategory = async () => {
  let res = await fetch("http://localhost:8081/api/v1/houses/list").then(
    (res) => res.json()
  );

  res.data?.forEach((v) => {
    div = document.createElement("div");
    div.innerHTML = `${v.id} - ${v.name}  <button onclick="onSubmit()">get info</button>`;
    category.append(div);
  });
};
