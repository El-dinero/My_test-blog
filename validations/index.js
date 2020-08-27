const {
  authUserValidate,
} = require("../validations/user/validation/userAuth.validation");
const {
  registerUserValidate,
} = require("../validations/user/validation/userRegister.validation");
module.exports = {
  authUserValidate,
  registerUserValidate,
};
