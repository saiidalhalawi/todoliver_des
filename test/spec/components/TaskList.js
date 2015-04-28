'use strict';

describe('TaskList', function () {
  var React = require('react/addons');
  var TaskList, component;

  beforeEach(function () {
    TaskList = require('components/TaskList.js');
    component = React.createElement(TaskList);
  });

  it('should create a new instance of TaskList', function () {
    expect(component).toBeDefined();
  });
});
