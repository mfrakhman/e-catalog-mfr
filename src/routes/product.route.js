const { Router } = require("express");
const {
  getAllProducts,
  createNewProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const route = Router();

route.get("/", getAllProducts);
route.post("/", createNewProduct);
route.patch("/:id", editProduct);
route.delete("/:id", deleteProduct);

module.exports = route;
