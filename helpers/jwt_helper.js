const config = require("../config");
const jwt = require("jsonwebtoken");

module.exports = {
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      //jwt
      jwt.sign(
        { id: userId },
        config.JWT_SECRET_USER,
        { expiresIn: 3600 },

        (err, token) => {
          if (err) {
            console.log(err.message);
            reject("Token is error" + " " + err);
            return;
          }
          resolve(token);
        }
      );
      //jwt
    });
  },
};
