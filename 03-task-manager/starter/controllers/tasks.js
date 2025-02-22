const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;

  const task = await Task.findOne({ _id: taskId }).exec();
  if (task) {
    return res.status(200).json({ task });
  } else {
    return next(createCustomError(`Task with id ${taskId} not found`, 404));
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
  return next(createCustomError(`Task with id ${taskId} not found`, 404));
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
    return next(createCustomError(`Task with id ${taskId} not found`, 404));
  }
});

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
