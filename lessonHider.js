angular.module('directivePractice')
  .directive('lessonHider', function () {
    return {
      restrict: 'E',
      templateUrl: './lesson.html',
      link: function (scope, element, attr) {
      }
    };
  });
