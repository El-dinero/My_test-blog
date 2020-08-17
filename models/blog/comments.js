const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

schema.set("toJSON", {
  virtuals: true,
});

module.exports = model("Comment", schema);
