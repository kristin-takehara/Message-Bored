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

//----------------------------------------

//   this.getLoggedIn = function(){
//     var loginStatus = localStorage.getItem('loggedIn');
//     var loggedIn = {loggedIn : loginStatus};
//     return loggedIn;
//   };

// }]);



// angular.module('App')
// .service('TopicService', ['$http', '$routeParams', '$route', function($http, $routeParams, $route){

//   var self = this;
//   var topicsUrl = '/api/topics';

//   this.topics = [];
//   this.topic = [];
//   this.editForm = false;

//   this.openEditForm = function(){
//     if(self.editForm === false){
//       self.editForm = true;
//     }else{
//       self.editForm = false;
//     }
//     localStorage.setItem('editForm', self.editForm);
//     return localStorage.getItem('editForm');
//   };

//   this.getTopics = function(){
//     $http.get(topicsUrl)
//     .then(function(response){
//       self.topics = response.data;
//     });
//     return self.topics;
//   };

//   this.getTopic = function(){
//     var apiUrl = 'api/topics/' + parseInt($routeParams.param2);

//     $http.get(apiUrl)
//     .then(function(response){
//       self.topic = response.data;
//   });
//     return self.topic;
//   };

//   this.getTopicNameById = function(id){
//     var topicName = null;
//     for (var i = 0; i < self.topics.length; i++) {
//       if(self.topics[i].id === id){
//         topicName = self.topics[i].name;
//       }
//     }
//     return topicName;
//   };

//   this.addTopic = function(newTopic) {
//     var topic = {
//       name: newTopic.name
//     };

//     $http.post(topicsUrl, topic)
//     .then(function(response) {
//       console.log('Added topic to backend database!');
//       self.topics.push(response.data);
//     })
//     .catch(function(err){
//       console.log(err);
//     });
//   };

//   this.editTopic = function(editedTopic){
//     var topic = {
//       name: editedTopic.name
//     };

//     var apiUrl = 'api/topics/' + parseInt($routeParams.param2);

//     $http.put(apiUrl, topic)
//     .then(function(response) {
//       var index = null;
//       for (var i = 0; i < self.topics.length; i++) {
//         if(self.topics[i].id === $routeParams.param2){
//           index = i;
//         }
//       }
//       self.topics.splice(i, 1, response.data);
//       $route.reload();
//     });
//   };

// }]);

// angular.module('App')
// .service('MessageService', ['$http', '$routeParams', function($http, $routeParams){

//   var self = this;
//   var newMessageApi = 'api/messages/';
//   var latestApi = '/api/messages/latest';


//   this.messages = [];
//   this.latestMessages = [];
//   this.authorMessages = [];

//   this.getMessages = function(){
//     var byTopicApi = '/api/messages/by-topic/' + parseInt($routeParams.param2);
//     $http.get(byTopicApi)
//     .then(function(response) {
//       self.messages = response.data;
//     });
//     return self.messages;
//   };

//   this.getMessagesByAuthor = function(){
//     var byAuthorApi = '/api/messages/' + parseInt($routeParams.param1);

//     $http.get(byAuthorApi)
//     .then(function(response) {
//       console.log(response.data);
//       self.authorMessages = response.data;
//     });
//     return self.authorMessages;
//   };

//   this.addMessage = function(newMessage){
//     var message = {
//       body: newMessage.body,
//       topicId: parseInt($routeParams.param2)
//     };

//     $http.post(newMessageApi, message)
//     .then(function(response) {
//       console.log('message posted to database!!');
//       self.messages.push(response.data);
//     });
//   };

//   this.getLatest = function(){
//     $http.get(latestApi)
//     .then(function(response) {
//       self.messages = response.data;
//     });
//     return self.messages;
//   };

// }]);