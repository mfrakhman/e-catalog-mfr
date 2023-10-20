const knex = require("../../db");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { username, password } = req.body;
  const result = await knex("users").where("username", username).select();
  if (result.length > 0) {
    const match = await bcrypt.compare(password, result[0].password);
    if (match) {
      req.session.user = username;
      res.status(200).json({ username });
    } else {
      res.status(401).json({ error: "unauthorized" });
    }
  }
};

module.exports = { login };
