angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function() {
    console.log("This is the helloWorld function in the controller mainCtrl");
  };

  $scope.todos = [
    {"name":"Faire la vaisselle"},
    {"name":"Acheter des chaises"},
    {"name":"Congeler la viande"},
    {"name":"Preparer le diaporama"},
    {"name":"Acheter des yaourts"}
  ]

});
