(function () {
'use strict';

angular.module('Assignment1', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = "";
  $scope.message = "";
  $scope.txtmessage = "";

  $scope.numericLength = function () {
    var totalMenuValue = $scope.menu.split(",").length;
    $scope.menu = calculateNumericForString(totalMenuValue);
  };

  function calculateNumericForString(string) {
    var totalStringValue = string;

    if ($scope.menu.length < 1) {
        $scope.message = "error";
        $scope.txtmessage = "txterror";
      return "Please enter data first!";
    } else if (totalStringValue < 4) {
        $scope.message = "enjoy";
        $scope.txtmessage = "txtenjoy";
      return "Enjoy!";
    } else {
        $scope.message = "enjoy";
        $scope.txtmessage = "txtenjoy";
      return "Too much!";
    }

  }

}


})();
