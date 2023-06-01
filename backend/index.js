const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// DATABASE CONNECTION
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database connected");
}

app.use(express.json());
app.use(morgan("default"));
app.use(express.static("public"));
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(8080, () => {
  console.log("server started");
});
