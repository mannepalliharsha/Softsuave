const zod = require("zod");
const Schema = zod.object({
  email: zod.string(),
  pass: zod.string(),
  username: zod.string(),
});
module.exports = {
  Schema,
};
