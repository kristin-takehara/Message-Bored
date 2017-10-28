angular
.module('myApp')
.controller('LoginController', ['UsersService', '$scope', function(UsersService, scope) {

  $scope.UsersService = UsersService;

  UsersService.loginUser();

  $scope.user = UsersService.user;


}]);