'use strict';

describe('Directive: verifyEquals', function () {

  // load the directive's module
  beforeEach(module('eTrabahoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<verify-equals></verify-equals>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the verifyEquals directive');
  }));
});
