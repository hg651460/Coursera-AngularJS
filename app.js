(function(){
'use strict'; //avoid mistakes if not defined var it will complaint

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope){
    $scope.name = "Harsha";
    $scope.sayHello = function(){
      return "Hello";
    };
  });

})();
