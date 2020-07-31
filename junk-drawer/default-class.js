import React, { Component } from 'react';

export default class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sigil: 'd'
    };
  }

  render() {
    return (
      <div>
        <h2>This is a default class component for React.</h2>
      </div>
    );
  }
}
