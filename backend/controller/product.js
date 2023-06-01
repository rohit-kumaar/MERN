const model = require("../model/product");
const Product = model.Product;

const CREATE = (req, res) => {
  const product = new Product(req.body);

  try {
    product.save();
    res.status(201).json(req.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const READ = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

const READONE = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.status(201).json(product);
};

const REMOVE = async (req, res) => {
  const id = req.params.id;

  try {
    const removeProduct = await Product.findOneAndReplace(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.status(205).json(removeProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

const UPDATE = async (req, res) => {
  const id = req.params.id;

  try {
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.status(206).json(updateProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

const DELETE = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteProduct = await Product.findOneAndDelete({ _id: id });
    res.status(301).json(deleteProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  CREATE,
  READ,
  READONE,
  REMOVE,
  UPDATE,
  DELETE,
};
