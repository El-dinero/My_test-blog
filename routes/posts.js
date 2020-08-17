const { Router } = require("express");
const router = Router();
const {
  getAllPost,
  addPost,
  deletePost,
  updatePosts,
} = require("../controllers/index");

router.get("/", getAllPost);

router.post("/", addPost);

router.delete("/:id", deletePost);

router.put("/:id", updatePosts);

module.exports = router;
