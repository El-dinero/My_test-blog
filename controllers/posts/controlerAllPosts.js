const { modelsPost } = require("../../models/index");

module.exports = async (req, res) => {
  try {
    const post = await modelsPost.find({}).sort({ date: -1 });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
  }
};
