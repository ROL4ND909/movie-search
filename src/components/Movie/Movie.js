import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoading } from '../../actions/searchActions';

import Loader from '../Loader/Loader';

import './Movie.scss';

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  };

  render() {
    const { loading, movie } = this.props;

    let movieDetails = (
      <div className="[ splitter ] [ bg-light-shade gap-top-700 ]">
        <section>
          <img src={movie.Poster} alt="Movie Poster" />
        </section>
        <section className="[ movie ] [ flow ]">
          <h2>{movie.Title}</h2>

          <p>{movie.Plot}</p>

          <ul>
            <li><strong>Genre:</strong> {movie.Genre}</li>
            <li><strong>Released:</strong> {movie.Released}</li>
            <li><strong>Rated:</strong> {movie.Rated}</li>
            <li><strong>IMDB Rating:</strong> {movie.imdbRating}</li>
            <li><strong>Director:</strong> {movie.Director}</li>
            <li><strong>Writer:</strong> {movie.Writer}</li>
            <li><strong>Actors:</strong> {movie.Actors}</li>
          </ul>

          <Link to="/" className="button" data-variant="ghost">Back To Search</Link>
        </section>
      </div>
    );

    let content = loading ? <Loader /> : movieDetails;

    return <div className="wrapper">{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(Movie);
