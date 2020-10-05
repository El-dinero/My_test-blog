const { Schema, model } = require("mongoose");

const Post = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

Post.set("toJSON", {
  virtuals: true,
});

module.exports = model("Post", Post);
