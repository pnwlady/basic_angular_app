module.exports = function(app) {
  app.directive('rabbitForm', () => {
    return {
      restrict: 'EAC',
      require: '^ngController',
      transclude: true,
      templateUrl: '/templates/rabbits/directives/form.html',
      scope: {
        rabbit: '=',
        buttonText: '@',
        action: '@'
      },
      link: function(scope, element, attrs, controller) {
        var actions = {
          update: controller.updateRabbit,
          create: controller.createRabbit
        };
        scope.save = actions[scope.action];
      }
    };
  });
};
