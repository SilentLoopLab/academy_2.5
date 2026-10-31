function counter () {
    let count = 0;
    return function increment() {
        ++count;
        return count;
    }
}
const increment1 = counter();
// const increment2 = counter();
++count;
console.log(increment1());
console.log(increment1());
// console.log(increment2());
console.log(increment1());