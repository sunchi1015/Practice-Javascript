console.log("Number of ways to create OBJECTS");

// 1. OBject litera;
const obj1 = {};
// 2. Constructor function
const ob2 = new Object();
// 3. with prototype
const ob3 = Object.create(null);
// 4. function constructor
function Person() {
  this.name = "Abc";
  this.age = 26;
}
const ob4 = new Person();
// 5. Function constructor with prototype
function Person1() {}
Person1.prototype.name = "Xyz";
const ob5 = new Person1();
// 6. ES6 class
class Person2 {
  constructor(name) {
    this.name = name;
  }
}
const ob6 = new Person2("Abc");
// 7. Singleton
const ob7 = new (function () {
  this.name = "xyz";
})();

console.log("OB7 -->", ob7);
