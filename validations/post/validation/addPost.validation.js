const { addPost } = require("../schema/addPost.schema");

module.exports = {
  ValidPost: async (req, res, next) => {
    try {
      const value = await addPost.validate(req.body);
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
