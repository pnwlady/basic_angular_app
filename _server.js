const express = require('express');
const app = express();
const rabbitRouter = require(__dirname + '/routers/rabbitRouter');
const slugRouter = require(__dirname + '/routers/slugRouter');
const authRouter = require(__dirname + '/routers/authRouter');
const mongoose = require('mongoose');

app.use('/api', rabbitRouter);
app.use('/api', slugRouter);
app.use('/api', authRouter);

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
