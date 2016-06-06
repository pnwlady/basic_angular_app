module.exports = function(app) {
  app.directive('rabbitList', () => {
    return {
      restrict: 'EAC',
      replace: true,
      transclude: true,
      require: '^ngController',
      templateUrl: '/templates/rabbits/directives/list.html',
      scope: {
        rabbits: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.cancel = controller.cancelEdit;
      }
    };
  });
};
