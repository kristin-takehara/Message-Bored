//only need to dependency inject its service(UsersService)
//therefore: $scope.users = UsersService.users

angular
.module('myApp')
.controller('UsersController', ['$scope', 'UsersService', function($scope, UsersService) {
  $scope.userSearch = '';
  $scope.UsersService = UsersService;

  $scope.newUser = {
    name: ''
  };

  $scope.addUser = function(e) {
    UsersService.addUser($scope.newUser);
    $scope.newUser.name = '';
  };
}]);