const { authUserValidate } = require("./user/validation/userAuth.validation");
const {
  registerUserValidate,
} = require("./user/validation/userRegister.validation");
const { Comment } = require("./comment/validation/commentpos.validation");
const { createPost } = require("./post/validation/addPost.validation");
module.exports = {
  authUserValidate,
  registerUserValidate,
  Comment,
  createPost,
};
