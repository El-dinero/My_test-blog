const { registerUser } = require("../schema/userRegister.schema");
module.exports = {
  registerUserValidate: async (req, res, next) => {
    try {
      const value = await registerUser.validate(req.body);
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
