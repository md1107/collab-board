const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  priority: String,
  assignedTo: String,
  dueDate: Date,
  boardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Task', TaskSchema);
