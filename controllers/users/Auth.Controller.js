// User Model
const models = require("../../models/index");

//helpers
const Res = require("../../helpers/response");
const Err = require("../../helpers/Error");
const { signAccessToken } = require("../../helpers/jwt_helper");

module.exports = {
  RegisterUser: async (req, res) => {
    const { loginUser, emailUser, passwordUser } = req.body;
    try {
      const User = await models.user.findOne({ emailUser });
      if (User)
        return res
          .status(400)
          .json({ msg: "Користувач з таким ім`ям вже існує" });

      const newUser = new models.user({
        loginUser,
        emailUser,
        passwordUser,
      });
      const user = await newUser.save();
      //jwt
      const accessToken = await signAccessToken(user.id);
      Res(res, {
        status: 200,
        message: "Зареєстровано",
        data: {
          accessToken,
          user: {
            id: user.id,
            login: user.loginUser,
            email: user.emailUser,
          },
        },
      });
      //jwt
    } catch (error) {
      Err(res, {
        message: "Щось пішло не так спробуйте пізніше!",
        status: 500,
        error,
      });
    }
  },

  AuthUsers: async (req, res) => {
    const { emailUser, passwordUser } = req.body;

    try {
      const user = await models.user.findOne({ emailUser });
      if (!user)
        return Err(res, {
          message: "Невірні дані!",
          status: 400,
        });
      const isMatch = await user.isValidPassword(passwordUser);
      if (!isMatch)
        return Err(res, {
          message: "Невірні дані!",
          status: 400,
        });
      //jwt
      //jwt
      const accessToken = await signAccessToken(user.id);
      Res(res, {
        status: 200,
        message: "Авторизовано",
        data: {
          accessToken,
          user: {
            id: user.id,
          },
        },
      });
      //jwt
    } catch (error) {
      Err(res, {
        message: "Щось пішло не так спробуйте пізніше!",
        status: 500,
        error,
      });
    }
    // Simple validation
    // Check for existing user
  },
};
