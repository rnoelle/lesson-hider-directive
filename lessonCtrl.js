angular.module('directivePractice')
  .controller('lessonCtrl', function ($scope) {
    // $scope.test = 'Two-way data binding!';
      $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
      $scope.crossed = false;

      $scope.announceDay = function (lesson, day) {
        console.log(day);
        alert(lesson + ' is active on ' + day);
      };

      $scope.removeLesson = function (thisLesson) {
        console.log("ran");
          $scope.lessons.splice($scope.lessons.indexOf(thisLesson), 1);
      };
  });
