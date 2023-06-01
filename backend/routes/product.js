const express = require("express");
const {
  CREATE,
  READ,
  READONE,
  REMOVE,
  UPDATE,
  DELETE,
} = require("../controller/product");
const routes = express.Router();

routes
  .post("/", CREATE)
  .get("/", READ)
  .get("/:id", READONE)
  .put("/:id", REMOVE)
  .patch("/:id", UPDATE)
  .delete("/:id", DELETE);

module.exports = routes;
