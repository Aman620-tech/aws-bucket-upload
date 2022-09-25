// const { extensions } =  require("sequelize/types/utils/validator-extras");
const { upload } = require("./fileupload");
const register = async (req, res) => {
  const { firstName, email } = req.body;
  if (req.files && req.files["image"]) {
    const extensions = [".png", ".jpg", ".jpeg"];
    const link = await upload(req.files["image"], extensions);
    const data = { email, firstName, profile: link };
    res.json({ email, fileLikn });
  }
  const link = await upload(image, extensions);

  const data = { email, firstName, profile: link };

  res.json({ data });
};

module.exports = { register };
