import React, { Component } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import Results from '../components/Results/Results';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'w',
      data: []
    };
  }

  handleSearchTermSetState = (searchTerm) => {
    console.log('setting state:', searchTerm);
    this.setState({ searchTerm });
  };

  handleDataSetState = (data) => {
    console.log('from app', data);
    this.setState({ data });
  };

  render() {
    return (
      <div>
        <h1>Star Wars Search</h1>
        <SearchBox
          handleSearchTermSetState={this.handleSearchTermSetState}
          handleDataSetState={this.handleDataSetState}
        />
        <Results data={this.state.data} />
      </div>
    );
  }
}
