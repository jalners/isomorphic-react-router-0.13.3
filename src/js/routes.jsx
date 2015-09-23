import React from 'react';
import { DefaultRoute, Route, Router } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

var routes = (
  <Route name="app" path='/' handler={App}>    
    <Route name="about" path='about' handler={About} />
    <DefaultRoute name="default" handler={Home} />  
  </Route>
);

module.exports = routes;