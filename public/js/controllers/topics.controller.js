//only need to dependency inject its service (TopicsService)
//therefore: $scope.topics = TopicsService.topics

angular
.module('myApp')
.controller('TopicsController', ['$scope', 'TopicsService', function($scope, TopicsService) {
  $scope.topicSearch = '';
  $scope.TopicsService = TopicsService;

  $scope.newTopic = {
    name: ''
  };

  $scope.addTopic = function(e) {
    TopicsService.addTopic($scope.newTopic);
    $scope.newTopic.name = '';
  };
}]);