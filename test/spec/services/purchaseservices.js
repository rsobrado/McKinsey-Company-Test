'use strict';

describe('Service: purchaseServices', function () {

  // load the service's module
  beforeEach(module('mckinseyApp'));

  // instantiate service
  var purchaseServices;
  beforeEach(inject(function (_purchaseServices_) {
    purchaseServices = _purchaseServices_;
  }));

  it('should do something', function () {
    expect(!!purchaseServices).toBe(true);
  });

});
