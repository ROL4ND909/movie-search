import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from '../SearchForm/SearchForm';
import MoviesContainer from '../Movie/MoviesContainer';
import Loader from '../Loader/Loader';

export class Landing extends Component {
  render() {
    const { loading } = this.props;

    return (
      <React.Fragment>
        <SearchForm />

        { loading ? <Loader /> : <MoviesContainer /> }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
