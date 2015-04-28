'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    Link = Router.Link;

require('styles/Guest.scss');

var Guest = React.createClass({
  render: function () {
    return (
        <section>
          <h1>you better logged in. </h1>
          <Link to="walls"><button>Sign up now</button></Link>
        </section>
      );
  }
});

module.exports = Guest;

