const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  discountPercentage: { type: Number },
  rating: { type: Number },
  stock: { type: Number },
  brand: { type: String },
  category: { type: String },
  thumbnail: { type: String },
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
