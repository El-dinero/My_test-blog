const express = require("express");
const { connect, connection } = require("mongoose");
const bodyParser = require("body-parser");

//підключення конфіг залежностей
const config = require("./config");
//підключення роутінгу
const { posts } = require("./routes/index");

const app = express();

//Statik
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/", posts);

// error 404
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
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
    app.listen(config.PORT, () => {
      console.log(`Server started on port ${config.PORT}`);
    });
  })
  .catch((e) => console.error(e));
//Bind connection to error event (to get notification of connection errors)
connection.on(
  "error",
  console.error.bind("MongoDB connection error:", console)
);
