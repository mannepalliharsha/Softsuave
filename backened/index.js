const express = require("express");
const { Schema } = require("./Checking");
const { dbmodel } = require("./db");
const app = express();
app.use(express.json());
app.post("/signup", async function (req, res) {
  const body = req.body;
  const result = Schema.safeParse(body);
  if (!result.success) {
    res.json({
      msg: "Invalid inputs",
    });
  }
  console.log(body);
  console.log(typeof body.username);
  // const username = parseInt(body.username);
  await dbmodel.create({
    email: body.email,
    pass: body.pass,
    username: body.username,
  });
  res.status(200).json({
    msg: "success",
  });
});
app.listen(400, function () {
  console.log("Listening to the port");
});
