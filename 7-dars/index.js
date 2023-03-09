// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name); // undefined

// =====================

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
//   read(a, b) {
//     this.b = b;
//     this.a = a;
//     this.b = b;
//   },
// };

// calculator.read(1, 2);
// console.log(calculator.mul());
// console.log(calculator.sum());

