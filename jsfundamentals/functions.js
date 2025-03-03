function sum(arr) {
  let total = 0;
  let price = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].order;
    price += arr[i].order * arr[i].price;
  }
  console.log(total + " " + price);
}
const arr = [
  {
    type: "shirt",
    order: 1,
    price: 200
  },
  {
    type: "pant",
    order: 2,
    price: 200
  }
];
sum(arr);
