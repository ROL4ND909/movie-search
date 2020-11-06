import React, { Component } from 'react';

import { connect } from 'react-redux';

import Card from '../Card/Card';

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';

    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))
        :<p>{movies.Error}</p>;

    return <div className="[ wrapper auto-grid ] [ gap-top-500 ]">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
