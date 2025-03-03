greet();
function greet() {
  console.log("Good morning");
} // function declaration are hoisted
// const greet = function () {
//   console.log("Good Evening");
// }; // function expression are not hoisted

// variable hoisting
console.log(a);
var a = 2;
let b;
console.log(b);
b = 5;
// class is not hoisted
