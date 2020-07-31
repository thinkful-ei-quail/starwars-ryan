import React, { Component } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import Results from '../components/Results/Results';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sigil: 'w'
    };
  }

  render() {
    return (
      <div>
        <h1>Star Wars Search</h1>
        <SearchBox />
        <Results />
      </div>
    );
  }
}
