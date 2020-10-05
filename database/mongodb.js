const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongodb connected!");
  })
  .catch((err) => console.error(err.message));

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to db.");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection is disconnected.");
});
/*eslint-disable */

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});
/*eslint-enable */
