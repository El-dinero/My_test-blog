const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    // comments: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Comment",
    //     autopopulate: true,
    //   },
    // ],
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

schema.set("toJSON", {
  virtuals: true,
});

module.exports = model("Post", schema);
