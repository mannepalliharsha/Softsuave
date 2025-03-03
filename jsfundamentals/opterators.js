const a = 2;
const b = 3;
const add = a * b;
const sub = a - b;
const div = a / b;
const modu = a % b;
const mul = a * b;
console.log(add + " " + sub + " " + div + " " + modu + " " + mul);
// expressions
if (a > b) {
  console.log(a + "is greater than" + b);
} else if (b > a) {
  console.log(b + "is greater than" + a);
} else {
  console.log(a + "is equal to" + b);
}
switch (true) {
  case a > b:
    console.log(a + "is greater than" + b);
    break;
  case b > a:
    console.log(b + "is greater than" + a);
    break;
  default:
    console.log(a + "is equal to" + b);
}
