const knex = require("../../db");

const getAllProducts = async (req, res) => {
  const result = await knex.select().from("products").orderBy("id");
  res.json(result);
};

const getProductById = async (req, res) => {
  const result = await knex
    .select()
    .from("products")
    .where("id", req.params.id)
    .limit(1)
    .returning(["id", "name", "description", "price", "image"]);
  res.status(200).json(result);
};

const createNewProduct = async (req, res) => {
  const { name, description, price, image } = req.body;
  const result = await knex("products")
    .insert({
      name,
      description,
      price,
      image,
    })
    .returning(["name", "description", "price", "image"]);
  res.status(201).json(result);
};

const editProduct = async (req, res) => {
  const { name, description, price, image } = req.body;
  const result = await knex("products")
    .where("id", req.params.id)
    .update({ name, description, price, image })
    .returning(["name", "description", "price", "image"]);
  res.status(200).json(result);
};

const deleteProduct = async (req, res) => {
  const result = await knex("products").where("id", req.params.id).del();
  res.status(200).json(result);
};

module.exports = {
  getAllProducts,
  createNewProduct,
  editProduct,
  deleteProduct,
  getProductById,
};
