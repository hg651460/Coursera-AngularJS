(function () {
'use strict';

angular.module('Assignment1', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = "";

  $scope.numericLength = function () {
    var totalMenuValue = $scope.menu.split(",").length;
    $scope.menu = calculateNumericForString(totalMenuValue);
  };

  function calculateNumericForString(string) {
    var totalStringValue = string;

    if ($scope.menu.length < 1) {
      return "Please enter data first!";
    } else if (totalStringValue < 4) {
      return "Enjoy!";
    } else {
      return "Too much!";
    }

  }

}


})();
