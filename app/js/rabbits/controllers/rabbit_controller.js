const baseUrl = require('../../config').baseUrl;
const copy = require('angular').copy;
module.exports = function(app) {
  app.controller('RabbitController', ['csResource', 'csDeathTouch', function(Resource, death) {
    this.rabbits = [];
    this.errors = [];
    this.counter = death;
    this.remote = new Resource(this.dinosaurs, this.errors, baseUrl + '/api/rabbits');
    this.getAll = this.remote.getAll.bind(this.remote);
    this.createRabbit = function() {
      this.remote.save(this.newRabbit)
        .then(() => {
          this.newRabbit = null;
        });
    }.bind(this);
    this.removeRabbit = function(rabbit) {
      this.remote.remove(rabbit)
      .then(() => {
        death.addCount();
      });
    }.bind(this);
    this.updateRabbit = function(rabbit) {
      this.remote.update(rabbit)
        .then(() => {
          rabbit.editing = false;
        });
    };
    this.startEdit = function(rabbit) {
      rabbit.editing = true;
      this.rabbitBackup = copy(rabbit);
    }.bind(this);
    this.cancelEdit = function(rabbit) {
      rabbit.editing = false;
      for (var key in this.rabbitBackup) {
        if (this.rabbitBackup.hasOwnProperty(key)) {
          dino[key] = this.rabbitBackup[key];
        }
      }
    }.bind(this);
  }]);
};
