'use strict';

describe('Controller: SortcolumnCtrl', function () {

  // load the controller's module
  beforeEach(module('movieManagerApp'));

  var SortcolumnCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SortcolumnCtrl = $controller('SortcolumnCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SortcolumnCtrl.awesomeThings.length).toBe(3);
  });
});
