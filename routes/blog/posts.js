const { Router } = require("express");
const router = Router();

const { modelsPost } = require("../../models/index");

router.get("/", async (req, res) => {
  try {
    const post = await modelsPost.find({}).sort({ date: -1 });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error(error);
  }
});

router.post("/", async (req, res) => {
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
      });
      const post = await newItem.save();
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error(error);
  }
});

module.exports = router;
