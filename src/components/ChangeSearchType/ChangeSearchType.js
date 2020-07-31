/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Default extends Component {
  render() {
    return (
      <div>
        <label>Search Type</label>
        <select>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
        </select>
      </div>
    );
  }
}
