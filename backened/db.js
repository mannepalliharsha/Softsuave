const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://harshamannepalli88:harsha1@cluster0.yobv7cc.mongodb.net/revise"
);
const format = new mongoose.Schema({
  email: String,
  pass: String,
  username: String,
});
const dbmodel = mongoose.model("databse", format);
module.exports = {
  dbmodel,
};
