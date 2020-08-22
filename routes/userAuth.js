const { Router } = require("express");
const { AuthUsers } = require("../controllers/index");
const router = Router();

// User Model

// @route   POST /auth-user
// @desc    POST авторизація каристувачів
// @access  Public
router.post("/", AuthUsers);

module.exports = router;
