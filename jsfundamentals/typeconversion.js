// Convert a user-entered string price to a number to calculate discounts.
const price = "127";
const value = parseInt(price);
console.log(typeof value);
const dis = 180;
const res = value + dis;
console.log(res);

const arr = [1, 2, 3, 4, 5];
arr.map(function (element, index) {
  console.log(element + "INDEX" + index);
});
