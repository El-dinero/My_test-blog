const express = require("express");
const { connect, connection } = require("mongoose");
const bodyParser = require("body-parser");

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

// Set up default mongoose connection
const mongoDB = config.MONGO_URL;
connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => {
    console.log("Mongo conected...");

    // require("./mocks")();
    //Listen Server express
  })
  .catch((e) => console.error(e));
//Bind connection to error event (to get notification of connection errors)
connection.on(
  "error",
  console.error.bind("MongoDB connection error:", console)
);

app.listen(config.PORT, () => {
  console.log(`Server on http://localhost:${config.PORT}/`);
});
