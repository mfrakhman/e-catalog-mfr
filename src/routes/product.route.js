const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  getAllProducts,
  createNewProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = Router();

router.get("/", getAllProducts);
router.post("/", authMiddleware, createNewProduct);
router.patch("/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
