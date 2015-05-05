'use strict';

describe('Service: coinsService', function () {

  // load the service's module
  beforeEach(module('mckinseyApp'));

  // instantiate service
  var coinsService;
  beforeEach(inject(function (_coinsService_) {
    coinsService = _coinsService_;
  }));

  it('should do something', function () {
    expect(!!coinsService).toBe(true);
  });

});
