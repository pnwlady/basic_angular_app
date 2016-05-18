const mongoose = require('mongoose');

var slugSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  variety: { type: String },
  food: { type: String, default: 'spinach' }
});

module.exports = exports = mongoose.model('Slug', slugSchema);
