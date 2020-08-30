import ActionType from './action-type.js';

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  filterMoviesByGenre: (movies) => ({
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: movies,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
};

export default ActionCreator;
