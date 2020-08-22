const { modelsComments } = require("../../models/index");
module.exports = async (req, res) => {
  try {
    const comment = await modelsComments.find({});
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ msg: "Щось пішло не так спробуйте пізніше!" }),
      console.error("Error:" + " " + error);
    console.error("Error:" + " " + error);
  }
};
