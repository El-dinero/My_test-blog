const { Router } = require("express");
const { AuthUsers } = require("../controllers/index");
const { authUserValidate } = require("../validations/index");

const router = Router();

// User Model

// @route   POST /auth-user
// @desc    POST авторизація каристувачів
// @access  Public
router.post("/", authUserValidate, AuthUsers);

module.exports = router;
