const { modelsComments } = require("../../models/index");
const Res = require("../../helpers/response");
const Err = require("../../helpers/Error");

module.exports = {
  AddComments: async (req, res) => {
    //   const userId = req.session.userId;
    const userID = "5f3fd956bb41f929bb46fa72";
    const { body, postID } = req.body;
    try {
      const newComments = await new modelsComments({
        body,
        postID,
        userID,
      });
      const item = await newComments.save();
      Res(res, { status: 200, message: "Post був створений", data: item });
    } catch (error) {
      Err(res, {
        message: "Щось пішло не так спробуйте пізніше!",
        status: 500,
        error,
      });
    }
  },
};
