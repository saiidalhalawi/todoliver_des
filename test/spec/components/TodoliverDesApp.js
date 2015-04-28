'use strict';

describe('TodoliverDesApp', function () {
  var React = require('react/addons');
  var TodoliverDesApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TodoliverDesApp = require('components/TodoliverDesApp.js');
    component = React.createElement(TodoliverDesApp);
  });

  it('should create a new instance of TodoliverDesApp', function () {
    expect(component).toBeDefined();
  });
});
