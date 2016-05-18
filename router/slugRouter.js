const Router = require('express').Router;
const Slug = require(__dirname + '/../models/slug');
const bodyParser = require('body-parser').json();
const serverErrorHandler = require(__dirname + '/../lib/errorHandler');
const slugRouter = module.exports = new Router();

slugRouter.post('/slugs', bodyParser, (req, res) => {
  var newSlug = new Slug(req.body);
  newSlug.save((err) => {
    if (err) return serverErrorHandler(err, res);
    res.status(200).json({ msg: 'great job!' });
  });
});

slugRouter.get('/slugs', (req, res) => {
  Slug.find(null, (err, data) => {
    if (err) return serverErrorHandler(err, res);
    res.status(200).json(data);
  });
});

slugRouter.put('/slugs/:id', bodyParser, (req, res) => {
  var slugData = req.body;
  delete slugData._id;
  Slug.update({ _id: req.params.id }, slugData, (err, data) => {
    if (err) return serverErrorHandler(err, res);
    res.status(200).json(data);
  });
});

slugRouter.delete('/slugs/:id', (req, res) => {
  Slug.remove({ _id: req.params.id }, (err) => {
    if (err) return serverErrorHandler(err, res);
    res.status(200).json({ msg: 'the slugs are gone' });
  });
});
