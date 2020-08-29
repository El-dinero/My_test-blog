const { Router } = require("express");
const router = Router();
const {
  getAllPost,
  addPost,
  deletePost,
  updatePosts,
  OnePost,
} = require("../controllers/index");

const authUser = require("../middleware/authUser");
const { createPost } = require("../validations/index");

router
  .route("/:id")
  .all(authUser)
  .get(OnePost)
  .put(updatePosts)
  .delete(deletePost);

router.get("/", getAllPost);

router.post("/", createPost, addPost);

module.exports = router;
