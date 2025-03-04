const express = require("express");
const { Schema } = require("./Checking");
const { dbmodel } = require("./db");
const app = express();
app.use(express.json());
function identify(req, res, next) {
  const body = req.body;
  const result = Schema.safeParse(body);
  if (!result.success) {
    res.json({
      msg: "Invalid inputs",
    });
    return;
  } else {
    next();
  }
}
app.post("/signup", identify, async function (req, res) {
  // console.log(body);
  // console.log(typeof body.username);
  // const username = parseInt(body.username);
  await dbmodel.create({
    email: req.body.email,
    pass: req.body.pass,
    username: req.body.username,
  });
  res.status(200).json({
    msg: "success",
  });
});
app.get("/users", async function (req, res) {
  const user = req.query.email;
  console.log(user);
  const result = await dbmodel.findOne({
    email: user,
  });
  console.log(result);
  if (!result) {
    res.status(404).json({
      msg: "not found",
    });
  }
  res.status(200).json({
    msg: "succes",
  });
});
app.listen(400, function () {
  console.log("Listening to the port");
});
