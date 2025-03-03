const promise = new Promise(function (req, res) {
  const value = "hey";
  if (value === "harsha") {
    res("Success");
  } else {
    req("error");
  }
});
promise.then(
  function (value) {
    console.log(value);
  },
  function (err) {
    console.log(err);
  }
);
const newone = new Promise(async function (resolve, reject) {
  const age = 18;
  if (age >= 18) {
    resolve("eligible");
  } else {
    reject("error");
  }
});
async function check() {
  try {
    const result = await newone;
    console.log(result);
  } catch (e) {
    console.log("error");
  }
}
check();
