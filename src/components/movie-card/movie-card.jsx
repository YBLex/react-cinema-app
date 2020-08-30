import React from 'react';
import PropTypes from 'prop-types';

import {PLAYBACK_DELAY} from '../../constants/constants.js';

const MovieCard = ({
  movie,
  onClick,
  onHover,
  onUnhover,
  children,
}) => {
  const {name} = movie;

  let timeout;
  const setActiveBefore = (seconds) => {
    timeout = setTimeout(() => {
      onHover();
    }, seconds);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => setActiveBefore(PLAYBACK_DELAY)}
      onMouseLeave={() => {
        clearTimeout(timeout);
        onUnhover();
      }}
      onClick={onClick}
    >
      <div className="small-movie-card__image">
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    videoLink: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  onUnhover: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default MovieCard;
