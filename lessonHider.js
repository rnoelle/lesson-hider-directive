angular.module('directivePractice')
    .directive('lessonHider', function() {
        return {
            templateUrl: './lesson.html',
            restrict: 'E',
            scope: {
                lesson: '=',
                dayAlert: '&',
                crossed: '=crossed',
                words: '=words',
                deleteLesson: '&'
            },
            link: function(scope, element, attr) {
              scope.getSchedule.then(function(response) {
                  scope.schedule = response.data;
                  scope.schedule.forEach(function(scheduleDay) {
                      if (scheduleDay.lesson === scope.lesson) {
                        scope.lessonDay = scheduleDay.weekday;
                          if (scope.crossed) {
                            element.css('text-decoration', 'line-through');
                          } else {
                            element.css('text-decoration', 'none');
                          } return;
                      }
                  });
                  if (scope.lessonDay === undefined) {
                    scope.lessonDay = "on an unplanned day.";
                  }
              });
                scope.$watch('crossed', function() {
                  scope.getSchedule.then(function(response) {
                      scope.schedule = response.data;
                      scope.schedule.forEach(function(scheduleDay) {
                          if (scheduleDay.lesson === scope.lesson) {
                            scope.lessonDay = scheduleDay.weekday;
                              if (scope.crossed) {
                                element.css('text-decoration', 'line-through');
                              } else {
                                element.css('text-decoration', 'none');
                              } return;
                          }
                      });
                      if (scope.lessonDay === undefined) {
                        scope.lessonDay = "on an unplanned day.";
                      }
                  });
                });
            },

            controller: function($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();
            }
        };
    });
