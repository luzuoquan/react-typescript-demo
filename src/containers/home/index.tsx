import React, { Component } from 'react';

export default class Home extends Component {
  handleClick: () => void = () => {
    console.log(321);
  };

  render() {
    return (
      <div>
        React TypeScript
      </div>
    );
  }
}
