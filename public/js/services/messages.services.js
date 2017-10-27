//services ALWAYS return a FUNCTION
//services are a FUNCTION
//services handles your models and data, and talks to the back-end (server)

angular
.module('myApp')
.service('MessagesService', ['$http', function($http) {
  var url = '/api/messages';
  var self = this;

  //collection of messages
  this.messages =[];

  //initialization
  $http.get(url)
  .then(function(response) {
    self.users = response.data;
  });

  //get methods
  this.getMessages = function() {
    return messages;
  };
  this.getMessage = function(index) {
    return messages[index];
  };

  //create method
  this.addMessage = function(givenMessage) {
    if(!givenMessage) {
      return;
    }
    //create on front-end
    var message = {
      body: givenMessage.body,
    };

    //created on back-end
    return $http.post(url, message)
    .then(function(response){
      self.messages.push(response.data);
      console.log('response data', response.data);
      console.log('message created on back-end');
      return response.data;
    });
  };

  //to update the url
  this.update = function(id, user) {
    var updateUrl = url + '/' + id;
    $http.put(updateUrl, message);
  };

}]);