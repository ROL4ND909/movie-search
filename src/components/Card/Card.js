import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Card.scss';

export class Card extends Component {
  render() {
    const { movie } = this.props;

    return (
      <article className="card">
        <img className="card__image" src={movie.Poster} alt={movie.Title} />
        <div className="[ card__content ] [ flow ]">
          <h3 className="text-400">{movie.Title} - <span className="[ text-300 color-tertiary ]">{movie.Year}</span></h3>
          <Link className="button" to={'/movie/' + movie.imdbID}>Movie Details</Link>
        </div>
      </article>
    );
  }
}

export default Card;
