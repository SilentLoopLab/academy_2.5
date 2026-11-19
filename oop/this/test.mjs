// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     return 42
// }

// function myNew(Constructor, ...args) {
//     let newObj = {};
//     let res = Constructor.call(newObj, ...args);
//     if ((typeof res === 'object' || typeof res === 'function') && res !== null) return res;
//     return newObj;
// }

// const obj = myNew(User, "Bob", 14);
// console.log(obj);

// const arr = [1, 2, 3, 4];
// const foo = el => console.log(el);
// Function.prototype.myCall = function myCall(thisArg, ...args) {
//     let sym = Symbol("chlp");
//     thisArg[sym] = this;
//     const res = thisArg[sym](...args);
//     delete thisArg[sym];
//     return res;
// }

// arr.forEach(foo);
// Array.prototype.forEach.call(arr, foo);
// Array.prototype.forEach.myCall(arr, foo);
// Array.prototype.forEach.apply(arr, [foo])

// console.log(new Set([1, 2, 3]))

function greet() {
    return this;
}
const obj = {
    name: "Alice",
}

Function.prototype.myBind = function (thisArg, ...args) {
    let self = this;
    return function (...newArgs) {
        return self.call(thisArg, ...args, ...newArgs);
    }
}

const bounded = greet.myBind(obj);
console.log(bounded());