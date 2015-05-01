'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup,
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

// CSS
require('../../node_modules/normalize.css/normalize.css');
require('../styles/main.scss');
require('../styles/bases/base.scss');
require('../styles/layouts/common.scss');

var imageURL = require('../images/yeoman.png');

var TodoliverDesApp = React.createClass({
  render: function() {
    return (
       <div>
        <header className='l-header'>
          <p>Welcome !!</p>
        </header>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = TodoliverDesApp;
