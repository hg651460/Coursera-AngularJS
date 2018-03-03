(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var $ctrl = this;
  $ctrl.isError = false;
  $ctrl.isDataSaved = false;

  $ctrl.submit = function (favorite) {
    if(favorite){
     var menuItem =   MenuService.getMenuItemByShortName(favorite)
     .then(function(response){
       console.log("in response:", response);
       var state ={
         favorite: response,
         user: $ctrl.user
       };
       MenuService.saveState(state);
       $ctrl.isDataSaved = true;
       $ctrl.isError = false;
     })
     .catch(function(error){
       $ctrl.isDataSaved = false;
       $ctrl.isError = true;
     });


    }
  }

}

})();
