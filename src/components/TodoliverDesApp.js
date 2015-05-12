'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup,
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

// load Components
var Header = require('./Header.js');

// load SCSS
require('../../node_modules/normalize.css/normalize.css');
require('../styles/main.scss');
require('../styles/bases/base.scss');
require('../styles/layouts/common.scss');
require('../styles/modules/common.scss');
require('../styles/states/common.scss');

var TodoliverDesApp = React.createClass({
  render: function() {
    return (
      <div className="l-wrapper">
        <Header/>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = TodoliverDesApp;
