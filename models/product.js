// requiring packages
// mongoose(object modeling)
const mongoose = require(`mongoose`);

// product schema
const productSchema = new mongoose.Schema(
  {
    prodName: {
      type: String,
      required: true,
    },
    prodDescription: {
      type: String,
      required: true,
    },
    prodCategory: {
      type: String,
      required: true,
    },
    prodPrice: {
      type: Number,
      required: true,
    },
    prodStock: {
      type: Number,
      required: true,
    },
    prodUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// exporting to make this importable from else where
module.exports = mongoose.model(`Product`, productSchema);
