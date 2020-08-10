const { Router } = require("express");
const router = Router();

const { modelsPost } = require("../../models/index");

router.get("/", async (req, res) => {
  try {
    const post = await modelsPost.find({}).sort({ createdAt: -1 });
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
