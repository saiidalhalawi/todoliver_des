'use strict';

describe('WallList', function () {
  var React = require('react/addons');
  var WallList, component;

  beforeEach(function () {
    WallList = require('components/WallList.js');
    component = React.createElement(WallList);
  });

  it('should create a new instance of WallList', function () {
    expect(component).toBeDefined();
  });
});
