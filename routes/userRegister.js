const { Router } = require("express");
const router = Router();
const { UserRegister } = require("../controllers/index");
router.post("/", UserRegister);

module.exports = router;
