'use strict';

angular.module('yeomanDay3App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cookie', {
        templateUrl: 'app/cookie/cookie.html',
        controller: 'CookieCtrl'
      });
  });
