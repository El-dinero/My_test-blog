const faker = require("faker");

const { modelsPost } = require("./models/index");

const authorID = "5f3fe3dcfc67d033a2f1e61f";

module.exports = () => {
  modelsPost
    .remove()
    .then(() => {
      Array.from({ length: 15 }).forEach(() => {
        modelsPost
          .create({
            title: faker.lorem.words(20),
            body: faker.lorem.words(100),
            user: authorID,
          })
          .then(console.log)
          .catch(console.error);
      });
    })
    .catch(console.error);
};
//Автопостер
