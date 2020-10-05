const { Router } = require("express");
const router = Router();
const { Auth } = require("../controllers/index");
const { registerUserValidate } = require("../validations/index");

router.post("/", registerUserValidate, Auth.RegisterUser);

module.exports = router;
