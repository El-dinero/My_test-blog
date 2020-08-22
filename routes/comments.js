const { Router } = require("express");
const { AddComments } = require("../controllers");
const router = Router();

router.post("/", AddComments);

module.exports = router;
