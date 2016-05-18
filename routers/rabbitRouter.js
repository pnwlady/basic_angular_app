const Router = require('express').Router;
const Rabbit = require(__dirname + '/../../models/rabbit');
const bodyParser = require('body-parser').json();
const serverErrorHandler = require(__dirname + '/../../lib/errorHandler');
const rabbitRouter = module.exports = new Router();

rabbitRouter.post('/rabbits', bodyParser, (req, res) => {
  var newRabbit = new Rabbit(req.body);
  newRabbit.save((err, data) => {
    if (err) return serverErrorHandler(err, res);
    res.status(200).json(data);
  });
});

rabbitRouter.get('/rabbits', (req, res) => {
  Rabbit.find({}, (err, data) => {
    if (err) return serverErrorHandler(err, res);
    res.status(200).json(data);
  });
});

rabbitRouter.put('/rabbits/:id', bodyParser, (req, res) => {
  var rabbitData = req.body;
  delete rabbitData._id;
  Rabbit.update({ _id: req.params.id }, rabbitData, (err, data) => {
    if (err) return serverErrorHandler(err, res);
    res.status(200).json(data);
  });
});

rabbitRouter.delete('/rabbits/:id', (req, res) => {
  Rabbit.remove({ _id: req.params.id }, (err) => {
    if (err) return serverErrorHandler(err, res);
    res.status(200).json({ msg: 'the rabbits gone' });
  });
});
