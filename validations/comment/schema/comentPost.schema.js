const joi = require("joi");
const Comments = {
  postComment: joi.object({
    body: joi
      .string()
      .min(10)
      .message("Поле должно бить заполненим")
      .required(),
  }),
};

module.exports = Comments;
