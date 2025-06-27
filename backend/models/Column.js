const mongoose = require('mongoose');
const ColumnSchema = new mongoose.Schema({
  boardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  name: String,
  taskIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  position: Number
});
module.exports = mongoose.model('Column', ColumnSchema);
