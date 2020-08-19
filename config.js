const dotenv = require("dotenv");
const path = require("path");

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root(".env") });
module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL,
  IS_PRODUCTION: process.env.NODE_ENV || "production",
  JWT_SECRET_USER: process.env.JWT_SECRET_USER,
};
