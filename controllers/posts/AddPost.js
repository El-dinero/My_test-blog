const { modelsPost } = require("../../models/index");

module.exports = async (req, res) => {
  const { title, body } = req.body;
  const userId = req.session.userId;
  try {
    const newItem = await new modelsPost({
      title,
      body,
      user: userId,
    });
    const post = await newItem.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
  }
};
