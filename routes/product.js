const express = require(`express`);
const router = express.Router();

// controllers
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  filterProduct,
  searchProduct,
} = require(`../controllers/product`);

// create product
router.post(`/product/create`, createProduct);

// getting products
router.get(`/products`, getProducts);

// getting product
router.get(`/product/:productId`, getProduct);

// search product
router.get(`/prodSearch`, searchProduct);

// filter product
router.get(`/product`, filterProduct);

// delete product
router.delete(`/product/:productId`, deleteProduct);

module.exports = router;
