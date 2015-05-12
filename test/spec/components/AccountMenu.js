'use strict';

describe('AccountMenu', function () {
  var React = require('react/addons');
  var AccountMenu, component;

  beforeEach(function () {
    AccountMenu = require('components/AccountMenu.js');
    component = React.createElement(AccountMenu);
  });

  it('should create a new instance of AccountMenu', function () {
    expect(component).toBeDefined();
  });
});
