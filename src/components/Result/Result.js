/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Result extends Component {
  render() {
    return (
      <li>
        <h3>{this.props.result.name}</h3>
        <p>Birth Year: {this.props.result.birthyear}</p>
        <p>Home World: {this.props.result.homeworld}</p>
      </li>
    );
  }
}
