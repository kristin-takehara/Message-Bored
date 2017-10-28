angular
.module('myApp')
.controller('LastestController', ['MessagesServices', 'TopicsService', 'UsersService', $scope, function(MessagesServices, TopicsService, UsersService, $scope) {

  $scope.MessagesServices = MessagesServices;
  $scope.TopicsService = TopicsService;
  $scope.UsersService = UsersService;

  MessagesServices.getLatest();

  $scope.findTopicById = TopicsService.findTopicById();

  UsersService.getUsers();
  $findUserById = UsersService.findUserById;
}]);