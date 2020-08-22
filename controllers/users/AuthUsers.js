const bcrypt = require("bcryptjs");
const config = require("../../config");
const jwt = require("jsonwebtoken");

const models = require("../../models/index");

module.exports = (req, res) => {
  const { emailUser, passwordUser } = req.body;
  //   // Simple validation
  if (!emailUser || !passwordUser) {
    return res.status(400).json({ msg: "Заповніть всі поля!" });
  }
  // Simple validation
  // Check for existing user
  models.user
    .findOne({ emailUser })
    .then((user) => {
      if (!user) return res.status(400).json({ msg: "Невірні дані!" });
      else if (user.Block === true)
        return res.status(400).json({
          msg:
            "Адміністрація вас заблокувала за порушення правил! Зверніться за електроною адресою:",
          emailAddres: "kovalchuk.an_em16@nuwm.edu.ua ",
        });
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
              req.session.userId = user.id;
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
};
