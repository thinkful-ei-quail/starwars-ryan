/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import ChangeSearchType from '../ChangeSearchType/ChangeSearchType';

import './SearchBox.css';

export default class SearchBox extends Component {
  render() {
    return (
      <form>
        <ChangeSearchType />
        <SearchInput />
      </form>
    );
  }
}
