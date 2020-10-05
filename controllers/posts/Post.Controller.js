const { modelsPost, modelsComments } = require("../../models/index");
const Res = require("../../helpers/response");
const Err = require("../../helpers/Error");
module.exports = {
  AllPost: async (req, res) => {
    try {
      const post = await modelsPost.find().sort({ date: -1 });
      Res(res, { message: "Ok", status: 200, data: post });
    } catch (error) {
      Err(res, {
        message: "Щось пішло не так спробуйте пізніше!",
        status: 500,
        error,
      });
    }
  },

  AddPost: async (req, res) => {
    const { title, body } = req.body;
    const userId = req.session.userId;
    try {
      const newItem = await new modelsPost({
        title,
        body,
        user: userId,
      });
      const post = await newItem.save();
      Res(res, { message: "Ok", status: 201, data: post });
    } catch (error) {
      Err(res, {
        message: "Щось пішло не так спробуйте пізніше!",
        status: 500,
        error,
      });
    }
  },

  OnePost: async (req, res) => {
    const id = req.params.id;
    try {
      const comments = await modelsComments
        .find({ postID: id })
        .populate("postID")
        .populate("userID");
      Res(res, { status: 200, message: "Post був створений", data: comments });
    } catch (error) {
      Err(res, {
        message: "Щось пішло не так спробуйте пізніше!",
        status: 500,
        error,
      });
    }
  },

  PostUser: async (req, res) => {
    // const userId = req.session.userId;
    const userId = req.body.userId;
    try {
      const post = await modelsPost.find({ user: userId }).populate("user");
      Res(res, { status: 200, message: "Post був створений", data: post });
    } catch (error) {
      Err(res, {
        message: "Щось пішло не так спробуйте пізніше!",
        status: 500,
        error,
      });
    }
  },

  RemovePost: async (req, res) => {
    try {
      const post = await modelsPost.findById(req.params.id);
      await post.remove();
      Res(res, { status: 200, message: "Видаляння поста закінчено успішно!" });
    } catch (error) {
      Err(res, {
        message: "Щось пішло не так спробуйте пізніше!",
        status: 500,
        error,
      });
    }
  },

  UpdatePost: async (req, res) => {
    const { _title, _body } = req.body;
    try {
      const Post = await modelsPost.findById({ _id: req.params.id });
      const { title, body } = Post;
      if (_title === title && _body === body)
        return Res(res, {
          status: 400,
          message: "Поля не потребують в оновлені!",
        });
      const updatePost = {
        title: _title,
        body: _body,
      };
      const post = await modelsPost.findOneAndUpdate(
        { _id: req.params.id },
        updatePost,
        { new: true }
      );
      Res(res, { status: 200, message: "Post був створений", data: post });
    } catch (error) {
      Err(res, {
        message: "Щось пішло не так спробуйте пізніше!",
        status: 500,
        error,
      });
    }
  },
};
