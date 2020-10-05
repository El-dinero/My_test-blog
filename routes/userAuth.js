const { Router } = require("express");
const { Auth } = require("../controllers/index");
const { authUserValidate } = require("../validations/index");

const router = Router();

// User Model

// @route   POST /auth-user
// @desc    POST авторизація каристувачів
// @access  Public
router.post("/", authUserValidate, Auth.AuthUsers);

module.exports = router;
