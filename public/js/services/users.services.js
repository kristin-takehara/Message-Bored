//services ALWAYS return a FUNCTION
//services are a FUNCTION
//services handles your models and data, and talks to the back-end (server)

angular
.module('myApp')
.service('UsersService', ['$http', function($http) {
  var url = '/api/users';
  var self = this;

  //collection of users
  this.users = [];

  //initialization
  $http.get(url)
  .then(function(response) {
    self.users = response.data;
  });

  //get methods
  this.getUsers = function() {
    return users;
  };
  this.getUser = function(index) {
    return users[index];
  };

  //create method
  this.addUser = function(givenUser) {
    if (!givenUser) {
      return;
    }
  // create on front-end
    var user = {
      name: givenUser.name,
    };
    self.users.push(user);

    //created on back-end
    $http.post(url, user)
    .then(function(response) {
      console.log('user created on back-end');
    });
  };

  //to update the url
  this.update = function(id, user) {
    var updateUrl = url + '/' + id;
    $http.put(updateUrl, user);
  };

}]);