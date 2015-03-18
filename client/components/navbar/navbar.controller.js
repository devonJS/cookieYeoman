'use strict';

angular.module('yeomanDay3App')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
      {'title': 'Cookies',
      'link': '/cookie'}];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
