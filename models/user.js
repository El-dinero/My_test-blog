const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    loginUser: {
      type: String,
      required: true,
    },
    emailUser: {
      type: String,
      require: true,
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

schema.set("toJSON", {
  virtuals: true,
});

module.exports = model("User", schema);
