(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.state = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getMenuItemByShortName = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category.toUpperCase() +'.json').then(function (response) {
      return response.data;
    });
  };

  service.saveState = function(state){

    service.state = state;
    console.log("state in saveState", service.state);
  };

  service.getState = function(){
    console.log("state in getState", service.state);
    return service.state;
  };


}



})();
