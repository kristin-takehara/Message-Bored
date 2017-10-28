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
  .when('/register', {
    templateUrl: '/views/register.html',
    controller: 'RegisterController'
  })
  .when('/login', {
    templateUrl: '/views/login.html',
    controller: 'LoginController'
  })
  .when('/logout', {
    templateUrl: '/views/logout.html',
    controller: 'UserLoginController'
  })
  .when('/users', {
    templateUrl: '/views/users.html',
    controller: 'UsersController'
  })
  .when('/users/:id', {
    templateUrl: '/views/user.html',
    controller: 'UsersController'
  })
  .when('/topics', {
    templateUrl: '/views/topics.html',
    controller: 'TopicsController'
  })
  .when('/topics/:id', {
    templateUrl: '/views/topics.html',
    controller: 'TopicsController'
  })
  .when('/latest', {
    templateUrl: '/views/messages/latest',
    controller: 'LatestController'
  })
  .when('/messages', {
    templateUrl: '/views/messages.html',
    controller: 'MessagesController'
  })
  .otherwise({
    template: '<h1><center>...Uh Oh...</center></h1>'
  });

  // this gets rid of the need for #!
  $locationProvider.html5Mode(true);

}]);