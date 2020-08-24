const { Router } = require("express");
const router = Router();
const {
  getAllPost,
  addPost,
  deletePost,
  updatePosts,
  OnePost,
} = require("../controllers/index");

router.get("/", getAllPost);

router.get("/:id", OnePost);

router.post("/", addPost);

router.delete("/:id", deletePost);

router.put("/:id", updatePosts);

module.exports = router;
