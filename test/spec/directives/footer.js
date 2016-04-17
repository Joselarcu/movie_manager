'use strict';

describe('Directive: footer', function () {
  var $compile,
      $rootScope,
      $templateCache;

  // load the directive's module
  beforeEach(module('movieManagerApp'));
  beforeEach(module());
 

  beforeEach(inject(function (_$compile_,_$rootScope_,_$templateCache_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $templateCache = _$templateCache_;
    $templateCache.put('components/footer/footer.html',  '<p><span class="glyphicon glyphicon-heart"></span> José Vicente Lara</p>');
    $templateCache.put('main/main.html', '<div></div>');


  }));


  it('should make hidden element visible', function() {
    var element = $compile("<footer></footer>")($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain("José Vicente Lara");
  });
});
