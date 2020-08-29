const { modelsPost } = require("../../models/index");

module.exports = async (req, res) => {
  try {
    const post = await modelsPost.findById(req.params.id);
    await post.remove();
    res.status(200).json({ msg: "Видаляння поста закінчено успішно!" });
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
  }
};
