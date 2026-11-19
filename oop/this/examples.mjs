// ===== Example 1 =====
// function greet(greeting, mark) {
//     return greeting + ", " + this.name + mark;
// }
//
// const alice = { name: "Alice" };
//
// console.log(greet.call(alice, "Hi", "!"));
// console.log(greet.apply(alice, ["Hello", "?"]));

// ===== Example 2 =====
// function sum() {
//     return this.a + this.b;
// }
//
// console.log(sum.call({ a: 1, b: 2 }));
// console.log(sum.call({ a: 5, b: 5 }));

// ===== Example 3 =====
// const alice = {
//     name: "Alice",
//     greet() {
//         return "I am " + this.name;
//     }
// };
//
// const bob = { name: "Bob" };
//
// console.log(alice.greet.call(bob));

// ===== Example 4 =====
// function show() {
//     return this;
// }
//
// console.log(show.call(null));
// console.log(show.call(42));

// ===== Example 5 =====
// const numbers = [3, 7, 2];
//
// console.log(Math.max.apply(null, numbers));
// console.log(Math.max(...numbers));

// ===== Example 6 =====
// function greet(greeting) {
//     return greeting + ", " + this.name;
// }
//
// console.log(greet.apply({ name: "Ann" }));

// ===== Example 7 =====
// const user = {
//     name: "Alice",
//     greet() {
//         return "Hi, " + this.name;
//     }
// };
//
// const greet = user.greet;
// console.log(greet.call(user));

// ===== Example 8 =====
// const user = {
//     name: "Alice",
//     greet() {
//         return "Hi, " + this.name;
//     }
// };
//
// const greet = user.greet;
// console.log(greet.call(user));
// console.log(greet());

// ===== Example 9 =====
// const user = {
//     name: "Alice",
//     greet() {
//         return "Hi, " + this.name;
//     }
// };
//
// function run(fn) {
//     return fn();
// }
//
// console.log(run(user.greet.bind(user)));

// ===== Example 10 =====
// function getName() {
//     return this.name;
// }
//
// const bound = getName.bind({ name: "Alice" });
//
// console.log(bound());
// console.log(bound === getName);

// ===== Example 11 =====
// function getName() {
//     return this.name;
// }
//
// const f = getName.bind({ name: "A" }).bind({ name: "B" });
// console.log(f());

// ===== Example 12 =====
// function getName() {
//     return this.name;
// }
//
// const bob = {
//     name: "Bob",
//     getName: getName.bind({ name: "Alice" })
// };
//
// console.log(bob.getName());

// ===== Example 13 =====
// function getName() {
//     return this.name;
// }
//
// const bound = getName.bind({ name: "Alice" });
// console.log(bound.call({ name: "Bob" }));

// ===== Example 14 =====
// function multiply(a, b) {
//     return a * b;
// }
//
// const double = multiply.bind(null, 2);
// const triple = multiply.bind(null, 3);
//
// console.log(double(5));
// console.log(triple(5));

// ===== Example 15 =====
// function add(a, b) {
//     return this.base + a + b;
// }
//
// const f = add.bind({ base: 10 }, 1);
// console.log(f(2));

// ===== Example 16 =====
// const team = {
//     name: "Lions",
//     members: ["Ann", "Bob"],
//     print() {
//         this.members.forEach(function (member) {
//             console.log(member + " - " + this.name);
//         }.bind(this));
//     }
// };
//
// team.print();

// ===== Example 17 =====
// function User(name) {
//     this.name = name;
// }
//
// const BoundUser = User.bind({ name: "ignored" });
// const u = new BoundUser("Alice");
//
// console.log(u.name);

// ===== Example 18 =====
// const user = {
//     name: "Alice",
//     getThis: () => this
// };
//
// console.log(user.getThis());

// ===== Example 19 =====
// const team = {
//     name: "Lions",
//     members: ["Ann", "Bob"],
//     print() {
//         this.members.forEach(member => {
//             console.log(member + " - " + this.name);
//         });
//     }
// };
//
// team.print();

// ===== Example 20 =====
// const user = {
//     name: "Alice",
//     getGreet() {
//         return () => this.name;
//     }
// };
//
// const greet = user.getGreet();
// console.log(greet());

// ===== Example 21 =====
// const user = {
//     name: "Alice",
//     getGreet() {
//         return () => this.name;
//     }
// };
//
// const greet = user.getGreet();
// console.log(greet.call({ name: "Bob" }));

// ===== Example 22 =====
// const f = () => this;
// const g = f.bind({ x: 1 });
//
// console.log(g());

// ===== Example 23 =====
// function outer() {
//     return () => this;
// }
//
// const o = { outer };
//
// console.log(outer()());
// console.log(o.outer()() === o);

// ===== Example 24 =====
// const user = {
//     name: "Ann",
//     tags() {
//         return [1, 2].map(x => this.name + x);
//     }
// };
//
// console.log(user.tags());

// ===== Example 25 =====
// const User = (name) => {
//     this.name = name;
// };
//
// const u = new User("Alice");
// console.log(u.name);

// ===== Example 26 =====
// function User(name) {
//     this.name = name;
//     this.greet = () => "Hi, " + this.name;
// }
//
// const u = new User("Alice");
// const greet = u.greet;
// console.log(greet());

// ===== Example 27 =====
// const counter = {
//     count: 0,
//     incRegular() {
//         this.count++;
//     },
//     incArrow: () => {
//         this.count++;
//     }
// };
//
// counter.incRegular();
// console.log(counter.count);
// counter.incArrow();

// ===== Example 28 =====
// function myBind(fn, ctx) {
//     return function (...args) {
//         return fn.call(ctx, ...args);
//     };
// }
//
// function getName() {
//     return this.name;
// }
//
// const f = myBind(getName, { name: "Alice" });
// console.log(f(), f.call({ name: "Bob" }));

// ===== Example 29 =====
// const user = {
//     name: "Alice",
//     greet() {
//         const a = () => {
//             const b = () => this.name;
//             return b();
//         };
//         return a();
//     }
// };
//
// console.log(user.greet());

// ===== Example 30 =====
// const obj = {
//     name: "obj",
//     regular() {
//         return this ? this.name : "no this";
//     },
//     arrow: () => typeof this,
//     nested() {
//         const arrow = () => this.name;
//         function inner() {
//             return this;
//         }
//         return [arrow(), inner()];
//     }
// };
//
// const { regular } = obj;
//
// console.log(obj.regular());
// console.log(regular());
// console.log(obj.arrow());
// console.log(obj.nested());