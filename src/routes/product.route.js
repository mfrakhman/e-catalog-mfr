const { Router } = require("express");
const {
  getAllProducts,
  createNewProduct,
} = require("../controllers/product.controller");

const route = Router();

route.get("/", getAllProducts);
route.post("/", createNewProduct);

module.exports = route;
