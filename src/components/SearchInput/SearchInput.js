/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './SearchInput.css';

export default class SearchInput extends Component {
  render() {
    return (
      <>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => this.props.search(e.target.value)}
          />
        </div>

        <div className="button-container">
          <button type="submit" id="submit-search-btn">
            Search
          </button>
        </div>
      </>
    );
  }
}
