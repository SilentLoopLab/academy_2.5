function c() {
    function b(a, c, ...d) {
        console.log(b.caller.toString());
        console.log(a, c, d);
    }
    b();
}
c();
