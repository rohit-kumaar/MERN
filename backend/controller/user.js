const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const DATA_COLLECTIONS = data.users;

const CREATE = (req, res) => {
  console.log(req.body);
  DATA_COLLECTIONS.push(req.body);
  res.status(201).json(req.body);
};

const READ = (req, res) => {
  res.status(200).json(DATA_COLLECTIONS);
};

const READONE = (req, res) => {
  const id = +req.params.id;
  const data = DATA_COLLECTIONS.find((p) => p.id === id);
  res.status(201).json(data);
};

const REMOVE = (req, res) => {
  const id = +req.params.id;
  const dataIndex = DATA_COLLECTIONS.findIndex((p) => p.id === id);
  DATA_COLLECTIONS.splice(dataIndex, 1, { ...req.body, id: id });
  res.status(200).json();
};

const UPDATE = (req, res) => {
  const id = +req.params.id;
  const dataIndex = DATA_COLLECTIONS.findIndex((p) => p.id === id);
  const updateData = DATA_COLLECTIONS[dataIndex];
  DATA_COLLECTIONS.splice(dataIndex, 1, { ...updateData, ...req.body });
  res.status(201).json();
};

const DELETE = (req, res) => {
  const id = +req.params.id;
  const dataIndex = DATA_COLLECTIONS.findIndex((p) => p.id === id);
  const deleteData = DATA_COLLECTIONS[dataIndex];
  DATA_COLLECTIONS.splice(dataIndex, 1);
  res.status(200).json(deleteData);
};

module.exports = {
  CREATE,
  READ,
  READONE,
  REMOVE,
  UPDATE,
  DELETE,
};
