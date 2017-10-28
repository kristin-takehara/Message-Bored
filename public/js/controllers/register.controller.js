angular
.module('myApp')
.controller('RegisterController', ['UsersService', '$scope', function(UsersService, $scope) {

  $scope.UsersService = UsersService;

  $scope.newUser = {
    username: '',
    password: ''
  };

  $scope.addUser = function(e) {
    UsersService.addUser($scope.newUser);
  };

}]);