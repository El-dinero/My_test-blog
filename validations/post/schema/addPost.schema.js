const joi = require("joi");
const Comments = {
  addPost: joi.object({
    title: joi
      .string()
      .min(3)
      .message("Поле тайтл має бути не менше ніж 3 символа")
      .required(),
    body: joi
      .string()
      .min(10)
      .message("Поле тайтл має бути не менше ніж 10 символа")
      .required(),
  }),
};

module.exports = Comments;
