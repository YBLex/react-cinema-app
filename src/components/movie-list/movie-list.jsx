import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card.jsx';
import withVideo from '../../hocs/with-video/with-video.jsx';

const MovieCardWithVideoPlayer = withVideo(MovieCard);

const MovieList = (props) => {
  const {movies} = props;
  return (
    <div className="catalog__movies-list">
      {
        movies.map((movie) =>
          <MovieCardWithVideoPlayer
            key={`movie_${movie.id}`}
            movie={movie}
            onClick={() => {}}
            poster={movie.previewImage}
            preview={movie.previewVideoLink}
          />)
      }
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

export default MovieList;
