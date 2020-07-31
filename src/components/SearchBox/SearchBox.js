/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import getStarWarsData from '../Api/Api';

import './SearchBox.css';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  search = (searchTerm) => {
    console.log(searchTerm);
    this.setState({ searchTerm });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    console.log('handleSubmit', searchTerm);
    this.props.handleSearchTermSetState(searchTerm);
    getStarWarsData(searchTerm).then((data) => {
      const { results } = data;
      // this.props.handleDataSetState({ results });
      const specifiedResults = results.map((result) => {
        return {
          name: result.name,
          birthyear: result.birth_year,
          homeworld: result.homeworld
        };
      });
      this.props.handleDataSetState(specifiedResults);
    });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <SearchInput search={this.search} />
      </form>
    );
  }
}
