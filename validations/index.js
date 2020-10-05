const { authUserValidate } = require("./user/validation/userAuth.validation");
const {
  registerUserValidate,
} = require("./user/validation/userRegister.validation");
const {
  ValidationComment,
} = require("./comment/validation/commentpos.validation");
const { ValidPost } = require("./post/validation/addPost.validation");
module.exports = {
  authUserValidate,
  registerUserValidate,
  ValidationComment,
  ValidPost,
};
