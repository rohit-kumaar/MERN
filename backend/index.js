const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  const CONNECTION = `mongodb://127.0.0.1:27017/api`;
  await mongoose.connect(CONNECTION);
  console.log("db connected");
}

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

// CREATE
app.post("/api", async (req, res) => {
  console.log(req.body);

  const user = new User();
  user.username = req.body.username;
  user.password = req.body.password;

  const doc = await user.save();

  console.log(doc);
  res.json(doc);
});

// READ
app.get("/api", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
});

app.listen(PORT, () => {
  console.log(`Server is running in PORT  http://localhost:${PORT}`);
});
