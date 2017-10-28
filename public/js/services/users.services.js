//services ALWAYS return a FUNCTION
//services are a FUNCTION
//services handles your models and data, and talks to the back-end (server)

angular
.module('myApp')
.service('UsersService', ['$http', '$routeParams', '$location', '$window', function($http, $routeParams, $location, $window) {

  var url = '/api/users';
  var self = this;

  //collection of users
  this.users = [];
  //collection of single user (by id)
  this.user = [];

  //initialization
  $http.get(url)
  .then(function(response) {
    self.users = response.data;
  });

  //get all users
  this.getUsers = function() {
    $http.get(url)
    .then(function(response) {
      self.users = response.data;
    });
    return self.users;
  };

  //get single user
  this.getUser = function(index) {
    var url = 'api/user/' + parseInt($routeParams.param1);

    $http.get(url)
    .then(function(response) {
      self.user = response.data;
    });
    return self.user;
  };

  //find user by id
  this.findUserById = function(id) {
    var author = null;

    for(var i = 0; i < self.users.length; i++) {
      if(self.users[i].id === id) {
        author = self.users[i].username;
      }
    }
    return author;
  };

  //create method -- add new user
  this.addUser = function(newUser) {
    if (!newUser) {
      return;
    }
  // create on front-end
    var user = {
      username: newUser.username,
      password: newUser.password
    };

    self.users.push(user);

  //created on back-end (added to database)
    $http.post(url, user)
    .then(function(response) {
      console.log('new user added to database');
      $location.path('/login');
    });
  };

//----------LogIN USER-----------------
  //logIn user
  this.loginUser = function(userInfo) {
    var user = {
      username: userInfo.username,
      password: userInfo.password
    };

    $http.post('/login', user)
    .then(function(response) {
      var username = response.data.username;
      localStorage.setItem('/loggedIn', true);
      console.log('loggedIn?', localStorage.getItem ('loggedIn'));
      $location.path('/');
      $window.location.reload();
    });
  };

  //verify a user as logged in
  //return the saved local storage data based on key
  this.getLoggedIn = function() {
    var loggedInStatus = localStorage.getItem('loggedIn');
    var loggedIn = { loggedIn: loggedInStatus };
    return loggedIn;
  };

//----------LogOUT USER----------------
  //logOut user (switch loggedIn to false)
  this.logoutUser = function() {
    $http.get('/logout')
    .then(function(response) {
      localStorage.setItem('/loggedIn', false);
      $location.path('/');
      $window.location.reload();
    });
  };

  //to update the url
  this.update = function(id, user) {
    var updateUrl = url + '/' + id;
    $http.put(updateUrl, user);
  };

}]);
