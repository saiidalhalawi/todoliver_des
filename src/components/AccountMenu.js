'use strict';

var React = require('react/addons');

require('styles/AccountMenu.scss');

var AccountMenu = React.createClass({
  getDefaultProps: function()
    {
      return {
          isOpen: false
      };
    },
  render: function () {
    if (this.props.isOpen === true)
        {
            return (
              <div className="dropdown">
                  <ul>
                      <li><a href="#">News</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Guidelines</a></li>
                      <li><a href="#">Exchange</a></li>
                      <li><a href="#">Forum</a></li>
                  </ul>
              </div>
          );
      }
  }
});

module.exports = AccountMenu;

