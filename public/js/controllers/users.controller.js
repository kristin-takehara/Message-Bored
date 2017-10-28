//only need to dependency inject its service(UsersService)
//therefore: $scope.users = UsersService.users

angular
.module('myApp')
.controller('UsersController', ['UsersService', '$scope', '$routeParams', function(UsersService, $scope, $rootParams) {

  $scope.UsersService = UsersService;


  UsersService.getUsers();

}]);


  // $scope.getUser = function(data) {
  //   UsersService.getUser($routeParams.userId);
  //   $scope.getUser.id = '';
  // };

  // $scope.newUser = {
  //   name: ''
  // };

  // $scope.addUser = function(e) {
  //   UsersService.addUser($scope.newUser);
  //   $scope.newUser.name = '';
  // };