const joi = require("joi");
const UserRegister = {
  registerUser: joi.object({
    loginUser: joi
      .string()
      .min(3)
      .max(50)
      .message("Видіть емеїл від 3 до 50 символів")
      .required(),
    emailUser: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    passwordUser: joi
      .string()
      .min(6)
      .max(40)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .message("Видіть паролі правильно")
      .required(),
    repeatPasswordUser: joi.ref("passwordUser"),
  }),
};

module.exports = UserRegister;
