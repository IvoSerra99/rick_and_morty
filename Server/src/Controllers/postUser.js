const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email !== "" && password !== "") {
      const newPost = await User.findOrCreate({ where: {email, password} });
      res.status(200).json(newPost);
    } else if (!email || !password) {
      res.status(400).send("Faltan datos");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
module.exports = { postUser };