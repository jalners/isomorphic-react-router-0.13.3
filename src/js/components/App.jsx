import React from 'react';
import { RouteHandler } from 'react-router';
import Navigation from './Navigation';

export default class Content extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div className="container">
        <Navigation />

        <div className="content">
          <RouteHandler />
        </div>
      </div>  
    );
  }
};