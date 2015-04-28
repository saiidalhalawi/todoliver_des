'use strict';

describe('Guest', function () {
  var React = require('react/addons');
  var Guest, component;

  beforeEach(function () {
    Guest = require('components/Guest.js');
    component = React.createElement(Guest);
  });

  it('should create a new instance of Guest', function () {
    expect(component).toBeDefined();
  });
});
