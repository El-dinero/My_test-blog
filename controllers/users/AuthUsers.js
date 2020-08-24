const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const config = require("../../config");
const jwt = require("jsonwebtoken");

const authUser = require("../../middleware/authUser");

// User Model
const models = require("../../models/index");

// @route   POST /auth-user
// @desc    POST авторизація каристувачів
// @access  Public
router.post("/", (req, res) => {
  const { emailUser, passwordUser } = req.body;

  // Simple validation
  // Check for existing user
  models.user
    .findOne({ emailUser })
    .then((user) => {
      if (!user) return res.status(400).json({ msg: "Невірні дані!" });
      // Validate password
      bcrypt
        .compare(passwordUser, user.passwordUser)
        .then((isMatch) => {
          if (!isMatch) return res.status(400).json({ msg: "Невірні дані!" });

          jwt.sign(
            { id: user.id },
            config.JWT_SECRET_USER,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        })
        .catch((err) => {
          res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
            console.error(err);
        });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
        console.error(err);
    });
});

// @route   GET /auth-user/user
// @desc    Get user data
// @access  Private
router.get("/user", authUser, (req, res) => {
  models.user
    .findById(req.user.id)
    .select("-passwordUser")
    .select("-Block")
    .then((user) => res.json(user))
    .catch((err) => {
      res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
        console.error(err);
    });
});

module.exports = router;
