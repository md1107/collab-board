const mongoose = require('mongoose');
const BoardSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Board', BoardSchema);
