const express = require('express');
const router = express.Router();
const Column = require('../models/Column');
const Task = require('../models/Task');

router.post('/:id/tasks', async (req, res) => {
  const task = new Task({ ...req.body, columnId: req.params.id });
  await task.save();
  await Column.findByIdAndUpdate(req.params.id, { $push: { taskIds: task._id } });
  res.json(task);
});

module.exports = router;
