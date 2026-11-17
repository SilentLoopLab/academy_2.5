"use strict";

// ===== Example 1 =====

// const user = {
//     age: 25,
//     getAge() {
//         return this.age;
//     }
// };

// console.log(window.getAge());

// ===== Example 2 =====
// function hi() {
//     return this;
// }

// const obj = {
//     "hi": hi 
// };
// console.log(obj.hi() === obj);
// console.log(obj.hi() === obj);

// ===== Example 3 =====
// const point = {
//     x: 1,
//     move() {
//         this.x++;
//     }
// };

// point.move();
// point.move();
// console.log(point.x);

// ===== Example 4 =====
// const point = {
//     x: 10,
//     getX() {
//         return this.x;
//     }
// };

// const g = point.getX;
// console.log(typeof g);

// ===== Example 5 =====
// const cat = {
//     sound: "meow",
//     speak() {
//         return this.sound + "!";
//     }
// };

// const dog = { 
//     sound: "woof",
//     speak: cat.speak 
// };
// console.log(cat.speak(), dog.speak());

// ===== Example 6 =====
// function Dog(name) {
//     this.name = name;
// }

// const d = new Dog("Rex");
// console.log(d.name);

// ===== Example 7 =====
// function Dog(name) {
//     this.name = name;
// }

// const a = new Dog("Rex");
// const b = new Dog("Max");
// console.log(a.name, b.name);

// ===== Example 8 =====
// function Box(value) {
//     this.value = value;
// }

// const box = new Box(5);
// box.value = 10;
// console.log(box.value);

// ===== Example 9 =====
// const rect = {
//     width: 4,
//     height: 5,
//     area() {
//         return this.width * this.height;
//     }
// };

// console.log(rect.area());

// ===== Example 10 =====
// const user = { name: "Ann" };

// user.say = function () {
//     return "I am " + this.name;
// };

// console.log(user.say());

// ===== Example 11 =====
// const user = { name: "Ann" };

// user.say = function () {
//     return "I am " + this.name;
// };

// const say = user.say;
// console.log(say());

// ===== Example 12 =====
// function f() {
//     return this === undefined;
// }

// console.log(f());

// ===== Example 13 =====
// function Cart() {
//     this.items = [];
// }

// const cart = new Cart();
// cart.items.push("apple");
// console.log(cart.items.length);

// ===== Example 14 =====
// function Cart() {
//     this.items = [];
// }

// const c1 = new Cart();
// const c2 = new Cart();
// c1.items.push("apple");
// console.log(c2.items.length);

// ===== Example 15 =====
// function Person(name) {
//     this.name = name;
//     this.hi = function () {
//         return "Hi, " + this.name;
//     };
// }

// console.log(new Person("Ann").hi());

// ===== Example 16 =====
// const shop = {
//     name: "Shop",
//     owner: { name: "Ann" },
//     getOwner() {
//         return this.owner.name;
//     }
// };

// console.log(shop.getOwner());

// ===== Example 17 =====
// const a = {
//     b: {
//         c: {
//             name: "deep",
//             get() {
//                 return this.name;
//             }
//         }
//     }
// };

// console.log(a.b.c.get());

// ===== Example 18 =====
// function Car(model) {
//     this.model = model;
// }

// const car = Car("BMW");
// console.log(car);

// ===== Example 19 =====
// const counter = {
//     n: 0,
//     inc() {
//         this.n++;
//         return this.n;
//     }
// };
//
// console.log(counter.inc(), counter.inc());

// ===== Example 20 =====
// function Wallet(money) {
//     this.money = money;
//     this.spend = function (x) {
//         this.money -= x;
//         return this.money;
//     };
// }
//
// const w = new Wallet(100);
// w.spend(30);
// console.log(w.spend(20));
