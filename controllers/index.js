const updatePosts = require("./posts/controlerUpdatePost");
const getAllPost = require("./posts/controlerAllPosts");
const addPost = require("./posts/controlersAddPost");
const deletePost = require("./posts/controlersRemovePost");
const UserRegister = require("./users/RegisterUser");
const AuthUsers = require("./users/AuthUsers");
const PostUser = require("./posts/controlerPostUser");
const AddComments = require("./comments/postComments");
const AllComments = require("./comments/getComments");

module.exports = {
  getAllPost,
  addPost,
  deletePost,
  updatePosts,
  AuthUsers,
  UserRegister,
  PostUser,
  AddComments,
  AllComments,
};
