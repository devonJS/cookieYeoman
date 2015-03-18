'use strict';

describe('Controller: CookieCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanDay3App'));

  var CookieCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CookieCtrl = $controller('CookieCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
