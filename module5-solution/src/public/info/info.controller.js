(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['savedItem'];
function InfoController(savedItem) {
  var $ctrl = this;
  if(savedItem.favorite){
    $ctrl.isNotRegistered =false;
  }else {
    $ctrl.isNotRegistered =true;
  }
  $ctrl.favorite = savedItem.favorite;
  $ctrl.user = savedItem.user;
}

})();
