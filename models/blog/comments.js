const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    body: {
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

module.exports = model("Post", schema);
