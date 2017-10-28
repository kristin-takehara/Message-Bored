//only need to dependency inject its service(UsersService)
//therefore: $scope.users = UsersService.users

angular
.module('myApp')
.controller('UsersController', ['$scope', 'UsersService', '$routeParams', function($scope, UsersService, $rootParams) {
  $scope.userSearch = '';
  $scope.UsersService = UsersService;


  $scope.user = UsersService.user;

  $scope.getUser = function(data) {
    UsersService.getUser($routeParams.userId);
    $scope.getUser.id = '';
  };

  $scope.newUser = {
    name: ''
  };

  $scope.addUser = function(e) {
    UsersService.addUser($scope.newUser);
    $scope.newUser.name = '';
  };

}]);