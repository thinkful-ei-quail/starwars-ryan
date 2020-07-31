import React, { Component } from 'react';
import './SearchInput.css';

export default class SearchInput extends Component {
  render() {
    return (
      <>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
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
