//services ALWAYS return a FUNCTION
//services are a FUNCTION
//services handles your models and data, and talks to the back-end (server).

angular
.module('myApp')
.service('TopicsService', ['$http', '$routeParams', '$location', '$root', function($http, $routeParams, $location, $root) {
  var url = '/api/topics';
  var self = this;

  //collection of users
  this.topics = [];
  this.topic = [];

  //initialization
  $http.get(url)
  .then(function(response) {
    self.topics = response.data;
  });

  //get all topics
  this.getTopics = function() {
    $http.get(url)
    .then(function(response) {
      self.topics = response.data;
    });
    return self.topics;
  };

  //get single topic
  this.getTopic = function(index) {
    var url ='api/topic' + parseInt($routeParams.param2);

    $http.get(url)
    .then(function(response) {
      self.topic = response.data;
    });
    return self.topic;
  };

  this.getTopicNameById = function(id) {
    var name = null;

    for (var i = 0; i < self.topics.length; i++) {
      if(self.topics[i].id === id) {
        name = self.topics[i].name;
      }
    }
    return name;
  };

  //find topic by id
  this.findTopicById = function(id) {
    var topicName = null;

    for(var i = 0; i < self.topics.length; i++) {
      if(self.topic[i].id === id) {
        topicName = self.topics[i].name;
      }
    }
    return topicName;
  };

  //create method -- add new topic
  this.addTopic = function(newTopic) {
    if(!newTopic) {
      return;
    }
  //create on front-end
    var topic = {
      name: newTopic.name,
    };

    //created on back-end
    $http.post(url, topic)
    .then(function(response) {
      console.log(' new topic added to database');
      $location.path('/login');
      self.topics.push(response.data);
    })
    .catch(function(err) {
      console.log('Unable to add new topic', err);
    });
  };
//----------EDIT TOPIC----------------
this.editTopic = function(modifiedTopicName) {
  var topic = {
    name: modifiedTopicName.name
  };
  var url = 'api/topics/' + parseInt($routeParams.param2);

  $http.put(url, topic)
  .then(function(response) {
    var index = null;
    for (var i = 0; i < self.topics.length; i++) {
      if(self.topics[i].id === $routeParams.param2) {
        index = i;
      }
    }
    self.topics.splice(i, 1, response.data);
    $route.reload();
  })
  .catch(function(err) {
    console.log('Unable to edit topic', err);
  });
};


  //to update the url
  this.update = function(id, topic) {
    var updateUrl = url + '/' + id;
    $http.put(updateUrl, topic);
  };

}]);


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
