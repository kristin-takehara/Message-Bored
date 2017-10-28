//only need to dependency inject its service(MessagesService)
//therefore: $scope.messages = MessagesService.messages

angular
.module('myApp')
.controller('MessagesController', ['$scope', 'MessagesService', function($scope, MessagesService) {
  $scope.messageSearch = '';
  $scope.MessagesService = MessagesService;

  $scope.newMessage = {
    body: ''
  };

  $scope.addMessage = function(e) {
    MessagesService.addMessage($scope.newMessage)
    .then(function() {
     $scope.newMessage.body = '';
    });
  };

}]);