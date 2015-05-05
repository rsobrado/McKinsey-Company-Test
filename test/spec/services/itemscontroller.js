'use strict';

describe('Service: itemsController', function () {

  // load the service's module
  beforeEach(module('mckinseyApp'));

  // instantiate service
  var itemsController;
  beforeEach(inject(function (_itemsController_) {
    itemsController = _itemsController_;
  }));

  it('should do something', function () {
    expect(!!itemsController).toBe(true);
  });

});
