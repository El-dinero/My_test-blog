const express = require("express");
const bodyParser = require("body-parser");
require("./database/mongodb");
//підключення конфіг залежностей
const config = require("./config");
//підключення роутінгу
const {
  posts,
  userRegister,
  userAuth,
  userPost,
  comment,
} = require("./routes/index");

const app = express();

//Statik
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/", posts);
app.use("/register", userRegister);
app.use("/auth", userAuth);
app.use("/user-post", userPost);
app.use("/comment", comment);

app.use(function (req, res) {
  res.status(404).send("404 - Not Found!");
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500);
});

app.listen(config.PORT, () => {
  console.log(`Server on http://localhost:${config.PORT}/`);
});
