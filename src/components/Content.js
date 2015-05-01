'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

require('styles/Content.scss');

var Content = React.createClass({
  render: function () {
    return (
        <main className="l-main">
          <RouteHandler/>
        </main>
      );
  }
});

module.exports = Content;

