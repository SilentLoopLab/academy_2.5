function counter() {
    let a = 0;
    function add() {
        return ++a;
    }
    return add;
}

const bar1 = counter();
const bar2 = counter();
// console.log(bar1);
// console.log(bar2);
console.log(bar1());
console.log(bar1());
console.log(bar2());
console.log(bar1());

