'use strict';

describe('Directive: navbar', function () {
  var $compile,
      $rootScope;
  // load the directive's module
  beforeEach(module('movieManagerApp'));

 

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should make visible the navbar', inject(function ($compile) {
    var element = $compile("<navbar></navbar>")($rootScope);
    $rootScope.$digest();
    console.log(".....>",element);
     expect(element.html()).toContain('<img alt="Brand" src="images/wuaki.png">');
  }));
});