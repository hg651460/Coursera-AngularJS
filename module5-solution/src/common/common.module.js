(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://salty-beyond-84100.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
