function counter() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  function decrement() {
    count--;
    console.log(count);
  }
  function getcount() {
    let temp = count;
    count = 0;
    return temp;
  }
  return { increment, decrement, getcount };
}
const closure = counter();
closure.increment();
closure.increment();
//closure.decrement();
console.log(closure.getcount());
closure.increment();
