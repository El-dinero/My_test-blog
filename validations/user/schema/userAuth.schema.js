const joi = require("joi");
const UserAuth = {
  authUser: joi.object({
    emailUser: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    passwordUser: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .message("Блaа")
      .required(),
  }),
};

module.exports = UserAuth;
