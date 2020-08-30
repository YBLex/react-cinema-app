import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import {getMovies, getMoviesFilteredByGenre, getGenres} from "../../redux/data/selectors.js";
import DataActionCreator from "../../redux/data/action-creator";
import {getAuthStatus} from '../../redux/user/selectors.js';

import PageContent from '../page-content/page-content.jsx';
import MovieCatalog from '../movie-catalog/movie-catalog.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import TabList from '../tab-list/tab-list.jsx';
import MovieHeader from '../movie-header/movie-header.jsx';
import Footer from '../footer/footer.jsx';

const Main = ({
  promoTitle,
  promoGenre,
  promoYear,
  moviesFilteredByGenre,
  movies,
  genres,
  filterMoviesByGenre,
  authStatus,
}) => {
  return (
    <>
      <section className="movie-card">
        <MovieHeader
          title={{
            name: `WTW`,
            class: `visually-hidden`,
          }}
          visible={false}
          headerClass="movie-card__head"
          withMovieCardBg
          withUserInfo
          authStatus={authStatus}
        />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoTitle}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoGenre}</span>
                <span className="movie-card__year">{promoYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageContent>
        <MovieCatalog>
          <TabList
            classes={{
              list: `catalog__genres-list`,
              item: `catalog__genres-item`,
              link: `catalog__genres-link`,
            }}
            tabNames={genres}
            onTabClick={(genre) => {
              const firstTabName = genres[0];
              if (genre !== firstTabName) {
                const filteredMovies = movies
                  .filter((movie) => movie.genre === genre);
                filterMoviesByGenre(filteredMovies);
                return;
              }

              filterMoviesByGenre(movies);
            }}
          />
          <MovieList
            movies={moviesFilteredByGenre}
          />
          <ShowMoreButton />
        </MovieCatalog>
        <Footer />
      </PageContent>
    </>
  );
};

const moviesType = PropTypes.arrayOf(PropTypes.shape({
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
})).isRequired;

Main.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
  movies: moviesType,
  moviesFilteredByGenre: moviesType,
  filterMoviesByGenre: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  authStatus: PropTypes.string.isRequired,
};

const mapState = (state) => ({
  movies: getMovies(state),
  moviesFilteredByGenre: getMoviesFilteredByGenre(state),
  genres: getGenres(state),
  authStatus: getAuthStatus(state),
});

const mapDispatch = (dispatch) => ({
  changeGenre(genre) {
    dispatch(DataActionCreator.changeGenre(genre));
  },
  filterMoviesByGenre(movies) {
    dispatch(DataActionCreator.filterMoviesByGenre(movies));
  },
});

export {Main};
export default connect(mapState, mapDispatch)(Main);
