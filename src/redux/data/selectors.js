import NameSpace from '../name-space.js';
import {createSelector} from "reselect";
import {getArrayOfUniqueProps} from '../../utils/utils.js';
import {MAX_GENRES_ON_PAGE, ALL_GENRES} from '../../constants/constants.js';

const DATA = NameSpace.DATA;

export const getMovies = (store) => {
  return store[DATA].movies;
};

export const getMoviesFilteredByGenre = (store) => {
  return store[DATA].moviesFilteredByGenre;
};

export const getGenres = createSelector(
    getMovies,
    (movies) => {
      const genres = getArrayOfUniqueProps(movies, `genre`).length <= MAX_GENRES_ON_PAGE
        ? getArrayOfUniqueProps(movies, `genre`)
        : getArrayOfUniqueProps(movies, `genre`).slice(0, MAX_GENRES_ON_PAGE);
      return [ALL_GENRES, ...genres];
    }
);
