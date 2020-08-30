import React from 'react';
import PropTypes from 'prop-types';

import MovieList from '../movie-list/movie-list.jsx';

const MoreLikeThis = (props) => {
  const {movieData, currentGenre} = props;

  const sortedByGenreMovieData = movieData
    .filter((movie) => movie.genre === currentGenre)
    .slice(0, 4);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MovieList
        movieData = {sortedByGenreMovieData}
      />
    </section>
  );
};

MoreLikeThis.propTypes = {
  movieData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    desctiption: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  currentGenre: PropTypes.string.isRequired,
};

export default MoreLikeThis;
