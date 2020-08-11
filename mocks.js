const faker = require("faker");

const { modelsPost } = require("./models/index");

module.exports = () => {
  modelsPost
    .remove()
    .then(() => {
      Array.from({ length: 15 }).forEach(() => {
        modelsPost
          .create({
            title: faker.lorem.words(20),
            body: faker.lorem.words(100),
          })
          .then(console.log)
          .catch(console.error);
      });
    })
    .catch(console.error);
};
//Автопостер
