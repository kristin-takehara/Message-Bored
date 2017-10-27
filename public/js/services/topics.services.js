//services ALWAYS return a FUNCTION
//services are a FUNCTION
//services handles your models and data, and talks to the back-end (server).

angular
.module('myApp')
.service('TopicsService', ['$http', function($http) {
  var url = '/api/topics';
  var self = this;

  //collection of users
  this.topics = [];

  //initialization
  $http.get(url)
  .then(function(response) {
    self.topics = response.data;
  });

  //get methods
  this.getTopics = function() {
    return topics;
  };
  this.getTopic = function(index) {
    return topics[index];
  };

  //create method
  this.addTopic = function(givenTopic) {
    if(!givenTopic) {
      return;
    }
  //create on front-end
    var topic = {
      name: givenTopic.name,
    };
    self.topics.push(topic);

    //created on back-end
    $http.post(url, topic)
    .then(function(response) {
      console.log('topic created on back-end');
    });
  };

  //to update the url
  this.update = function(id, topic) {
    var updateUrl = url + '/' + id;
    $http.put(updateUrl, topic);
  };

}]);