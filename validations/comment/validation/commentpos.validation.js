const { postComment } = require("../schema/comentPost.schema");
module.exports = {
  Comment: async (req, res, next) => {
    try {
      const value = await postComment.validate(req.body);
      if (value.error) {
        res.json({ success: 0, message: value.error.details[0].message });
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
    }
  },
};
