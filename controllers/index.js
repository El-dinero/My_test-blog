const updatePosts = require("./posts/controlerUpdatePost");
const getAllPost = require("./posts/controlerAllPosts");
const addPost = require("./posts/controlersAddPost");
const deletePost = require("./posts/controlersRemovePost");
const UserRegister = require("./users/RegisterUser");

module.exports = {
  getAllPost,
  addPost,
  deletePost,
  updatePosts,
  UserRegister,
};
