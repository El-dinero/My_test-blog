const { Router } = require("express");
const { Comments } = require("../controllers");
const router = Router();
const { ValidationComment } = require("../validations/index");

router.post("/", ValidationComment, Comments.AddComments);

module.exports = router;
