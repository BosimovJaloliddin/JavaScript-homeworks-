// Classes

// class User {
//   get welcom() {
//     console.log(`My name is ${this.name}, age ${this.age}`);
//   }
//   set welcom(vl) {
//     this.name = vl.name;
//     this.age = vl.age;
//   }
// }

// let user = new User();
// user.welcom = { name: "Ali", age: 27 };
// user.welcom;

// console.log(user);
// user.welcom();

// let user1 = new User();
// let user2 = new User();

// user1.welcom();
// user1.welcom();
// user1.welcom();
// user1.welcom();
// user1.welcom();
// user2.welcom();
// user2.welcom();
// user2.welcom();

// user.welcom("Jaloliddin");
// user.welcom("Ertosh");
// user.welcom("Nodir");

// ===================
// Computed names

// class User {
//   ["esh" + "mat"](title) {
//     console.log(title);
//   }
// }

// let user = new User();
// user.eshmat("zo'ra");

// ===========================

// class Speed {
//   speed() {
//     console.log(`200km/hour`);
//   }
// }

// class Rebbit extends Speed {
//   car() {
//     console.log("Ferrari");
//   }
//   info() {
//     this.car();
//     super.speed();
//   }
// }

// let sp = new Speed();
// let rb = new Rebbit();

// rb.info();
// rb.speed(12);

// ============
// Overriding constructor
// class Com0
