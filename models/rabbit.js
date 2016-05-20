const mongoose = require('mongoose');

var rabbitSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  variety: { type: String },
  food: { type: String, default: 'parsley' }
});

module.exports = exports = mongoose.model('Rabbit', rabbitSchema);
