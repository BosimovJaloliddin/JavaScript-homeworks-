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
//   },
// };

// calculator.read(1, 2);
// console.log(calculator.mul());
// console.log(calculator.sum());

// ============================

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function () {
//     this.step = step;
//   },
// };

// console.log(ladder.step);
// ladder.up();
// console.log(ladder.step);

// ===========================
// function A() {
//   this.name = "Ali";
// }
// function B() {
//   this.name = "Ali";
// }
// let a = new A();
// let b = new B();

// console.log(a == b); //false
