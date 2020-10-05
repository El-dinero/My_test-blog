const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const User = new Schema(
  {
    loginUser: {
      type: String,
      required: true,
    },
    emailUser: {
      type: String,
      require: true,
      unique: true,
    },
    passwordUser: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

User.set("toJSON", {
  virtuals: true,
});

// pre
User.pre("save", async function (next) {
  try {
    if (this.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.passwordUser, salt);
      this.passwordUser = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});
/*eslint-disable */
User.methods.isValidPassword = async function (passwordUser) {
  try {
    return await bcrypt.compare(passwordUser, this.passwordUser);
  } catch (error) {
    throw error;
  }
};
/*eslint-enable */
module.exports = model("User", User);
