const { modelsPost } = require("../../models/index");

module.exports = async (req, res) => {
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
};
