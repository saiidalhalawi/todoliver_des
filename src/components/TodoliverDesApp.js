'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup,
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageURL = require('../images/yeoman.png');

var TodoliverDesApp = React.createClass({
  render: function() {
    return (
       <div>
        <header className='head'>
          <p>Welcome !!</p>
        </header>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = TodoliverDesApp;
