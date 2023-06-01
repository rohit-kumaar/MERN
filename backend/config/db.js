const mongoose = require("mongoose");

const databaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = databaseConnection;
