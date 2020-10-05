const { Router } = require("express");
const router = Router();
const { Post } = require("../controllers/index");

const authUser = require("../middleware/authUser");
const { ValidPost } = require("../validations/index");

router
  .route("/:id")
  // .all(authUser)
  .get(authUser, Post.OnePost)
  .put(authUser, Post.UpdatePost)
  .delete(authUser, Post.RemovePost);

router.get("/", Post.AllPost);

router.post("/", authUser, ValidPost, Post.AddPost);

module.exports = router;
