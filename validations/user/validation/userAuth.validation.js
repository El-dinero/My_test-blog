const { authUser } = require("../schema/userAuth.schema");
module.exports = {
  authUserValidate: async (req, res, next) => {
    try {
      const value = await authUser.validate(req.body);
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
