'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    Link = Router.Link;

require('styles/WallList.scss');

var WallList = React.createClass({
  render: function () {
    return (
        <section class="l-content">
          <h1>My&nbsp;boards</h1>
          <ul>
            <li><Link to="tasks">AAAA</Link></li>
            <li><Link to="tasks">BBBB</Link></li>
            <li>Create new board ....</li>
          </ul>
        </section>
      );
  }
});

module.exports = WallList;

