angular
.module('myApp')
.controller('LoginController', ['UsersService', '$scope', function(UsersService, $scope) {

  $scope.userInfo = {
    username: '',
    password: ''
  };

  $scope.login = function(e) {
    UsersService.loginUser($scope.userInfo);
  };

}]);