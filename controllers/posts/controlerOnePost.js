const { modelsComments } = require("../../models/index");
module.exports = async (req, res) => {
  const id = req.params.id;
  try {
    const comments = await modelsComments
      .find({ postID: id })
      .populate("postID")
      .populate("userID");
    res.json(comments);
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
  }
};
