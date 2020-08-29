const { modelsComments } = require("../../models/index");

module.exports = async (req, res) => {
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
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
  }
};
