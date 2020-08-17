const { Router } = require("express");
const router = Router();
const { modelsComments } = require("../models/index");
router.post("/", async (req, res) => {
  const { body } = req.body;
  try {
    const newComments = await new modelsComments({
      body,
    });
    const item = await newComments.save();
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
    console.error("Error:" + " " + error);
  }
});

module.exports = router;
