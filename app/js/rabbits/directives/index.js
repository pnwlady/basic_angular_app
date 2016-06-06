module.exports = function(app) {
  require('./list_item.js')(app);
  require('./list.js')(app);
  require('./form.js')(app);
};
