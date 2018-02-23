(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menu/menuItems/template/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
