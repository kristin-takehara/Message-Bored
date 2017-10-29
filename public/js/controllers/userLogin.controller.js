angular
.module('myApp')
.controller('UserLoginController', ['UsersServices', '$scope', '$routeParams', '$timeout', function(UsersServices, $scope, $routeParams, $timeout) {

  $scope.UsersServices = UsersServices;

  $scope.loginObj = UsersServices.getLoggedIn();//<<<--check

  $scope.logOut = UsersServices.logOut;

  // $scope.logoutHeader = "successfully logged out";
  // $timeout(function() {
  //   $scope.logoutHeader = "..::Thank You For Coming::..";
  // }, 3000);

}]);