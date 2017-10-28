//services ALWAYS return a FUNCTION
//services are a FUNCTION
//services handles your models and data, and talks to the back-end (server)

angular
.module('myApp')
.service('MessagesService', ['$http', '$routeParams', function($http, $routeParams) {
  var url = '/api/messages';
  var self = this;
  var latestApi = '/api/messages/latest';

  //collection of messages
  this.messages =[];
  this.latestMessages = [];
  this.authorMessages = [];

  //initialization
  $http.get(url)
  .then(function(response) {
    self.users = response.data;
  });

  //get all messages
  this.getMessages = function() {
    var byTopic = '/api/messages/by-topic/' + parseInt($routeParams.param2);

    $http.get(byTopic)
    .then(function(response) {
      self.messages = response.data;
    });
    return self.messages;
  };

  //get single message by author
  this.getMessagesByAuthor = function() {
    var byAuthor = '/api/messages/' + parseInt($routeParams.param1);

    $http.get(byAuthor)
    .then(function(response) {
      console.log(response.data);
      self.authorMessages = response.data;
    });
    return self.authorMessages;
  };

  //create new messages
  this.addMessage = function(newMessage) {
    if(!newMessage) {
      return;
    }
    //create on front-end
    var message = {
      body: newMessage.body,
      topicId: parseInt($routeParams.param2)
    };

      //created on back-end
    $http.post(newMessage, message)
    .then(function(response) {
      console.log('new message added to database');
      self.messages.push(response.data);
    })
    .catch(function(err) {
      console.logt('Unable to add new message', err);
    });




    return $http.post(url, message)
    .then(function(response){
      self.messages.push(response.data);
      console.log('response data', response.data);
      console.log('message created on back-end');
      return response.data;
    });
  };

//----------------------------------------

  //GET latest
  this.getLatest = function() {
    $http.get(latest)
    .then(function(response) {
      self.messages = response.data;
    });
    return self.messages;
  };

  //to update the url
  this.update = function(id, user) {
    var updateUrl = url + '/' + id;
    $http.put(updateUrl, message);
  };

}]);