

(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items', ];
function ItemsController(items) {
  var ctrl = this;
  ctrl.items = items;
  ctrl.category = items.category;
  ctrl.menu_items = items.menu_items;
  // ctrl.categories = categories;


}

})();
