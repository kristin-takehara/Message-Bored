angular
.module('myApp')
.controller('UserController', ['UsersService', 'MessagesService', 'TopicsService', '$scope', 'routeParams', function(UsersService, MessagesService, TopicsService, $scope, $routeParams) {

  $scope.UsersService = UsersService;
  $scope.MessagesService = MessagesService;
  $scope.TopicsService = TopicsService;

  UsersService.getUser();

  $scope.user = UsersService.user;

  MessagesService.getMessagesByAuthor();

  TopicsService.getTopics();

  $scope.getTopicNameById = TopicsService.getTopicNameById;

}]);