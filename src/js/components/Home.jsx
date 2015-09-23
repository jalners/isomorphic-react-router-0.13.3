import React from 'react';

export default class Hello extends React.Component {
  constructor(...args) {
    super(...args);
  }

  handleClickOnSpan() {
    console.log('Click on button');
  }

  render() {
    return (
      <div className="home">
        Home page.
        <div className="home__actions">
          <button onClick={this.handleClickOnSpan}>Click me</button>
        </div>        
      </div>
    );
  }
};