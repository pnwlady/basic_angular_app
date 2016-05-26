const angular = require('angular');
const myApp = angular.module('myApp', []);
const baseUrl = 'http://localhost:4020';
// const slugUrl = baseUrl + '/api/slugs';
// const rabbitUrl = baseUrl + '/api/rabbits';

var handleErrors = function(error) {
  console.log(error);
  this.errors = (this.errors || []).push(error);
};

myApp.controller('SlugController', ['$http', function($http) {
  this.slug = [];
  this.getAll = () => {
    $http.get(baseUrl + '/api/slugs')
      .then((res) => {
        this.slug = res.data;
        console.log(res.data);
      }, handleErrors.bind(this));
  };

  this.createSlug = () => {
    $http.post(baseUrl + '/api/slugs', this.newSlug)
      .then((res) => {
        this.slug.push(res.data);
        this.newSlug = null;
      }, handleErrors.bind(this));
  };

  this.updateSlug = (slug) => {
    $http.put(baseUrl + '/api/slugs' + slug._id, slug)
      .then(() => {
        slug.editing = false;
      }, handleErrors.bind(this));
  };

  this.deleteSlug = (slug) => {
    $http.delete(baseUrl + '/api/slugs/' + slug._id)
      .then(() => {
        this.slug.splice(this.slug.indexOf(slug), 1);
      }, handleErrors.bind(this));
  };
}]);

myApp.controller('RabbitController', ['$http', function($http) {
  this.rabbit = [];
  this.getAll = () => {
    $http.get(baseUrl + '/api/rabbits')
      .then((res) => {
        this.rabbit = res.data;
      }, handleErrors.bind(this));
  };

  this.createRabbit = () => {
    $http.post(baseUrl + '/api/rabbits', this.newRabbit)
      .then((res) => {
        this.rabbit.push(res.data);
        this.newRabbit = null;
      }, handleErrors.bind(this));
  };

  this.updateRabbit = (rabbit) => {
    $http.put(baseUrl + '/api/rabbits' + rabbit._id, rabbit)
      .then(() => {
        this.rabbit.splice(this.rabbit.indexOf(rabbit), 1);
      }, handleErrors.bind(this));
  };

  this.deleteRabbit = (rabbit) => {
    $http.delete(baseUrl + '/api/rabbits/' + rabbit._id)
      .then(() => {
        this.rabbit.splice(this.rabbit.indexOf(rabbit), 1);
      }, handleErrors.bind(this));
  };
}]);
