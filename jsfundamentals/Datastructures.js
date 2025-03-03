const arr = [
  {
    title: "java",
    status: "completed",
  },
  {
    title: "react.js",
    status: "completed",
  },
  {
    title: "javascript",
    status: "notcompleted",
  },
];
const newtodos = [
  {
    title: "html",
    status: "notcompleted",
  },
  {
    title: "typescript",
    status: "notcompleted",
  },
];
for (let i = 0; i < newtodos.length; i++) {
  arr.push(newtodos[i]);
}
const newone = [...arr]; // spread operator is expands array into separates the indivudal element

console.log(arr);
console.log(newone);
// rest operator , seperate element into an array
function sum(...items) {
  let result = 0;
  for (let i = 0; i < items.length; i++) {
    result += items[i];
  }
  console.log(result);
}
sum(1, 2, 3, 4, 5);

// map function is to return new arrau
// filter it is only returns when it meets condition
// reduce it reduces into an single value
const elements = [1, 2, 3, 4, 5, 6];
const newarr = elements.filter((element) => {
  return element % 2 == 0;
});
console.log(newarr);
const sum1 = elements.reduce(function (inital, current) {
  inital += current;
  return inital;
}, 0);
console.log(sum1);
