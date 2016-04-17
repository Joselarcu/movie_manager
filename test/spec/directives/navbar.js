'use strict';

describe('Directive: navbar', function () {
  var $compile,
      $rootScope,
      $templateCache;
  // load the directive's module
  beforeEach(module('movieManagerApp'));

 //TODO

  beforeEach(inject(function (_$compile_, _$rootScope_,_$templateCache_) {
    // $compile = _$compile_;
    // $rootScope = _$rootScope_;
    // $templateCache = _$templateCache_;
    // $templateCache.put('components/navbar/navbar.html',  '<img alt="Brand" src="images/wuaki.png>"');
    // $templateCache.put('main/main.html', '<div></div>');
  }));

  it('should make visible the navbar', inject(function ($compile) {
    // var element = $compile("<navbar></navbar>")($rootScope);
    // $rootScope.$digest();
    //  expect(element.html()).toContain('<img alt="Brand" src="images/wuaki.png>"');
  }));
});

