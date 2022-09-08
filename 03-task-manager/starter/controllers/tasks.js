const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");

const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findOne({ _id: taskId }).exec();
  if (task) {
    return res.status(200).json({ task });
  } else {
    res.status(404).json({ error: `No task with id : ${taskId} ` });
  }
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findOneAndDelete({ _id: taskId }).exec();
  if (task) {
    return res.status(200).json({ task });
  }
  res.status(404).json({ error: `No task with id : ${taskId} ` });
});

const updateTask = asyncWrapper(async (req, res) => {
  f;
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  }).exec();
  if (task) {
    return res.status(200).json({ task });
  } else {
    res.status(404).json({ error: `No task with id : ${taskId} ` });
  }
});

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
