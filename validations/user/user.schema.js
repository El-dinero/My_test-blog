const joi = require("joi");
const schema = {
  registerUser: joi.object({
    loginUser: joi
      .string()
      .min(3)
      .max(50)
      .message("Видіть емеїл від 3 до 50 символів")
      .required(),
    emailUser: joi
      .string()
      .email({ tlds: { allow: true } })
      .required(),
    passwordUser: joi
      .string()
      .min(6)
      .max(40)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .message("Блaа")
      .required(),
    repeatPasswordUser: joi.valid(joi.ref("passwordUser")),
  }),
  authUser: joi.object({
    emailUser: joi
      .string()
      .email({ tlds: { allow: true } })
      .required(),
    passwordUser: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .message("Блaа")
      .required(),
  }),
};

module.exports = schema;
