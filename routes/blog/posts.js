const { Router } = require("express");
const router = Router();

const { modelsPost } = require("../../models/index");

router.get("/", async (req, res) => {
  try {
    const post = await modelsPost.find({}).sort({ createdAt: -1 });
    res.status(200).json(post);
  } catch (error) {
    console.error("Error:", error);
  }
});

router.post("/", async (req, res) => {
  const { title, body } = req.body;
  try {
    if (!title || !body) {
      res.status(400).json({ msg: "Всі поля мають бути заповнені!" });
    } else if (title.lenght < 30) {
      res
        .status(400)
        .json({ msg: "Длина должна title бить не мениє 30 символов!" });
    } else {
      const newItem = await new modelsPost({
        title,
        body,
      });
      const post = await newItem.save();
      res.status(200).json(post);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
