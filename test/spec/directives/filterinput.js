'use strict';

describe('Directive: filterInput', function () {

  // load the directive's module
  beforeEach(module('movieManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<filter-input></filter-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the filterInput directive');
  }));
});