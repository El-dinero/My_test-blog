const { Router } = require("express");
const { AddComments } = require("../controllers");
const router = Router();
const { Comment } = require("../validations/index");

router.post("/", Comment, AddComments);

module.exports = router;
