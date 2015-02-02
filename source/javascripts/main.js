var myApp = angular.module('myApp', []);

myApp.controller('AvengersCtrl', AvengersCtrl);

myApp.factory('Avengers',function(){
  var Avengers = {};

  Avengers.cast = [
    {
      name: "Robert Downey",
      character: "Ironman"
    },
    {
      name: "Joe Mclean",
      character: "Aquaman"
    },    {
      name: "Sarah Ungerleider",
      character: "Hawk Girl"
    },    {
      name: "Katie Higgins",
      character: "Cyclops"
    },    {
      name: "Kate Melvin",
      character: "Rogue"
    },    {
      name: "John Villani",
      character: "Spiderman"
    }    
  ];

  return Avengers;
})

function AvengersCtrl($scope, Avengers) {
  $scope.avengers = Avengers;
}