'use strict';

angular.module('yeomanDay3App')
  .controller('CookieCtrl', function ($scope, $http) {
    $scope.cookies = [];
    $http.get('/api/cookie').success(function(cookies){
      $scope.cookies = cookies;
    });

    $scope.search = function() {
      $http.get('/api/cookie/' + $scope.searchCookie).success(function (cookies) {
        $scope.cookies = cookies;
      })
    };

    $scope.addCookie = function(){
      //if user tries to submit new cookie with any missing fields, will not add to database
      if($scope.newCookieName === '' || $scope.newCookieNum === '' || $scope.newCookieDescription === '') {
        return;
      }
      $http.post('/api/cookie', {name: $scope.newCookieName, numCookies: $scope.newCookieNum, description: $scope.newCookieDescription});

      //clear the add form
      $scope.newCookieName = '';
      $scope.newCookieNum = '';
      $scope.newCookieDescription = '';
    }
  });
