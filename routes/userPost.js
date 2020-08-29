const { Router } = require("express");
const { PostUser } = require("../controllers/index");
const router = Router();

// User Model

// @route   POST /auth-user
// @desc    POST авторизація каристувачів
// @access  Public
router.get("/:id", PostUser);
module.exports = router;
