const config = require("../config");
const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
  const token = req.header("x-authUser-token");

  // Check for token
  if (!token)
    return res
      .status(401)
      .json({ msg: "Неможливо здійснити дію без реєстрацї" });

  try {
    // Verify token
    const decoded = jwt.verify(token, config.JWT_SECRET_USER);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (err) {
    res.status(500).json({
      msg: "Щось пішло не так спробуйте пізніше!",
      erorr: err,
    });
  }
}
module.exports = authUser;
