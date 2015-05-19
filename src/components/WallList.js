'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    Link = Router.Link;

require('styles/modules/WallList.scss');

var WallList = React.createClass({
  render: function () {
    return (
        <section>
          <h1 className="article-title">My&nbsp;boards</h1>
          <div className="l-login">
            <ul className="walllist" >
              <li><Link to="tasks">AAAA</Link></li>
              <li><Link to="tasks">BBBB</Link></li>
              <li>Create new board ....</li>
            </ul>
          </div>
        </section>
      );
  }
});

module.exports = WallList;

