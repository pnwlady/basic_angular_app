module.exports = function(app) {
  app.directive('rabbitItem', () => {
    return {
      restrict: 'EAC',
      templateUrl: '/templates/rabbits/directives/list_item.html',
      require: '^ngController',
      transclude: true,
      scope: {
        rabbit: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.remove = controller.removeRabbit;
        scope.edit = controller.startRabbit;
      }
    };
  });
};
