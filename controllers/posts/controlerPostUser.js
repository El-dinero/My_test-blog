const { modelsPost } = require("../../models/index");

module.exports = async (req, res) => {
  //   const userId = req.session.userId;
  const userId = "5f3fd956bb41f929bb46fa72";
  try {
    //   if (!userId) {
    //       res.status(400).json({ msg: "Потрібно авторизуватись!" });
    //     } else {
    const post = await modelsPost.find({ user: userId }).populate("user");
    res.status(200).json(post);
    // }
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
  }
};
