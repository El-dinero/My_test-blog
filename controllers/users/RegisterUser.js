const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("../../config");

const models = require("../../models/index");

// @route   Post /register-user
// @desc    Post реєстрація користувача
// @access  Public
router.post("/", (req, res) => {
  const { loginUser, emailUser, passwordUser } = req.body;
  //Validatioo
  //Validatioon
  //Перевірка існуючого адміна
  models.user
    .findOne({ emailUser })
    .then((user) => {
      if (user)
        return res
          .status(400)
          .json({ msg: "Користувач з таким ім`ям вже існує" });

      const newUser = new models.user({
        loginUser,
        emailUser,
        passwordUser,
      });
      //Шифрування пароля
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.passwordUser, salt, (err, hash) => {
          if (err) throw err;
          newUser.passwordUser = hash;
          newUser
            .save()
            .then((user) => {
              //jwt
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
                      login: user.loginUser,
                      email: user.emailUser,
                      Block: user.Block,
                    },
                  });
                }
              );
              //jwt
            })
            .catch((err) => {
              res
                .status(500)
                .json({ msg: "Щось пішло не так спробуйте пізніше!" }),
                console.error(err);
            });
        });
      });
      //Шифрування пароля
    })
    .catch((err) => {
      res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
        console.error(err);
    });
});

module.exports = router;
