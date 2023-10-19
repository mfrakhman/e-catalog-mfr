const knex = require("../../db");

const getAllProducts = async (req, res) => {
  const result = await knex.select().from("products");
  res.json(result);
};

const createNewProduct = async (req, res) => {
  const { name, description, price, image } = req.body;
  const result = await knex("products").insert({
    name,
    description,
    price,
    image,
  });
  res.status(201).json({ name, description, price, image });
};

module.exports = { getAllProducts, createNewProduct };
