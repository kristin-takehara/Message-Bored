//creating a new module
angular
.module('myApp', ['ngRoute']);

//getting back the new module
var app = angular.module('myApp')
//the order of indexes that .config takes MUST MATCH the order of the function arguments!!!
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  //define routes
  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
  })
  .when('/users', {
    templateUrl: '/views/users.html',
    controller: 'UsersController'
  })
  .otherwise({
    template: '<h1><center>Uh Oh...</center></h1>'
  });

  // this gets rid of the need for #!
  $locationProvider.html5Mode(true);

}]);