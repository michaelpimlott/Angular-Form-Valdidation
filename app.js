var testApp = angular.module('testApp', []);

testApp.controller('mainController', function($scope) {
  $scope.submitForm = function(isValid) {
    if (isValid) {
      console.log('Your old grandpa is proud of you, kiddo.');
    }
  };
});
