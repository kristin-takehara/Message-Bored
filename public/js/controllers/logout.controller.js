angular
.module('myApp')
.controller('LogoutController', ['UsersService', '$scope', function(UserService, $scope) {

  $scope.UsersService = UsersService;

  UsersService.logoutUser();

  $scope.user = UsersService.user;

}]);