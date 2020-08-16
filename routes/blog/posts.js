const { Router } = require("express");
const router = Router();

const { modelsPost } = require("../../models/index");

router.get("/", async (req, res) => {
  try {
    const post = await modelsPost.find({}).sort({ date: -1 });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
    console.error("Error:" + " " + error);
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
        author,
      });
      const post = await newItem.save();
      res.status(201).json(post);
    }
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await modelsPost.findById(req.params.id);
    await post.remove();
    res.status(200).json({ msg: "Видаляння поста закінчено успішно!" });
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
  }
});

router.put("/:id", async (req, res) => {
  const { _title, _body } = req.body;
  try {
    if (!_title || !_body)
      return res.status(400).json({ msg: "Всі поля мають бути уведані!" });
    if (_title.length < 3 || _title.length > 64)
      return res
        .status(400)
        .json({ msg: "Длина заголовка от 3 до 64 символов!" });
    if (_body.length < 10)
      return res.status(400).json({ msg: "Текст не менее 10х символов!" });
    const Post = await modelsPost.findById({ _id: req.params.id });
    const { title, body } = Post;
    if (_title === title && _body === body)
      return res.status(400).json({ msg: "Поля не потребують в оновлені!" });
    const updatePost = {
      title: _title,
      body: _body,
    };
    const post = await modelsPost.findOneAndUpdate(
      { _id: req.params.id },
      updatePost,
      { new: true }
    );
    res.status(200).json({ msg: "Ваші дані обновлено!", post });
  } catch (err) {
    res.status(500).json({
      msg: "Дані не можливо змінити, щось пішло не так спробуйте пізніше!",
    });
    console.error(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const post = await modelsPost.updateOne(
      { _id: req.params.id },
      { title: req.body._title },
      { new: true }
    );
    res.status(200).json({ msg: "Ваші дані обновлено!", post });
  } catch (err) {
    res.status(500).json({
      msg: "Дані не можливо змінити, щось пішло не так спробуйте пізніше!",
    });
    console.error(err);
  }
});

module.exports = router;
