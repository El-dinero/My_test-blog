const { Router } = require("express");
const { Post } = require("../controllers/index");
const router = Router();

// User Model

// @route   POST /auth-user
// @desc    POST авторизація каристувачів
// @access  Public
router.get("/:id", Post.PostUser);
module.exports = router;
