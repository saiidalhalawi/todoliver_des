'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    Link = Router.Link;

require('styles/Guest.scss');

var Guest = React.createClass({
  render: function () {
    return (
        <section>
          <h1 className="article-title">Login to toDoLiver </h1>
          <div className="l-login">
            <div className="input-box" >
              <fieldset>
                <ul>
                  <li><label for="email">Email</label></li>
                  <li><input type="text" name="email" placeholder="enter a email" /></li>
                  <li><label for="password">Password</label></li>
                  <li><input type="text" name="password" placeholder="enter a password" /></li>
                  <li>
                    <Link to="walls">
                      <button className="submit-button">Sign up now</button>
                    </Link>
                  </li>
                </ul>
              </fieldset>
            </div>
          </div>
        </section>
      );
  }
});

module.exports = Guest;

