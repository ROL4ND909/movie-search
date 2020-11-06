import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SearchForm.scss';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="[ search-form ] [ color-light-shade ]">
        <div className="[ wrapper flow ]">
          <h1>Search for a movie ...</h1>

          <form id="searchForm" onSubmit={this.onSubmit}>
            <input type="text"
                   className="[ search-form__input ] [ radius ]"
                   name="searchText"
                   placeholder="Search Movies ..."
                   onChange={this.onChange} />

            <button type="submit" className="button">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
