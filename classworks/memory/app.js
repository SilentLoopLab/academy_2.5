// No 'use strict' here: assigning without var/let would throw in strict mode.

class MyCustomType {
  constructor() {
    // ===================== Strings =====================
    // this.str1 = 'hello';                      // literal → internalized
    // this.str2 = 'hello';                      // same @id as str1
    // this.strRuntime = ['hel', 'lo'].join(''); // built at runtime → different @id
    // this.strAlias = this.strRuntime;          // same @id as strRuntime
    // this.strCons = this.strRuntime + ', students! How are you?'; // (concatenated string): first / second
    // this.strSliced = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'.slice(6, 40); // sliced string → parent

    // // ===================== Numbers =====================
    // this.numSmi = 42;              // Smi: stored inline, no separate heap object
    // this.numDouble = 3.14;         // heap number
    // this.numBig = 2 ** 31;         // outside Smi range → heap number
    // this.numNaN = NaN;             // heap number
    // this.numInfinity = Infinity;   // heap number
    // this.bigint = 12n; // BigInt

    // // ===================== boolean / null / undefined =====================
    // // Oddballs: exactly one instance of each per heap
    // this.bool1 = true;
    // this.bool2 = true;             // same @id as bool1
    // this.boolFalse = false;
    // this.nullValue = null;
    // this.undefinedValue = undefined;

    // // ===================== Symbol =====================
    // this.sym1 = Symbol('id');
    // this.sym2 = Symbol('id');               // different @id from sym1
    // this.symGlobal1 = Symbol.for('app.id');
    // this.symGlobal2 = Symbol.for('app.id'); // same @id as symGlobal1

    // // ===================== Arrays =====================
    // this.arrSmi = [1, 2, 3];               // numbers stored directly in (object elements)
    // this.arrDouble = [1.5, 2.5, 3.5];      // raw doubles, no heap number per element
    // this.arrStrings = ['hello', 'hello', 'world']; // both 'hello' = str1
    // this.arrMixed = [42, 3.14, 'hello', true, null, undefined, { x: 1 }, [1, 2]]; // pointers to different types
    // this.arrHoley = [1, , 3];              // has a hole
    // this.arrAlias = this.arrMixed;         // same @id as arrMixed
    // this.arrCopy = [...this.arrMixed];     // new @id, same elements inside

    // // ===================== Objects =====================
    this.obj1 = { name: 'Alice', age: 25 };
    this.obj2 = { name: 'Bob', age: 30 };           // same shape → same map (hidden class)
    this.objReordered = { age: 25, name: 'Alice' }; // different field order → different map
    this.objAlias = this.obj1;                      // same @id as obj1
    this.objCopy = { ...this.obj1 };                // new @id, same 'Alice' inside
    this.objNested = { level1: { level2: { name: 'Alice' } } }; // same 'hello' deep inside
  }
}

function createObject() {
  myCustomObject = new MyCustomType();
}