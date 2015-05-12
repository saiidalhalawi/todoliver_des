'use strict';

var React = require('react/addons');
var Router = require('react-router'),
    Link = Router.Link;

require('styles/Header.scss');

var Header = React.createClass({
  render: function () {
    return (
        <header className='l-header'>
            <div className="topbar-item left back-to-home">
              <Link to="/"><span>Boards</span></Link>
            </div>
            <div className="topbar-item left searchbox">
              <input type="text" placeholder="Enter a search word ..." />
            </div>
            <div className="topbar-item is-centered service-name">
              <Link to="/"><span>toDoLiver</span></Link>
            </div>
            <div className="topbar-item right account-menu">
              <Link to="/"><span>Japata</span></Link>
            </div>
        </header>
      );
  }
});

module.exports = Header;

