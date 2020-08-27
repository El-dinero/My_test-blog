const { Router } = require("express");
const router = Router();
const { UserRegister } = require("../controllers/index");
const { registerUserValidate } = require("../validations/index");

router.post("/", registerUserValidate, UserRegister);

module.exports = router;
