const { modelsPost } = require("../../models/index");
const Res = require("../../helpers/response");

module.exports = async (req, res) => {
  try {
    const post = await modelsPost.find().sort({ date: -1 });
    Res(res, { message: "Ok", status: 200, data: post });
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
  }
};
