'use strict';

var TodoliverDesApp = require('./TodoliverDesApp.js'),
    React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    Link = Router.Link,
    DefaultRoute = Router.DefaultRoute;

/* Specified Components */
var Guest = require('./Guest.js'),
    Content = require('./Content.js'),
    WallList = require('./WallList.js'),
    TaskList = require('./TaskList.js');

var contentElem = document.getElementById('l-contents');

var Routes = (
  <Route handler={TodoliverDesApp}>
    <Route name="/" handler={Content}>
        <Route name="walls" path="walls" handler={WallList}/>
        <Route name="tasks" path="tasks" handler={TaskList}/>

        <DefaultRoute handler={Guest}/>
    </Route>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, contentElem);
});
