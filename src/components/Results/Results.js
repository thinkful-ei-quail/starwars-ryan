/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Result from '../Result/Result';

export default class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <h3>Results Displayed Here...</h3>
        <ul>
          {this.props.data.map((result, index) => (
            <Result key={index} result={result} />
          ))}
        </ul>
      </div>
    );
  }
}
