'use strict';

angular.module('yeomanDay3App')
  .controller('CookieCtrl', function ($scope, $http) {
    $scope.cookies = [];
    $scope.originalName = '';
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

      $http.get('/api/cookie').success(function(cookies){
        $scope.cookies = cookies;
      });

    };

    $scope.updateCookie = function(cookie){
      //if user tries to update cookie with any missing fields, will not add to database
      if(cookie.name === '' || cookie.numCookies === '' || cookie.description === '') {
        return;
      }

      $http.put('/api/cookie/' + cookie._id, {name: cookie.name, numCookies: cookie.numCookies, description: cookie.description});
      console.log(cookie.name);
    };


    //delete runs slower than get, so we have to wait for the success on delete first before refreshing
    $scope.deleteCookie = function(cookie) {
      $http.delete('/api/cookie/' + cookie._id).success(function(){
        $http.get('/api/cookie').success(function(cookies){
          $scope.cookies = cookies;
        })
      });
    };
  });
