const { Router } = require("express");

const {
  getAllProducts,
  createNewProduct,
  editProduct,
  deleteProduct,
  getProductById,
} = require("../controllers/product.controller");

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createNewProduct);
router.patch("/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
