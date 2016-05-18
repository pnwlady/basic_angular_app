const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rabbitRouter = require(__dirname + '/router/rabbitRouter');
const slugRouter = require(__dirname + '/router/slugRouter');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/slug_rabbit_db');

app.use('/api', rabbitRouter);
app.use('/api', slugRouter);

module.exports = exports = {
  server: { close: function() { throw new Error('server not started yet'); } },
  listen: function(port, mongoString, cb) {
    mongoose.connect(mongoString);
    return this.server = app.listen(port, cb);
  },
  close: function(cb) {
    this.server.close();
    if (cb) cb();
  }
};

app.listen(PORT, () => {console.log('server up on ' + PORT);});
