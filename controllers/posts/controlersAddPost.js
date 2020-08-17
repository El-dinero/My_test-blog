const { modelsPost } = require("../../models/index");

module.exports = async (req, res) => {
  const { title, body, author } = req.body;
  try {
    if (!title || !body || !author) {
      res.status(400).json({ msg: "Всі поля мають бути заповнені!" });
    } else if (title.length < 3 || title.length > 64) {
      res.status(400).json({ msg: "Длина заголовка от 3 до 64 символов!" });
    } else if (body.length < 10) {
      res.status(400).json({ msg: "Текст не менее 10х символов!" });
    } else {
      const newItem = await new modelsPost({
        title,
        body,
        author,
      });
      const post = await newItem.save();
      res.status(201).json(post);
    }
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
  }
};
