const Task = require("../models/task");

const getTasks = (req, res) => {
  return res.send("All items");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const updateTask = (req, res) => {
  res.send("update item");
};

const deleteTask = (req, res) => {
  return res.send("Delete item");
};

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
