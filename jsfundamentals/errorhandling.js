const value = [
  {
    user: "harsha",
    pass: "harsha@1",
  },
  {
    user: "vardhan",
    pass: "vardhan@1",
  },
  {
    user: "Ram",
    pass: "ram@1",
  },
];
// let result = false;
// for (let i = 0; i < value.length; i++) {
//   if (value.user == "harsha" && value.pass == "harsha@1") {
//     result = true;
//     break;
//   }
// }
// if (!result) {
//   console.log("wrong credentials");
// }
// this is the one way
try {
  let result = false;
  for (let i = 0; i < value.length; i++) {
    if (value[i].user === "harsha1" && value[i].pass === "harsha@1") {
      result = true;
      break;
    }
  }
  console.log(result);
  if (!result) {
    throw new Error("wrong credentials");
  } else {
    console.log("right credentials");
  }
} catch (e) {
  console.log(e);
}
