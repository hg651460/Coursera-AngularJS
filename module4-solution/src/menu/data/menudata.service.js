(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http']
  function MenuDataService($http) {
    var service = this;
    // List of shopping items
    var items = [];

    service.getItemsForCategory = function (categoryShortName){

      var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
        params:{
          category:categoryShortName
        }
      }).then(
        function (response){
            console.log("inside getItemsForCategory ", response.data);
          return response.data;
        }
      )
      .catch(
        function (response){
          console.log("error",response);
        }
      )
      ;
      return response;


    };

    service.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      })
      .then(
        function (response){
          console.log("response data:", response.data);
          return response.data;
        }
      )
      .catch(
        function (response){
          console.log("error",response);
        }
      )
      ;
      return response;
    };




  }

})();
