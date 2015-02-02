var myApp = angular.module('myApp', []);

myApp.factory('Data',function (){
  return {message:"I'm data from a service"}
});

myApp.controller('FirstCtrl', FirstCtrl);
myApp.controller('SecondCtrl', SecondCtrl);

function FirstCtrl($scope, Data) {
  $scope.data = Data;
}

function SecondCtrl($scope, Data) {
  $scope.data = Data; 

  $scope.reversedMessage = function(message){
    return message.split("").reverse().join("");
  }
}