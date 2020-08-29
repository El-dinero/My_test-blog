const updatePosts = require("./posts/UpdatePost");
const getAllPost = require("./posts/AllPosts");
const addPost = require("./posts/AddPost");
const deletePost = require("./posts/RemovePost");
const UserRegister = require("./users/RegisterUser");
const AuthUsers = require("./users/AuthUsers");
const PostUser = require("./posts/PostUser");
const AddComments = require("./comments/postComments");
const OnePost = require("./posts/OnePost");

module.exports = {
  getAllPost,
  addPost,
  deletePost,
  updatePosts,
  AuthUsers,
  UserRegister,
  PostUser,
  AddComments,
  OnePost,
};
