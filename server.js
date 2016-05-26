const express = require('express');
const app = express();
const rabbitRouter = require(__dirname + '/router/rabbitRouter');
const slugRouter = require(__dirname + '/router/slugRouter');
const mongoose = require('mongoose');

app.use( (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  next();
});

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

app.listen(4020, () => {console.log('server up on 4020');});
