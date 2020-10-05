const { Schema, model } = require("mongoose");

const Comment = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    postID: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      autopopulate: true,
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

Comment.set("toJSON", {
  virtuals: true,
});

module.exports = model("Comment", Comment);
