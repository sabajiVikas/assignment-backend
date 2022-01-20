// importing product object
const Product = require(`../models/product`);

exports.createProduct = (req, res) => {
  // console.log(req.body);

  // destructuring request body
  const {
    prodName,
    prodDescription,
    prodCategory,
    prodPrice,
    prodStock,
    prodUrl,
  } = req.body;

  // check files
  if (
    !prodName ||
    !prodDescription ||
    !prodCategory ||
    !prodPrice ||
    !prodStock ||
    !prodUrl
  ) {
    return res.status(400).json({
      success: false,
      error: `all the fields are required...`,
    });
  }

  // create doc(saving to database)
  const product = new Product(req.body);
  product.save((err, product) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: `failed to save products...`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `${prodName} created successfully`,
    });
  });
};

exports.getProducts = (req, res) => {
  Product.find((err, products) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: `no products found...`,
      });
    }

    return res.status(200).json({
      success: true,
      products,
    });
  });
};

exports.getProduct = (req, res) => {
  // console.log(req.params.productId);

  Product.findById(req.params.productId).exec((err, product) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: `no product found`,
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  });
};

exports.filterProduct = (req, res) => {
  Product.find({ prodCategory: req.query.category }).exec((err, products) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: `no product found`,
      });
    }

    return res.status(200).json({
      success: true,
      products,
    });
  });
};

exports.searchProduct = (req, res) => {
  Product.find({ prodName: { $regex: req.query.search, $options: "i" } }).exec(
    (err, products) => {
      if (err) {
        return res.status(400).json({
          success: false,
          error: `no product found`,
        });
      }

      return res.status(200).json({
        success: true,
        products,
      });
    }
  );
};

exports.deleteProduct = (req, res) => {
  Product.findById(req.params.productId)
    .remove()
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          success: false,
          error: `no product found`,
        });
      }

      return res.status(200).json({
        success: true,
        message: `product deleted successfully`,
      });
    });
};
